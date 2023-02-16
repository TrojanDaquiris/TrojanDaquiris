const changePartBtns = document.querySelectorAll('.change-part-btn');
const cardParts = document.querySelectorAll('.card-part');

changePartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    const currentPart = document.querySelector('.card-part:not(.hidden)');
    const targetPart = document.querySelector(`.${target}`);
    
    currentPart.classList.add('hidden');
    targetPart.classList.remove('hidden');
  });
});
