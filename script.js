/* ============================================================
   OLA'S BAKING PORTFOLIO – JS
   ============================================================ */


/* ── A. Mobile Menu ───────────────────────────────────────── */
const hamburger = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');

function closeMobileMenu() {
    mobileNav.hidden = true;
    hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
        closeMobileMenu();
    } else {
        mobileNav.hidden = false;
        hamburger.setAttribute('aria-expanded', 'true');
    }
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});


/* ── B. Auto-close on Resize ──────────────────────────────── */
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) closeMobileMenu();
}, { passive: true });


/* ── C. Header Scroll Shadow ──────────────────────────────── */
const header = document.getElementById('site-header');
window.addEventListener('scroll', function () {
    header.style.boxShadow = window.scrollY > 10
        ? '0 2px 12px rgba(120, 70, 20, 0.10)'
        : 'none';
}, { passive: true });


/* ── D. Baking Projects Data ──────────────────────────────── */
const projects = [
    {
        title: 'Classic Sourdough Loaf',
        description: 'A slow-fermented sourdough with a crispy golden crust and chewy, open crumb. Made with organic flour and baked to give you a great taste.',
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80',
        tags: ['Bread', 'Sourdough', 'Artisan']
    },
    {
        title: 'Strawberry Layer Cake',
        description: 'Three layers of fluffy vanilla sponge filled with fresh strawberry compote and mascarpone cream — a celebration showstopper.',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
        tags: ['Cake', 'Celebration', 'Fruit']
    },
    {
        title: 'Butter Croissants',
        description: 'Laminated dough with 27 layers of butter folded over two days for that perfect honeycomb interior and flaky shell. A great treat to enjoy.',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
        tags: ['Pastry', 'Butter', 'Breakfast']
    },
    {
        title: 'Savoury Meat Pies',
        description: 'Flaky shortcrust pastry filled with a rich, well-seasoned meat filling. The ultimate savoury pastry to enjoy as a great meal anytime.',
        image: 'https://images.unsplash.com/photo-1604579839200-ce65eb5d0f02?w=800&q=80',
        tags: ['Savoury', 'Pastry', 'Meals']
    },
    {
        title: 'French Macarons',
        description: 'Delicate almond shells with silky ganache fillings in seasonal flavours — rose, pistachio, salted caramel, and dark chocolate.',
        image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&q=80',
        tags: ['Macarons', 'French', 'Treats']
    },
    {
        title: 'Honey & Herb Focaccia',
        description: 'A dimpled, herb-studded focaccia drizzled with local honey and flaky sea salt. Enjoy it as a great savoury meal companion.',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
        tags: ['Bread', 'Savoury', 'Focaccia']
    }
];

function createProjectCard(project) {
    const tagsHTML = project.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');

    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-img-wrap">
            <img src="${project.image}" alt="${project.title}" width="800" height="480" loading="lazy" />
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${tagsHTML}</div>
        </div>
    `;
    return card;
}

const projectsGrid = document.getElementById('projects-grid');
projects.forEach(project => projectsGrid.appendChild(createProjectCard(project)));


/* ── E. Footer Copyright Year ─────────────────────────────── */
document.getElementById('footer-copy').textContent =
    '© ' + new Date().getFullYear() + ' Ola\'s Bakery. All rights reserved.';
