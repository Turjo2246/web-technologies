document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email address";
    } else {
        document.getElementById("emailError").textContent = "";
        alert("Form submitted successfully!");
        this.submit();
    }
});
