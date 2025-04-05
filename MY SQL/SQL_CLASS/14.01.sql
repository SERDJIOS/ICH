CREATE DATABASE 090924_Serjio;
SHOW DATABASES;


USE 090924_Serjio;


CREATE TABLE goods(
 id INT,
    title VARCHAR(128),
    price INT,
    quantity INT
);
INSERT INTO goods(id, title, price, quantity) VALUES (1, 'лесопед', 1200, 4);
INSERT INTO goods(id, title, price, quantity) VALUES (2, 'ролики', 500, 10);
INSERT INTO goods(id, title, price, quantity) VALUES (3, 'сани', 400, 15);
INSERT INTO goods(id, title, price, quantity) VALUES (4, 'скейт', 250, 28);

UPDATE goods
SET price = 10000
WHERE title = 'лесопед';

CREATE VIEW v_goods_cheap AS 
 SELECT * FROM goods WHERE price < 10000;

SELECT * FROM goods;
SELECT * FROM v_goods_cheap;

-- CREATE SCHEMA schema_1;

SHOW TABLES;

CREATE TABLE Customer(
 customer_id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    street VARCHAR(100),
    post_code VARCHAR(20),
    city VARCHAR(50),
    country VARCHAR(50),
    email VARCHAR(150) CHECK(email LIKE '%_@_%._%'),
    created_at DATE DEFAULT(CURDATE())
);

-- DROP TABLE Customer; 
-- DROP TABLE Orders;

SELECT * FROM Customer;

CREATE TABLE Orders(
 order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    created_at DATETIME DEFAULT(NOW()),
    item_title VARCHAR(100) NOT NULL,
    item_description TEXT,
    item_photo VARCHAR(255),
    total NUMERIC(6,2) NOT NULL
);

SELECT * FROM Orders;

-- Заполнение таблицы Customer
INSERT INTO Customer (firstname, lastname, street, post_code, city, country, email) VALUES 
('Ivan', 'Ivanov', 'Lenina St. 1', '100000', 'Moscow', 'Russia', 'ivanov@example.com'),
('Petr', 'Petrov', 'Kirova St. 2', '200000', 'Saint Petersburg', 'Russia', 'petrov@example.com'),
('Anna', 'Sidorova', 'Sovetskaya St. 3', '300000', 'Novosibirsk', 'Russia', 'sidorova@example.com'),
('Olga', 'Fedorova', 'Pobedy St. 4', '400000', 'Ekaterinburg', 'Russia', 'fedorova@example.com');

-- Заполнение таблицы Orders
INSERT INTO Orders (customer_id, item_title, item_description, item_photo, total) VALUES 
-- Заказы для Иванова
(1, 'Item A1', 'Description for Item A1', 'photoA1.jpg', 100.00),
(1, 'Item A2', 'Description for Item A2', 'photoA2.jpg', 150.00),

-- Заказы для Петрова
(2, 'Item B1', 'Description for Item B1', 'photoB1.jpg', 200.00),
(2, 'Item B2', 'Description for Item B2', 'photoB2.jpg', 250.00),
(2, 'Item B3', 'Description for Item B3', 'photoB3.jpg', 300.00),

-- Заказы для Сидоровой
(3, 'Item C1', 'Description for Item C1', 'photoC1.jpg', 350.00),
(3, 'Item C2', 'Description for Item C2', 'photoC2.jpg', 400.00),
(3, 'Item C3', 'Description for Item C3', 'photoC3.jpg', 450.00),
(3, 'Item C4', 'Description for Item C4', 'photoC4.jpg', 500.00),

-- Заказы для Федоровой
(4, 'Item D1', 'Description for Item D1', 'photoD1.jpg', 550.00),
(4, 'Item D2', 'Description for Item D2', 'photoD2.jpg', 600.00);

ALTER TABLE Customer
ADD COLUMN gender CHAR(1) AFTER lastname;

ALTER TABLE Customer
MODIFY COLUMN gender CHAR(1) DEFAULT 'M' CHECK(gender IN ('M', 'F'));

ALTER TABLE Customer
DROP COLUMN gender;

ALTER TABLE Orders
ADD COLUMN discounted_price NUMERIC(6,2) DEFAULT (total *0.9);

-- 1. Вывести все заказы, отсортированные по убыванию по стоимости
SELECT *
FROM Orders
ORDER BY total DESC;

-- 2. Вывести всех заказчиков, у которых почта зарегистриварована на gmail.com
SELECT *
FROM Customer
WHERE email LIKE '%@gmail.com';

-- 3. Вывести заказы, добавив дополнительный вычисляемый столбец status, который вычисляется 
-- по стоимости заказа и имеет три значения: low, middle, high.
SELECT 
    *,
    CASE
        WHEN total < 200 THEN 'low'
        WHEN total BETWEEN 200 AND 500 THEN 'middle'
        ELSE 'high'
    END AS status
FROM Orders;
-- 4. Вывести всех заказчиков из города на ваш выбор. 
SELECT *
FROM Customer
WHERE city = 'Springfield';

-- 5. Вывести список заказов и столбец со значением скидки.
SELECT *, (total - discounted_price) AS discount
FROM Orders;

-- 6. Написать запрос, который выведет все заказы с дополнительным столбцом процент_скидки, 
-- который содержит разницу в процентах между нормальной и скидочной ценой
SELECT *, ROUND(((total - discounted_price) / total) * 100, 0) AS discount_percent
FROM Orders;

SELECT *, ROUND(100 - (discounted_price / total * 100), 0) AS `discount, %`
FROM Orders;

CREATE TABLE goods_2(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    quantity INT CHECK(quantity > 0),
    price INT,
    in_stock CHAR(1) CHECK(in_stock IN ('Y', 'N'))
);
INSERT INTO goods_2 (title, quantity, price, in_stock) VALUES ('Тюбинг', 5, 1000, 'Y');
INSERT INTO goods_2 (title, quantity, price, in_stock) VALUES ('Санки', 2, 1500, 'Y');
INSERT INTO goods_2 (title, quantity, price, in_stock) VALUES ('Снегокат', 2, 900, 'Y');
INSERT INTO goods_2 (title, quantity, price, in_stock) VALUES ('Сноуборд', 7, 700, 'N');
INSERT INTO goods_2 (title, quantity, price, in_stock) VALUES ('Клюшка', 8, 300, 'Y');
INSERT INTO goods_2 (title, quantity, price, in_stock) VALUES ('Коньки', 3, 350, 'N');
INSERT INTO goods_2 (title, quantity, price, in_stock) VALUES ('Форма', 9, 450, 'Y');
SELECT * FROM goods;
SELECT * FROM goods_2;

SELECT title FROM goods
UNION
SELECT title FROM goods_2;

SELECT title, quantity, in_stock FROM goods
UNION
SELECT title, quantity, in_stock FROM goods_2
UNION

SELECT title, quantity, in_stock, NULL AS price FROM goods
UNION
SELECT title, quantity, in_stock, price FROM goods_2;

SELECT title, quantity, in_stock, price FROM goods_2
UNION
SELECT title, quantity, in_stock, NULL FROM goods;
UPDATE goods_2
SET price = 10000
WHERE title = 'лесопед';

CREATE VIEW v_goods_cheap AS 
 SELECT * FROM goods_2 WHERE price < 10000;

SELECT * FROM goods_2;