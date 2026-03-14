export function createCard({ title, description }) {
   const card = document.createElement('article');
   card.className = 'card';

   const cardTitle = document.createElement('h2');
   cardTitle.className = 'card__title';
   cardTitle.textContent = title;

   const cardBody = document.createElement('p');
   cardBody.className = 'card__body';
   cardBody.textContent = description;

   card.appendChild(cardTitle);
   card.appendChild(cardBody);
   return card;
}
