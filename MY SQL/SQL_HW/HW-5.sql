-- 1. Используем базу данных world
USE world;

-- 2. Запрос, объединяющий названия всех городов и стран с их населением
SELECT Name, Population FROM city
UNION ALL
SELECT Name, Population FROM country;

-- 3. Краткое описание ограничения NOT NULL
-- Ограничение NOT NULL указывает, что значение в поле не может быть NULL, 
-- то есть поле обязательно должно содержать данные.

-- 4. Создание таблицы citizen с указанными полями
USE 090924_Serjio;
CREATE TABLE citizen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ss_number CHAR(15) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100)
);
INSERT INTO citizen (ss_number, first_name, last_name, email) VALUES
('123-45-6789', 'Иван', 'Иванов', 'ivan.ivanov@example.com'),
('987-65-4321', 'Мария', 'Петрова', 'maria.petrova@example.com'),
('456-78-1234', 'Алексей', 'Сидоров', 'alexey.sidorov@example.com'),
('321-54-9876', 'Елена', 'Кузнецова', 'elena.kuznetsova@example.com'),
('654-32-1098', 'Дмитрий', 'Михайлов', 'dmitry.mikhailov@example.com');
SELECT * FROM citizen;



-- 5. Создание таблицы people без ограничений
USE 090924_Serjio;


CREATE TABLE people (
    id INT AUTO_INCREMENT,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    PRIMARY KEY (id)
);


INSERT INTO people (firstname, lastname) VALUES
('Иван', 'Иванов'),
('Мария', 'Петрова'),
('Алексей', 'Сидоров'),
('Елена', 'Кузнецова'),
('Дмитрий', 'Михайлов');

SELECT * FROM people;


-- 6. Добавление 5 записей в таблицу people
-- Обратите внимание, что здесь мы добавляем уникальные комбинации firstname и lastname,
-- чтобы избежать нарушения ограничения UNIQUE, которое будет добавлено позже.
INSERT INTO people (firstname, lastname) VALUES
('John', 'Smith'),
('John', 'Doe'),
('Alice', 'Johnson'),
('Bob', 'Brown'),
('Charlie', 'Davis');

-- 7. Добавление ограничений NOT NULL на поля firstname и lastname
ALTER TABLE people
MODIFY firstname VARCHAR(50) NOT NULL,
MODIFY lastname VARCHAR(50) NOT NULL;

-- 8. Добавление ограничения UNIQUE на комбинацию firstname и lastname
ALTER TABLE people
ADD CONSTRAINT unique_name UNIQUE (firstname, lastname);

-- 9. Удаление и пересоздание таблицы people с учетом ограничений
DROP TABLE people;


SHOW TABLES LIKE 'people';

CREATE TABLE people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    CONSTRAINT unique_name UNIQUE (firstname, lastname)
);
SELECT firstname, lastname, COUNT(*)
FROM people
GROUP BY firstname, lastname
HAVING COUNT(*) > 1;


-- 10. Добавление корректных и некорректных данных
-- Корректные данные
INSERT INTO people (firstname, lastname) VALUES
('Michael', 'Johnson'),
('Sarah', 'Connor');

-- Некорректные данные (нарушают ограничения)
-- Следующие запросы приведут к ошибке и не будут выполнены:
-- INSERT INTO people (firstname, lastname) VALUES (NULL, 'Miller'); -- нарушает ограничение NOT NULL
-- INSERT INTO people (firstname, lastname) VALUES ('Michael', 'Johnson'); -- нарушает ограничение UNIQUE
