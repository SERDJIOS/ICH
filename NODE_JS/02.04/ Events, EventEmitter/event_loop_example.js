// Создайте новый файл с именем `event_loop_example.js`.

// Напишите скрипт, который включает использование `setTimeout` и `Promise`.

// Запустите скрипт и проанализируйте порядок выполнения выводимых сообщений.
// Синхронные операции (`Start` и `End`) выполняются первыми.
// Промисы перед `setTimeout`.
// `setTimeout` выполняется последним, так как его коллбэк добавляется в очередь задач.

console.log('Start');
setTimeout(() => {
    console.log("setTimeout");
}, 1000);

Promise.resolve().then(() => {
    console.log("Promise");
}); 
console.log('End'); // eslint-disable-line no-console
