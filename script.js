    // Check login state
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      window.location.href = 'login.html';
    }
  
    // Logout functionality
    document.querySelector('.logout-link').addEventListener('click', function () {
      // Clear login state
      localStorage.removeItem('isLoggedIn');
      // Redirect to login page
      window.location.href = 'login.html';
    });

// Happy Hour Countdown Timer
const countdown = document.getElementById('countdown');
let timeLeft = 2 * 60 * 60; // 2 hours in seconds

const timer = setInterval(() => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    countdown.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        countdown.textContent = "Happy Hour Ended!";
    }
    timeLeft--;
}, 1000);

// Order Customization
const extraCheese = document.getElementById('extra-cheese');
const removeOnions = document.getElementById('remove-onions');
const spicySauce = document.getElementById('spicy-sauce');
const orderSummary = document.getElementById('order-summary');

function updateOrderSummary() {
    let summary = 'Your Order:';
    if (extraCheese.checked) summary += '\n- Extra Cheese';
    if (removeOnions.checked) summary += '\n- Remove Onions';
    if (spicySauce.checked) summary += '\n- Spicy Sauce';
    orderSummary.textContent = summary;
}

extraCheese.addEventListener('change', updateOrderSummary);
removeOnions.addEventListener('change', updateOrderSummary);
spicySauce.addEventListener('change', updateOrderSummary);

// Loyalty Program
const loyaltyPoints = document.getElementById('loyalty-points');
let points = 150; // Initial points

function updatePoints(newPoints) {
    points += newPoints;
    loyaltyPoints.textContent = points;
}