document.getElementById("dateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let dob = document.getElementById("dob").value.trim();
    let dobPattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19[0-9]{2}|200[0-9]|201[0-6])$/;

    if (dob === "" || !dobPattern.test(dob)) {
        document.getElementById("dobError").textContent = "Invalid date (format: dd-mm-yyyy, year 1900-2016)";
    } else {
        document.getElementById("dobError").textContent = "";
        alert("Form submitted successfully!");
        this.submit();
    }
});
