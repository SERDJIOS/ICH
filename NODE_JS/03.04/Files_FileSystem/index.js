import fs from 'fs';
fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error by reading input.txt', err);
        return
    } 
    console.log(data);
    fs.writeFile('output.txt', data, 'utf-8', (err) => {
        if (err) {
            console.error('Error by writing in output.txt', err)
            return
        }
        console.log('File successfully written')
    })
})

// Создайте текстовый файл `input.txt` и добавьте в него любой текст, например: "Привет, мир!".

// Напишите скрипт, который будет читать содержимое файла `input.txt` асинхронно с использованием метода `fs.readFile`.

// После успешного чтения файла, ваш скрипт должен записать прочитанное содержимое в новый файл `output.txt` с использованием метода `fs.writeFile` и сообщать об этом при помощи вывода сообщения в консоль.

// Добавьте вывод любого сообщения в консоль при помощи `console.log` в самом конце кода вашего приложения.

// Запустите ваш скрипт и убедитесь, что содержимое файла `input.txt` было успешно скопировано в `output.txt`. Также убедитесь, что сообщение, выводимое при помощи ‘console.log’ в конце приложения, появилось в консоли раньше, чем сообщение о том, что содержимое файла `input.txt` было успешно скопировано в `output.txt`.


try {
    const data = fs.readFileSync('input.txt', 'utf-8');
    console.log(data);
    fs.writeFileSync('output.txt', data, 'utf-8');
    console.log('File successfully written');


    }catch (error) {
    console.error('Error by reading input.txt', error);
    
}    
