
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    
    var orderForm = document.getElementById("order-form");
    var quantityInput = document.getElementById("quantity");
    var quantityError = document.getElementById("quantity-error");
    var resultDiv = document.getElementById("result");
    var quantity;
    var productPrice;
    var quantityRegex;
    var match;
    var quantityNum;
    var totalCost;
    
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        quantityError.textContent = "";
        resultDiv.textContent = "";
        
        quantity = quantityInput.value.trim();
        productPrice = parseFloat(document.getElementById("product").value);
        quantityRegex = /^\d+$/;
        match = quantity.match(quantityRegex);
        
        if (match === null) {
            quantityError.textContent = "Пожалуйста, введите число";
            return;
        }
        
        quantityNum = parseInt(quantity, 10);
        
        if (quantityNum <= 0) {
            quantityError.textContent = "Количество должно быть больше 0";
            return;
        }
        
        totalCost = productPrice * quantityNum;
        resultDiv.textContent = "Стоимость заказа: " + totalCost + " руб.";
    });
});