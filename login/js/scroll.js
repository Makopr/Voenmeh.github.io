let data = []; // Здесь будут храниться данные из JSON файла
let start = 0;
const batchSize = 10; // Размер пакета загрузки

// Функция для загрузки данных из JSON файла
function loadData() {
  fetch('posts.json') // Замените 'your_data.json' на путь к вашему JSON файлу
    .then((response) => response.json())
    .then((jsonData) => {
      data = jsonData;
      renderData();
    });
}

// Функция для отображения данных
function renderData() {
  const container = document.getElementById('data-container');
  const batch = data.slice(start, start + batchSize);

  batch.forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML = `<h2>${item.title}</h2><p>${item.body}</p>`;
    container.appendChild(div);
  });

  start += batchSize;
}

// Загрузка первой порции данных при загрузке страницы
loadData();

// Обработчик события прокрутки
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    renderData(); // Загрузить следующую порцию данных при прокрутке
  }
});
