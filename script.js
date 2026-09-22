const form = document.getElementById("inquiry-form");
console.log(form);
const productSelect = document.getElementById("product");
const productMessage = document.getElementById("product-message");
const productMessages = {
    Cake: "Tell us the size, flavor, and occasion for your cake.",
    Cupcakes: "Tell us the quantity, flavors, and frosting preferences for your cupcakes.",
    Bread: "Tell us the quantity and type of artisan bread you would like.",
    Pastries: "Tell us the qunatity and types of pastries you would like.",
    Cookies: "Tell us the quantity, flavors, and any design requests for your cookies.",
    Other: "Tell us what you have in mind and we'll see what we can bake for you!"
};
const storageKeys = {
    product: "selectedProduct",
    name: "customerName"
};
function updateProductMessage() {
    productMessage.textContent = productMessages[productSelect.value] || "";
}
function validateName() {
    const nameError = document.getElementById("name-error");
    if (nameInput.value.trim() === "") {
       nameError.textContent = "Please enter your name.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}
const nameInput = document.getElementById("name");
nameInput.addEventListener("input", function() {
localStorage.setItem(storageKeys.name, nameInput.value);
});
const savedName = localStorage.getItem(storageKeys.name);
if (savedName) {
    nameInput.value = savedName;
}
const savedProduct = localStorage.getItem(storageKeys.product);
if (savedProduct) {
    productSelect.value = savedProduct;
}
productSelect.addEventListener("change", function() {
    localStorage.setItem(storageKeys.product, productSelect.value);
    updateProductMessage();
});
form.addEventListener("submit", function(event) {
    const nameError = document.getElementById("name-error");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    let formIsValid = true;

    if (!validateName()) {
        formIsValid = false;
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