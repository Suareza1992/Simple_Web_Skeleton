export function createNav(links) {
  const nav = document.createElement('nav');
  nav.className = 'site-nav';

  const list = document.createElement('ul');
  list.className = 'nav__list';

  links.forEach((link) => {
    const item = document.createElement('li');
    item.className = 'nav__item';

    const anchor = document.createElement('a');
    anchor.className = 'nav__link';
    anchor.textContent = link.label;
    anchor.href = link.href;

    item.appendChild(anchor);
    list.appendChild(item);
  });

  nav.appendChild(list);
  return nav;
}

