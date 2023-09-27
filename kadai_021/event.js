const eventText = document.getElementById('text');
const eventBtn = document.getElementById('btn');

eventBtn.addEventListener('click', () => {
  setTimeout(() => {
    eventText.textContent = 'ボタンをクリックしました'
  }, 2000);
});