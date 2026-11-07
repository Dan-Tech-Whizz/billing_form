$.validator.addMethod("lecturerEmailCheck", function(value, element) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
        return true;
    } else {
        return false;
    }
}, "Please enter a valid email structure.");

$(document).ready(function)() {

    function eveluatePaymentState(){
        var currentPayment = $ ('input[name="payment"];checked').val();
        if (currenttPyment === 'paypal') {
            $('.payment-card-feild').addclass('blurred-feild').val('').prop('disabled', true);
    
        }else {
            $('.payment-card-feild').removeClass('blurred-feild').prop('disabled', false);
        }
    }
}

evaluatePymentState();

$('input[name="payment"]').change(function() {
        evaluatePaymentState();
    });

$('#same_as_billing').change(function() {
        if ($(this).is(':checked')) {
            $('#extra_shipping_section').hide();
        } else {
            $('#extra_shipping_section').show();
        }
    });