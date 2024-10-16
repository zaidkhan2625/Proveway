document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const totalPriceElement = document.getElementById("total-price");

    // Function to update the total price
    function updateTotalPrice() {
        let total = 0;
        options.forEach((option) => {
            if (option.querySelector("input[type='radio']").checked) {
                const price = parseFloat(option.getAttribute("data-price"));
                total += price;
            }
        });
        totalPriceElement.innerText = `$${total.toFixed(2)} USD`;
    }

    // Function to show/hide size and color options
    function toggleSizeColorOptions() {
        options.forEach((option) => {
            const sizeColorContainer = option.querySelector(".size-color-container");
            if (option.querySelector("input[type='radio']").checked) {
                sizeColorContainer.style.display = 'block';
            } else {
                sizeColorContainer.style.display = 'none';
            }
        });
    }

    // Add event listeners to radio buttons
    options.forEach((option) => {
        option.querySelector("input[type='radio']").addEventListener("change", () => {
            options.forEach((opt) => opt.classList.remove("selected"));
            option.classList.add("selected");
            updateTotalPrice();
            toggleSizeColorOptions();
        });
    });

    // Initialize total price and size/color options
    updateTotalPrice();
    toggleSizeColorOptions();
});
