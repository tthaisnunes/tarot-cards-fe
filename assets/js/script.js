fetch('/assets/data/cards.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let cards = data.cards;
    let cardsList = document.getElementById('cards-list')
    const modal = document.getElementById("modal");


    cards.map((card) => {
      let cardItem = document.createElement('li')
      let img = document.createElement('img');
      img.src = card.image_url;

      cardItem.setAttribute("data-id", card.value)
      cardItem.classList.add("card-item")
      cardItem.appendChild(img);
      cardsList.appendChild(cardItem);
    })

    function showModalCard(id) {
      const card = cards[id - 1];
      const type = document.querySelector(".type");
      const name = document.querySelector(".name");
      const meaningUp = document.querySelector(".meaning-up");
      const meaningRev = document.querySelector(".meaning-rev");
      const description = document.querySelector(".desc");

      type.innerText = card.type;
      name.innerText = card.name;
      meaningUp.innerText = card.meaning_up;
      meaningRev.innerText = card.meaning_rev;
      description.innerText = card.desc;

      modal.classList.add("show");
      console.log(name);

    }


    const closeButton = document.querySelector('.close');     
    function closeModalCard() {
      modal.classList.remove("show");
   }

   closeButton.addEventListener("click", closeModalCard)

    const cardsItems = document.querySelectorAll('.card-item');
    cardsItems.forEach((item) => {
      item.addEventListener('click', () => {
        const dataId = item.getAttribute('data-id');
        showModalCard(dataId);
      })
    })
  })
  .catch((error) => {
    console.log('Erro ao buscar cartas: ', error)
  })