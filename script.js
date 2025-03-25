document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.brand-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Filtreleme fonksiyonu
    function filterCards(category) {
        cards.forEach(card => {
            if (category === 'hepsi' || card.dataset.category === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
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
            const category = button.dataset.category;
            filterCards(category);
        });
    });

    // Kartların hover efektleri
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });

        // Tıklama efekti
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Sayfa yüklendiğinde kartların sırayla görünmesi
    function animateCards() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                requestAnimationFrame(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            }, index * 200);
        });
    }

    animateCards();
}); 
