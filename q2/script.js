$.validator.addMethod("lecturerEmailCheck", function(value, element) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
        return true;
    } else {
        return false;
    }
}, "Please enter a valid email structure.");

$(document).ready(function() {

    function evaluatePaymentState(){
        var currentPayment = $('input[name="payment"]:checked').val();
        if (currentPayment === 'paypal') {
            $('.payment-card-field').addClass('blurred-feild').val('').prop('disabled', true);
            $('.payment-card-field').removeClass('error');
        } else {
            $('.payment-card-field').removeClass('blurred-feild').prop('disabled', false);
        }
    }


    evaluatePaymentState();

    $('input[name="payment"]').change(function() {
        evaluatePaymentState();
    });

    
    function shippingNeeded() {
        return !$('#same_as_billing').is(':checked');
    }

    $('#same_as_billing').change(function() {
        if ($(this).is(':checked')) {
            $('#shippingFields').hide();
        } else {
            $('#shippingFields').show();
        }
    });

    // Execute field syntax validation settings
    $("#funForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                lecturerEmailCheck: true // Uses the added filter method above
            },
            address: "required",
            city: "required",
            state: "required",
            postal: "required",
            country: "required",
            
            // Conditional requirement: Card fields only matter if payment is not PayPal
            card_number: { 
                required: function() {
                    return $('input[name="payment"]:checked').val() !== 'paypal';
                }
            },
            exp_date: {
                required: function() {
                    return $('input[name="payment"]:checked').val() !== 'paypal';
                }
            },
        
            sName:    { required: shippingNeeded },
            sAddress: { required: shippingNeeded },
            sCity:    { required: shippingNeeded },
            sState:   { required: shippingNeeded },
            sPostal:  { required: shippingNeeded },
            sCountry: { required: shippingNeeded }
        },
        messages: {
            name: "Name field can not be left blank.",
            email: {
                required: "An email identifier is required.",
                lecturerEmailCheck: "Improper email address pattern syntax."
            },
            address: "Please include your street location address.",
            city: "City is required.",
            state: "State or Province field required.",
            postal: "Postal tracking code is missing.",
            country: "Please select an applicable country option.",
            card_number: "Credit card information is required.",
            exp_date: "Card expiry date is required.",
            sName: "Please fill out shipping receiver name.",
            sAddress: "Shipping destination location required.",
            sCity: "Shipping city is required.",
            sState: "Shipping state or province is required.",
            sPostal: "Shipping postal code is required.",
            sCountry: "Please select a shipping country."
        }
    });
});
