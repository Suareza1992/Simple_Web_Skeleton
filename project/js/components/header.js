export function createHeader(title) {
   const header = document.createElement('header');
   header.className = 'site-header';

   const heading = document.createElement('h1');
   heading.textContent = title;

   header.appendChild(heading);
   return header;
}
