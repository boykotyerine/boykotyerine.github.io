document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.brand-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Filtreleme fonksiyonu
    function filterCards(category) {
        cards.forEach(card => {
            if (category === 'hepsi') {
                // Tüm kartları göster
                card.style.display = '';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else if (card.dataset.category === category) {
                // Seçili kategorideki kartları göster
                card.style.display = '';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                // Diğer kartları gizle
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Filtre butonlarına tıklama olayı ekle
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif buton stilini güncelle
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Kartları filtrele
            const selectedCategory = button.getAttribute('data-category');
            filterCards(selectedCategory);
        });
    });

    // Sayfa yüklendiğinde tüm kartları göster
    cards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.transition = 'all 0.3s ease-in-out';
    });

    // İlk yüklemede "Hepsi" butonu aktif olsun
    const allButton = document.querySelector('[data-category="hepsi"]');
    if (allButton) {
        allButton.classList.add('active');
    }

    // Kartların hover efektleri
    cards.forEach(card => {
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        
        card.addEventListener('mouseover', function() {
            if (this.style.display !== 'none') {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }
        });
        
        card.addEventListener('mouseout', function() {
            if (this.style.display !== 'none') {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
        });
    });

    // Sayfa ilk yüklendiğinde kartların animasyonu
    function animateCards() {
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    animateCards();
}); 
