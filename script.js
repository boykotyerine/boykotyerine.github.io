document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.brand-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Filtreleme fonksiyonu
    function filterCards(category) {
        cards.forEach(card => {
            // display özelliğini kullanarak görünürlüğü kontrol edelim
            if (category === 'hepsi' || card.getAttribute('data-category') === category) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300); // Animasyon süresi kadar bekle
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
        });
    });

    // Kartların hover efektleri
    cards.forEach(card => {
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

    // Sayfa yüklendiğinde kartların sırayla görünmesi
    function animateCards() {
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    animateCards();
}); 
