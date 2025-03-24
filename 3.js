document.getElementById("checkboxForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let checkboxes = document.querySelectorAll('input[name="option"]:checked');
    
    if (checkboxes.length === 0) {
        document.getElementById("checkboxError").textContent = "Please select at least one option";
    } else {
        document.getElementById("checkboxError").textContent = "";
        alert("Form submitted successfully!");
        this.submit();
    }
});
