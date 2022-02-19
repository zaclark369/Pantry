loginForm = async event => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', 
      {
        method: 'POST',
        body: JSON.stringify(
          {
            username,
            password
          }
        ),
        headers: { 'Content-Type': 'application/json'}
      }
    )
    response.ok ? document.location.replace('/') : alert(response.statusText);
  }
}

signupForm = async event => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', 
      {
        method: 'POST',
        body: JSON.stringify(
          {
            username,
            password
          }
        ),
        headers: { 'Content-Type': 'application/json'}
      }
    )
    response.ok ? document.location.replace('/') : alert(response.statusText);
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupForm);
document.querySelector('.login-form').addEventListener('submit', loginForm);