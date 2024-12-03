async function fetchCommentsApi() {
  const url = `https://jsonplaceholder.typicode.com/commenjnjnts`;
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
}


// 1. объявление асинхронной функции async
async function fetchCommentsApiTry() {
    //2. оборачиваем будущую логику в try catch 
  try {
    const url = `https://jsonplaceholder.typicode.com/commentsdvsdvs`;
    // 3. Отправляем запрос сразу обрабатывая промис через await
    const response = await fetch(url)
    // 4. Обрабатываем ошибку запроса, если сам по себе запрос падает (не верный адрес, либо сервер не работает),
    //  то мы натыкаемся на этот блок.
    //  Используется для отлова именно ошибки запроса
    if(!response.ok) {
        throw new Error('there is nothing in this address')
    }
    //5. получение самих данных и обработка объекта response
    const data = await response.json()
    //в данном варианте мы намеренно совершаем ошибку не связанную с запросом и нас переводит на блок catch
    console.log(datascas);
    
    //catch отрабатыват в случае, если запрос отправлен успешно, но косяки были при реализации логики
  } catch (error) {
    console.error(error);
    // Блок finally выполнится в любом случае, несмотря ни на какие ошибки
  } finally {
    console.log('block will be done anyways');
  }
  
}

//вызов функции
fetchCommentsApiTry()