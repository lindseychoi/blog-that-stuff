const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log("logging clicked");
  
    if (email && password) {
        console.log("logging in:", email, password);
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/userprofile');
      } else {
        alert(response.statusText);
      }
    }
  };

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#first-name-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/userprofile');
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById('loginbtn').addEventListener('click', loginFormHandler);

document.getElementById('newUserBtn').addEventListener('click', signupFormHandler);

