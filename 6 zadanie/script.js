document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const serviceSelect = document.getElementById("service");
    const optionsGroup = document.getElementById("options-group");
    const propertyGroup = document.getElementById("property-group");
    const optionsSelect = document.getElementById("options");
    const propertyCheckbox = document.getElementById("property");
    const quantityInput = document.getElementById("quantity");
    const quantityError = document.getElementById("quantity-error");
    const resultDiv = document.getElementById("result");
    

    const basePrices = {
        "1": 1000,
        "2": 1500, 
        "3": 2000  
    };
    
    function intr(){
        serviceSelect.addEventListener("change", serviseSh);
        optionsSelect.addEventListener("change", calculate);
        propertyCheckbox.addEventListener("change", calculate);
        quantityInput.addEventListener("input", calculate);
        serviseSh();
        calculate();
    }
    

    function serviseSh() {
        const selectedService = serviceSelect.value;
        switch(selectedService) {
            case "1":
                optionsGroup.classList.add("hidden");
                propertyGroup.classList.add("hidden");
                break;
            case "2":
                optionsGroup.classList.remove("hidden");
                propertyGroup.classList.add("hidden");
                break;
            case "3": 
                optionsGroup.classList.add("hidden");
                propertyGroup.classList.remove("hidden");
                break;
        } 
        calculate();
    }
    
    function calculate() {
        quantityError.textContent = "";
        const selectedService = serviceSelect.value;
        const basePrice = basePrices[selectedService];
        const quantity = quantityInput.value.trim();
        const quantityRegex = /^\d+$/;
        
        if (!quantity.match(quantityRegex)) {
            quantityError.textContent = "Пожалуйста, введите число";
            return;
        }
        
        const quantityNum = parseInt(quantity, 10);
        if (quantityNum <= 0) {
            quantityError.textContent = "Количество должно быть больше 0";
            return;
        }
        let optionsPrice = 0;
        let propertyPrice = 0;
        if (selectedService === "2") {
            optionsPrice = parseFloat(optionsSelect.value) || 0;
        }
        if (selectedService === "3" && propertyCheckbox.checked) {
            propertyPrice = parseFloat(propertyCheckbox.value) || 0;
        }
        const totalCost = (basePrice + optionsPrice + propertyPrice)
        *quantityNum;
        resultDiv.textContent = `Стоимость заказа: ${totalCost} руб.`;
    }
    intr();
});