// Hardcoded credentials
const validCredentials = {
  email: 'admin@gmail.com',
  password: 'password123'
};

// Handle form submission
document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  // Get input values
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Message container
  const message = document.getElementById('message');
  message.innerHTML = '';

  // Pseudo-authentication logic
  if (email === validCredentials.email && password === validCredentials.password) {
    message.innerHTML = '<div class="success">Login succesfull.</div>'
    setTimeout(() => {
      window.location.href = '/SBA-307-308/pages/newdash.html'; 
  }, 500);
  }else if(email !== "" && email !== validCredentials.email && !regex.test(email)){
    message.innerHTML = '<div class="error">Enter a valid email adrress</div>'
  }
  else if(email === "" || password === ""){
     message.innerHTML = '<div class="error">Email or Password can not be empty.</div>'
  } else {
      message.innerHTML = '<div class="error">Invalid email or password.</div>';
  }

  // Clear inputs (optional)
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});