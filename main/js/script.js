document.addEventListener("DOMContentLoaded", () => {
    const searchSetting = document.querySelector(".search_setting");
    const searchExpand = document.querySelector(".search_setting-expand");

    searchSetting.addEventListener("click", () => {
        // Thêm hoặc xóa class 'show' để bật/tắt
        searchExpand.classList.toggle("show");
    });

    // Đóng khi nhấn ra ngoài
    document.addEventListener("click", (event) => {
        if (!searchSetting.contains(event.target)) {
            searchExpand.classList.remove("show");
        }
    });
});

// Lấy đối tượng nút chuyển đổi
const toggleButton = document.getElementById("darkModeToggle");

// Kiểm tra nếu chế độ tối đã được lưu trong localStorage
if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark-mode");
}

// Thêm sự kiện click vào nút chuyển đổi
toggleButton.addEventListener("click", function () {
    // Kiểm tra nếu class dark-mode đã được thêm vào :root
    if (document.documentElement.classList.contains("dark-mode")) {
        // Nếu có, gỡ bỏ class dark-mode
        document.documentElement.classList.remove("dark-mode");
        // Lưu trạng thái vào localStorage
        localStorage.setItem("darkMode", "false");
    } else {
        // Nếu không, thêm class dark-mode
        document.documentElement.classList.add("dark-mode");
        // Lưu trạng thái vào localStorage
        localStorage.setItem("darkMode", "true");
    }
});