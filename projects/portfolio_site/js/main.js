// Đợi cho HTML load xong hoàn toàn mới chạy JS
document.addEventListener("DOMContentLoaded", function() {
    
    // Tìm tất cả các thanh màu
    const progressBars = document.querySelectorAll('.skill-progress');

    // Cài đặt "Kẻ quan sát"
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Nếu phần tử đã lọt vào khung nhìn (người dùng đã cuộn tới)
            if (entry.isIntersecting) {
                const bar = entry.target;
                // Lấy độ rộng mong muốn từ thuộc tính data-width trong HTML
                const targetWidth = bar.getAttribute('data-width');
                
                // Gán độ rộng vào style để CSS transition thực hiện animation
                bar.style.width = targetWidth;
                
                // Ngừng quan sát sau khi đã chạy hiệu ứng xong (không bị lặp lại)
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 }); // Chỉ chạy khi thanh bar xuất hiện ít nhất 50% trên màn hình

    // Bắt đầu quan sát từng thanh progress bar
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});