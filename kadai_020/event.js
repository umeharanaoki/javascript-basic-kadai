const eventText = document.getElementById('text');
const eventBtn = document.getElementById('btn');

eventBtn.addEventListener('click', () => {
  eventText.textContent = 'ボタンをクリックしました'
});