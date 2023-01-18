/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: harmindersinghnijjar
      Date:   1/17/2023

      Filename: project03-01.js
*/

// Page 84 of the book.
let menuItems = document.getElementsByClassName("menuItem");



// Page 89 of the book.
for (let i=0; len=menuItems.length; i++) {
      // Add an event listener to each menu item to call the calcTotal function when the item is clicked
      menuItems[i].addEventListener("click", calcTotal);
}

function calcTotal() {
      let orderTotal = 0;
      // Page 89 of the book.
      for(let i=0; i<menuItems.length; i++) {
            if (menuItems[i].checked) {
                  orderTotal += Number(menuItems[i].value);
                  console.log(orderTotal);
            }

            
      }
      // Change the value of the billTotal element to the orderTotal value
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);


}



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }