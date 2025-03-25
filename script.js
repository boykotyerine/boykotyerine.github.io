document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.brand-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Filtreleme fonksiyonu
    function filterCards(category) {
        cards.forEach(card => {
            if (category === 'hepsi' || card.getAttribute('data-category') === category) {
                // Görünür olacak kartlar
                card.style.display = 'flex';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                });
            } else {
                // Gizlenecek kartlar
                card.style.opacity = '0';
                card.style.transform = 'translateY(-20px) scale(0.9)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Filtre butonları için click eventi
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif buton stilini güncelle
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Kartları filtrele
            const category = button.getAttribute('data-category');
            filterCards(category);

            // Görünür kartları yeniden düzenle
            setTimeout(() => {
                const visibleCards = document.querySelectorAll('.brand-card[style*="display: flex"]');
                visibleCards.forEach((card, index) => {
                    card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 300);
        });
    });

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
