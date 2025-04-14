// Загрузите переменные окружения из файла `.env`: используйте модуль `dotenv` для загрузки переменных окружения.

//  Настройте GET-запрос к публичному API для получения данных о погоде: настройте GET-запрос к URL 
//  `https://wttr.in/${CITY}?format=%t`, где `CITY` - это значение переменной окружения.

// Выведите результат запроса в консоль: отправьте запрос и выведите температуру для указанного города в консоль.

// Запустите скрипт командой `node weather.js`.


import axios from 'axios';
import 'dotenv/config'; // Загружает переменные окружения из файла .env

const city = process.env.CITY;
const url = `https://wttr.in/${city}?format=%t`;

axios.get(url)
  .then(res => {
    console.log(`The weather in ${city}: ${res.data}`);
  })
  .catch(err => {
    console.error("Error", err);
  });
/////////////////////////////////////

