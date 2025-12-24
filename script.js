// 1. Tahun Otomatis untuk Copyright
// Mengambil tahun saat ini dari perangkat pengguna
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Smooth Scrolling untuk Link Navigasi
// Membuat efek scroll halus saat link navbar diklik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah lompatan langsung
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});