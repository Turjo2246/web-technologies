function validateForm(formId) {
    let isValid = false;
    
    // Clear all previous error messages
    clearErrorMessages(formId);
    
    switch(formId) {
        case 'nameForm':
            isValid = validateNameForm();
            break;
        case 'emailForm':
            isValid = validateEmailForm();
            break;
        case 'genderForm':
            isValid = validateGenderForm();
            break;
        case 'dobForm':
            isValid = validateDOBForm();
            break;
        case 'degreeForm':
            isValid = validateDegreeForm();
            break;
        case 'bloodForm':
            isValid = validateBloodForm();
            break;
        case 'profileForm':
            isValid = validateProfileForm();
            break;
        default:
            isValid = true;
    }
    
    if (isValid) {
        showSuccessMessage();
        // Prevent form submission for demo purposes (remove this in production)
        setTimeout(() => {
            document.getElementById(formId).reset();
        }, 2000);
        return false;
    }
    
    return isValid;
}

// Clear all error messages for a form
function clearErrorMessages(formId) {
    const form = document.getElementById(formId);
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
}

// Show error message below a specific field
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    errorMessage.style.cssText = `
        color: #ff0000;
        font-size: 0.8em;
        margin-top: 5px;
    `;
    
    // Insert after the field
    field.parentNode.insertBefore(errorMessage, field.nextSibling);
}

// Success message (green)
function showSuccessMessage() {
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) existingMessage.remove();
    
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #4CAF50;
        color: white;
        padding: 15px 30px;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: fadeInOut 3s ease-in-out;
    `;
    
    document.body.appendChild(successMessage);
    setTimeout(() => successMessage.remove(), 3000);
}

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; top: 0; }
        10% { opacity: 1; top: 20px; }
        90% { opacity: 1; top: 20px; }
        100% { opacity: 0; top: 0; }
    }
`;
document.head.appendChild(style);

// Updated validation functions with visual errors
function validateNameForm() {
    const name = document.getElementById('name').value.trim();
    const nameRegex = /^[a-zA-Z][a-zA-Z .-]*\s+[a-zA-Z .-]+$/;
    
    if (!name) {
        showError('name', 'Name cannot be empty');
        return false;
    }
    
    if (name.split(/\s+/).length < 2) {
        showError('name', 'Name must contain at least two words');
        return false;
    }
    
    if (!nameRegex.test(name)) {
        showError('name', 'Name can only contain a-z, A-Z, dot(.) or dash(-) and must start with a letter');
        return false;
    }
    
    return true;
}

function validateEmailForm() {
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showError('email', 'Email cannot be empty');
        return false;
    }
    
    if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address (e.g., sample@example.com)');
        return false;
    }
    
    return true;
}

function validateGenderForm() {
    const genderSelected = document.querySelector('#genderForm input[name="gender"]:checked');
    
    if (!genderSelected) {
        showError('male', 'Please select a gender'); // Show near first radio button
        return false;
    }
    
    return true;
}

function validateDOBForm() {
    let isValid = true;
    const dd = document.getElementById('dd').value.trim();
    const mm = document.getElementById('mm').value.trim();
    const yyyy = document.getElementById('yyyy').value.trim();
    
    if (!dd) {
        showError('dd', 'Day cannot be empty');
        isValid = false;
    } else if (isNaN(dd) || parseInt(dd) < 1 || parseInt(dd) > 31) {
        showError('dd', 'Day must be between 1 and 31');
        isValid = false;
    }
    
    if (!mm) {
        showError('mm', 'Month cannot be empty');
        isValid = false;
    } else if (isNaN(mm) || parseInt(mm) < 1 || parseInt(mm) > 12) {
        showError('mm', 'Month must be between 1 and 12');
        isValid = false;
    }
    
    if (!yyyy) {
        showError('yyyy', 'Year cannot be empty');
        isValid = false;
    } else if (isNaN(yyyy) || parseInt(yyyy) < 1900 || parseInt(yyyy) > 2016) {
        showError('yyyy', 'Year must be between 1900 and 2016');
        isValid = false;
    }
    
    return isValid;
}

function validateDegreeForm() {
    const degrees = document.querySelectorAll('#degreeForm input[name="degree"]:checked');
    
    if (degrees.length === 0) {
        showError('ssc', 'Please select at least one degree');
        return false;
    }
    
    return true;
}

function validateBloodForm() {
    const bloodGroup = document.getElementById('bloodGroup').value;
    
    if (!bloodGroup) {
        showError('bloodGroup', 'Please select a blood group');
        return false;
    }
    
    return true;
}

function validateProfileForm() {
    let isValid = true;
    const userId = document.getElementById('userId').value.trim();
    const picture = document.getElementById('picture').value;
    
    if (!userId) {
        showError('userId', 'User Id cannot be empty');
        isValid = false;
    } else if (isNaN(userId) || parseInt(userId) <= 0) {
        showError('userId', 'User Id must be a positive number');
        isValid = false;
    }
    
    if (!picture) {
        showError('picture', 'Please select a profile picture');
        isValid = false;
    }
    
    return isValid;
}