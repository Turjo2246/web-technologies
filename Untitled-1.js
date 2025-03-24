document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let namePattern = /^[A-Za-z][A-Za-z.\-]*\s[A-Za-z.\-]+$/;

    if (name === "" || !namePattern.test(name)) {
        document.getElementById("nameError").textContent = "Invalid name (must contain at least two words, start with a letter)";
    } else {
        document.getElementById("nameError").textContent = "";
        alert("Form submitted successfully!");
        this.submit();
    }
});
