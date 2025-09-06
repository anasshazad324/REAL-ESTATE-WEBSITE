document.getElementById('srfiForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Form ko submit hone se rokta hai jab tak validation pass na ho

    // Form fields
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const message = document.getElementById('message');

    // Error containers
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const messageError = document.getElementById('Message-error');

    // Reset previous errors
    [username, email, password, message].forEach(field => {
      field.style.border = '1px solid #ccc';
    });

    [usernameError, emailError, passwordError, messageError].forEach(div => {
      div.textContent = '';
    });

    // Validation flags
    let isValid = true;

    // Username validation
    if (username.value.trim() === '') {
      usernameError.textContent = 'Username is required';
      username.style.border = '2px solid red';
      isValid = false;
    }

    // Email validation
    if (email.value.trim() === '') {
      emailError.textContent = 'Email is required';
      email.style.border = '2px solid red';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      emailError.textContent = 'Enter a valid email';
      email.style.border = '2px solid red';
      isValid = false;
    }

    // Password validation
    if (password.value.trim() === '') {
      passwordError.textContent = 'Password is required';
      password.style.border = '2px solid red';
      isValid = false;
    } else if (password.value.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters';
      password.style.border = '2px solid red';
      isValid = false;
    }

    // Message validation
    if (message.value.trim() === '') {
      messageError.textContent = 'Message is required';
      message.style.border = '2px solid red';
      isValid = false;
    }

    // Submit if valid
    if (isValid) {
      alert('Form submitted successfully!');
      document.getElementById('srfiForm').reset();
    }
  });