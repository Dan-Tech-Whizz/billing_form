/*
  Module 2 - Assignment 2
  Dynamic Websites & Applications

  Group Members:
   - Daniel Wright          [2401010405]
   - Gabrielle Lawerence    [ID]
   - Aliahh Thompson        [ID]
   - Nathan Chen            [ID]
 */

 let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// 1. Parse the JSON string into a JavaScript object
const obj = JSON.parse(text);

// 2. Build the <li> items using a template literal and ${}
const items = obj.employees
  .map(emp => `<li>${emp.firstName} ${emp.lastName}</li>`)
  .join("");

// 3. Wrap in a <ul> and append to the #demo div
const html = `<ul>${items}</ul>`;
document.getElementById("demo").innerHTML += html;