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

const backgrounds = [
    'img/bg1.jpg',
    'img/bg2.jpg',
    'img/bg3.jpg',
    'img/bg4.jpg'
];

// Chọn một ảnh ngẫu nhiên từ danh sách
const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

// Áp dụng ảnh nền ngẫu nhiên vào body
document.body.style.backgroundImage = `url(${randomBackground})`;
