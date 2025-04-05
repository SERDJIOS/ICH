-- 1 Выведите количество сотрудников в базе
USE hr;

SELECT COUNT(*) AS total_employees

FROM employees;



-- 2.Выведите количество департаментов (отделов) в базе

SELECT COUNT(*) AS total_departments

FROM departments;



-- 3.Подключитесь к базе данных World (которая находится на удаленном сервере). 

USE world;



 -- 4.Выведите среднее население в городах Индии (таблица City, код Индии - IND)

SELECT AVG(Population) AS avg_population

FROM city

WHERE CountryCode = 'IND';



-- 5.Выведите минимальное население в индийском городе и максимальное.

SELECT MIN(Population) AS min_population, MAX(Population) AS max_population

 FROM city

WHERE CountryCode = 'IND';



--  6.Выведите самую большую площадь территории. 

SELECT Name, MAX(SurfaceArea) AS largest_area

FROM country;



-- 7.Выведите среднюю продолжительность жизни по странам.

SELECT AVG(LifeExpectancy) AS average_life_expectancy

FROM country;



-- 8.Найдите самый населенный город (подсказка: использовать подзапросы)

SELECT Name, Population

FROM city

WHERE Population = (

SELECT MAX(Population) FROM city);