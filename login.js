const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// Handle Sign In Form Submission
document.querySelector('.sign-in form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const email = document.querySelector('.sign-in input[type="email"]').value;
    const password = document.querySelector('.sign-in input[type="password"]').value;

    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields.'); // Show error if fields are empty
        return; // Stop further execution
    }

    // Simulate a successful login (replace this with actual authentication logic)
    const isLoginSuccessful = true; // Replace with your validation logic

    if (isLoginSuccessful) {
        window.location.href = 'index.html'; // Redirect to the main page
    } else {
        alert('Invalid email or password. Please try again.'); // Show error if login fails
    }
});

// Handle Sign Up Form Submission
document.querySelector('.sign-up form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.querySelector('.sign-up input[type="text"]').value;
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelector('.sign-up input[type="password"]').value;

    // Simple validation
    if (!name || !email || !password) {
        alert('Please fill in all fields.'); // Show error if fields are empty
        return; // Stop further execution
    }

    // Simulate a successful sign-up (replace this with actual sign-up logic)
    const isSignUpSuccessful = true; // Replace with your validation logic

    if (isSignUpSuccessful) {
        window.location.href = 'index.html'; // Redirect to the main page
    } else {
        alert('Sign-up failed. Please try again.'); // Show error if sign-up fails
    }
});
// Handle Sign In Form Submission
document.querySelector('.sign-in form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const email = document.querySelector('.sign-in input[type="email"]').value;
    const password = document.querySelector('.sign-in input[type="password"]').value;

    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields.'); // Show error if fields are empty
        return; // Stop further execution
    }

    // Simulate a successful login (replace this with actual authentication logic)
    const isLoginSuccessful = true; // Replace with your validation logic

    if (isLoginSuccessful) {
        // Set login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to the main page
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password. Please try again.'); // Show error if login fails
    }
});