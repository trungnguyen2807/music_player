document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your actual credentials
    const validUsername = "admin";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
        // Lưu trạng thái đăng nhập vào localStorage
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "../main/index.html";
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = "block";
    }
});