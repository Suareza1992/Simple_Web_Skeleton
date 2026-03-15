import { createHeader } from './components/header.js';
import { createCard } from './components/card.js';

const items = [
  { title: 'Feature One', description: 'This does something useful.' },
  { title: 'Feature Two', description: 'This does something else.' },
];

function init() {
  const app = document.getElementById('app');

  app.appendChild(createHeader('My App'));

  const grid = document.createElement('section');
  grid.className = 'card-grid';

  items.forEach((item) => {
    grid.appendChild(createCard(item));
  });

  app.appendChild(grid);
}

init();
