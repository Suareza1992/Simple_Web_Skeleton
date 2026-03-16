import { createHeader } from './components/header.js';
import { createNav } from './components/nav.js';
import { createCard } from './components/card.js';
import { createFooter } from './components/footer.js';

const items = [
  { title: 'Feature One', description: 'This does something useful.' },
  { title: 'Feature Two', description: 'This does something else.' },
];

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

function init() {
  const app = document.getElementById('app');

  app.appendChild(createHeader('My App'));
  app.appendChild(createNav(navLinks));

  const grid = document.createElement('section');
  grid.className = 'card-grid';

  items.forEach((item) => {
    grid.appendChild(createCard(item));
  });

  app.appendChild(grid);
  app.appendChild(createFooter('© 2026 My App. All rights reserved.'));
}

init();
