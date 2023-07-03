const users = [
    { username: "user", password: "123abc" },
  ];
  
  const loginDiv = document.getElementById('loginDiv');
  const logoutDiv = document.getElementById('logoutDiv');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginForm = document.getElementById('loginForm');
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  
  function handleLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = passwordInput.value;
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      sessionStorage.setItem('username', username);
      loginDiv.style.display = 'none';
      logoutDiv.style.display = 'block';
    } else {
      alert('Geçersiz kullanıcı adı veya şifre.');
    }
  }
  
  function handleLogout() {
    sessionStorage.removeItem('username');
    loginDiv.style.display = 'block';
    logoutDiv.style.display = 'none';
    loginForm.reset();
  }
  
  function togglePasswordVisibility() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
  
  function checkSession() {
    const username = sessionStorage.getItem('username');
  
    if (username) {
      loginDiv.style.display = 'none';
      logoutDiv.style.display = 'block';
    } else {
      loginDiv.style.display = 'block';
      logoutDiv.style.display = 'none';
    }
  }
  
  loginForm.addEventListener('submit', handleLogin);
  logoutBtn.addEventListener('click', handleLogout);
  togglePassword.addEventListener('change', togglePasswordVisibility);
  
  checkSession();
  