import data from './client/data/data.js';

window.addEventListener('load', function(){
  const swiper_wrapper = document.querySelector('.swiper-wrapper');
  for(let i = 1; i < data.length; i++) {
    let template = `
      <div class="swiper-slide">
        <div class="card" data-name=${data[i].name} data-img=${data[i].img_url}>
          <div class="front">${data[i].name}</div>
          <div class="back">${data[i].id}</div>
        </div>
      </div>
    `
    swiper_wrapper.insertAdjacentHTML('beforeend', template);
  }

  const swiper_slide = [...swiper_wrapper.children];
  swiper_slide.forEach((cards, i) => {
    cards.addEventListener('click', function(e){
      let card = e.target.parentNode;
      card.classList.toggle('is-clicked');

      const findCards = document.querySelectorAll('.card.is-clicked');
      let selected = [];
      selected.push(...findCards);
      console.log(selected);
      
      // if(card.classList.contains('is-clicked')) {
      //   selected.push(...findCards);
      // }
      // card.classList.toggle('is-open');
      // if(card.classList.contains('is-open')) {
      //   card.style.backgroundImage = `url(./assets/images/${card.dataset.name}.png)`;
      //   card.style.backgroundRepeat = 'no-repeat';
      //   card.style.backgroundPosition = 'top';
      //   card.style.backgroundSize = 'contain';
      // }



      const selectedFrame = document.querySelectorAll('.selected-card');
      
      selected.forEach((a, i) => {
        // if(selected === '') {
        //   selectedFrame[i].classList.add('is-selected');
        // }
        // console.log(a.classList.contains('is-clicked'));
        selectedFrame[i].setAttribute('data-name', `${a.dataset.name}`); 
        selectedFrame[i].classList.add('is-selected');
        // selectedFrame[i].style.backgroundImage = `url('https://i.namu.wiki/i/6VbNGPKLvEtYHmVY9JUsp8k402tmH1euhwN0UyI2sCJpKGyltHpzGZRwN0LSo7RoHuo4bZTXJnyqac15QRuPpADxFPDq3qSWRRHIaWdgpaUcojU0_hGuOjMkBm3Mz5aNkvmXA2xGFv20TNTb5b5GqA.webp')`;

        // if(!a.classList.contains('is-clicked')) {
        //   selectedFrame[i].classList.remove('is-selected');
        // }
      })


      selectedFrame.forEach((b, i) => {
        b.addEventListener('click', function(e) {
          console.log(e.target, this);
          this.classList.toggle('is-open');
          this.classList.contains('is-open') 
          ? 
          this.style.backgroundImage = `url(./assets/images/${this.dataset.name}.png)`
          :
          this.style.backgroundImage = `url('https://i.namu.wiki/i/6VbNGPKLvEtYHmVY9JUsp8k402tmH1euhwN0UyI2sCJpKGyltHpzGZRwN0LSo7RoHuo4bZTXJnyqac15QRuPpADxFPDq3qSWRRHIaWdgpaUcojU0_hGuOjMkBm3Mz5aNkvmXA2xGFv20TNTb5b5GqA.webp')`
        })
      });
    });
  });

});