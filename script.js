const form = document.getElementById("inquiry-form");
console.log(form);
const productSelect = document.getElementById("product");
const productMessage = document.getElementById("product-message");
const nameInput = document.getElementById("name");
nameInput.addEventListener("input", function() {
localStorage.setItem("customerName", nameInput.value);
});
const savedName = localStorage.getItem("customerName");
if (savedName) {
    nameInput.value = savedName;
}
const savedProduct = localStorage.getItem("selectedProduct");
if (savedProduct) {
    productSelect.value = savedProduct;
}
productSelect.addEventListener("change", function() {
    localStorage.setItem("selectedProduct", productSelect.value);
    if (productSelect.value === "Cake") {
        productMessage.textContent = "Tell us the size, flavor, and occasion for your cake.";
    } else if (productSelect.value === "Cupcakes") {
        productMessage.textContent = "Tell us the quantity, flavors, and frosting preferences for your cupcakes.";
    } else if (productSelect.value === "Bread") {
        productMessage.textContent = "Tell us the quantity and  type of artisan bread you would like.";
    } else if (productSelect.value === "Pastries") {
        productMessage.textContent = "Tell us the quantity and types of pastries you would like.";
    } else if (productSelect.value === "Cookies") {
        productMessage.textContent = "Tell us the quantity, flavors, and any design requests for your cookies.";
    } else if (productSelect.value === "Other") {
        productMessage.textContent = "Tell us what you have in mind and we'll see what we can bake for you!";
    }
});
form.addEventListener("submit", function(event) {
    const nameError = document.getElementById("name-error");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    let formIsValid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        formIsValid = false;
    } else {
        nameError.textContent = "";
    }
    if (
        emailInput.value.trim() === "" ||
        !emailInput.value.includes("@") ||
        !emailInput.value.includes(".") 
    ) {
        emailError.textContent = "Please enter a valid email address.";
        formIsValid = false;
    } else {
        emailError.textContent = "";
    }
    if (!formIsValid) {
        event.preventDefault();
    }
});