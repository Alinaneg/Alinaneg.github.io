
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-form');
    const quantityInput = document.getElementById('quantity');
    const quantityError = document.getElementById('quantity-error');
    const resultDiv = document.getElementById('result');
    
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        quantityError.textContent = '';
        resultDiv.textContent = '';
        
        const quantity = quantityInput.value.trim();
        const productPrice = parseFloat(document.getElementById('product').value);
        const quantityRegex = /^\d+$/;
        const match = quantity.match(quantityRegex);
        
        if (match === null) {
            quantityError.textContent = 'Пожалуйста, введите число';
            return;
        }

        const quantityNum = parseInt(quantity);
        const totalCost = productPrice * quantityNum;
        resultDiv.textContent = `Стоимость заказа: ${totalCost} руб.`;
    });
});