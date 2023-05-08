// Get references to the form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Listen for the form submission event
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data and log it to the console
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  console.log(formData);

  // Clear the form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  // Show a success message to the user
  alert('Your message has been sent!');
});

// Add a click event listener to the "Send" button
const sendButton = document.querySelector('button[type="submit"]');
sendButton.addEventListener('click', () => {
  // Track the click event with Google Analytics
  ga('send', 'event', 'button', 'click', 'send-button');
});
