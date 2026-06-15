const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "images/snortleblat.webp",

  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
    } 
    else {
      this.health = 0;
      return "Character Died"; 
    }
  },

  levelUp() {
    this.level += 1;
  }
};

function updateCard() {
  document.querySelector('.image').src = character.image;
  document.querySelector('.image').alt = character.name;
  document.querySelector('.name').textContent = character.name;
  document.getElementById('class').textContent = character.class;
  document.getElementById('level').textContent = character.level;
  document.getElementById('health').textContent = character.health;
}

document.getElementById('attacked').addEventListener('click', () => {
  const result = character.attacked();
  updateCard();
  if (result) {
    alert(result);
  }
});

document.getElementById('levelup').addEventListener('click', () => {
  const result = character.levelUp();
  updateCard();
});

updateCard();