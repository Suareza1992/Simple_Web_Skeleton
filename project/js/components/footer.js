export function createFooter(text) {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  const copy = document.createElement('p');
  copy.className = 'footer__copy';
  copy.textContent = text;

  footer.appendChild(copy);
  return footer;
}

