import { useEffect } from 'react';
import './App.css';

// Доступ к объекту Telegram Web App
const tg = window.Telegram.WebApp;

const products = [
  { id: 1, title: 'Пицца Маргарита', price: 550, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Бургер Классик', price: 350, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Кола 0.5', price: 100, image: 'https://via.placeholder.com/150' },
];

function App() {

  useEffect(() => {
    // Сообщаем Telegram, что приложение готово к работе
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close(); // Функция для закрытия приложения
  };

  const onAdd = (product) => {
    // При добавлении товара показываем главную кнопку Telegram внизу
    tg.MainButton.text = `Купить: ${product.title}`;
    tg.MainButton.show();
  };

  return (
    <div className="App">
      <header>
        <span>Привет, {tg.initDataUnsafe?.user?.first_name || 'Гость'}!</span>
        <button onClick={onClose}>Закрыть</button>
      </header>

      <div className="list">
        {products.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price} ₽</p>
            <button onClick={() => onAdd(item)}>Добавить</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;