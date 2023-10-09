document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const orderButton = document.getElementById('order-button');

    menuButton.addEventListener('click', function() {
        // Logic to handle menu button click
        // Redirect or show menu modal, etc.
        alert('Redirecting to Menu Page...');
    });

    orderButton.addEventListener('click', function() {
        // Logic to handle order button click
        // Redirect to order page, show order modal, etc.
        alert('Redirecting to Order Page...');
    });
});
