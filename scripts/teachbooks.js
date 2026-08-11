document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('teachbook-search');
    const filterPills = document.querySelectorAll('.filter-pill');
    const bookCards = document.querySelectorAll('.book-card');
    const noResults = document.querySelector('.no-results');

    let currentCategory = 'all';
    let currentSearchTerm = '';

    function filterBooks() {
        let visibleCount = 0;

        bookCards.forEach(card => {
            const categories = (card.getAttribute('data-categories') || '').toLowerCase();
            const title = (card.querySelector('.book-title')?.textContent || '').toLowerCase();
            const desc = (card.querySelector('.book-description')?.textContent || '').toLowerCase();
            const target = (card.querySelector('.book-target-tag')?.textContent || '').toLowerCase();

            const matchesCategory = (currentCategory === 'all') || categories.includes(currentCategory);
            const matchesSearch = !currentSearchTerm || 
                                  title.includes(currentSearchTerm) || 
                                  desc.includes(currentSearchTerm) || 
                                  target.includes(currentSearchTerm);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (noResults) {
            if (visibleCount === 0) {
                noResults.classList.add('visible');
            } else {
                noResults.classList.remove('visible');
            }
        }
    }

    // Category Filter Pills
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.getAttribute('data-filter') || 'all';
            filterBooks();
        });
    });

    // Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.trim().toLowerCase();
            filterBooks();
        });
    }
});
