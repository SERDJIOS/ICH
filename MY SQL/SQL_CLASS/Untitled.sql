USE hr;


-- 1. Найти количество сотрудников у каждого менеджера. Вывести manager_id и employees_cnt
SELECT manager_id, COUNT(employee_id) AS employees_cnt
FROM employees
WHERE manager_id IS NOT NULL
GROUP BY manager_id;

-- 2. Работаем с базой World. Выведите седьмой по густонаселенности город.
-- Подсказка: использовать функцию rank() и оконные функции.

USE world;

SHOW TABLES;

SELECT * FROM (
SELECT Name, DENSE_RANK() OVER (ORDER BY Population DESC) AS pr
FROM city
LIMIT 12
) test WHERE pr=7;

SELECT Name, Population, RANK() OVER (ORDER BY Population DESC) AS rnk  
FROM city;

-- 3. Выведите название города, население и максимальное население для каждого города

SELECT Name, Population, MAX(Population) OVER () AS MaxPopulation  
FROM city;



-- 7. Напишите запрос для определения доли населения города от общей численности населения страны.
SELECT Name, Population,
	ROUND(100 * Population / SUM(Population) OVER(PARTITION BY CountryCode)) AS percent
FROM city;

SELECT co.Name, ci.Name, ci.Population,
	ROUND(ci.Population / co.Population * 100) AS percent
FROM city ci
JOIN country co
	ON ci.CountryCode = co.Code;
    
    -- 6. На основании предыдущего запроса выведите топ 5 стран по средней численности населения.
SELECT *
FROM (
	SELECT co.Name, ROUND(AVG(ci.Population)) AS avg_population,
		DENSE_RANK() OVER(ORDER BY AVG(ci.Population) DESC) AS cities_rank
	FROM country co
	JOIN city ci
		ON co.Code = ci.CountryCode
	GROUP BY co.name
	ORDER BY cities_rank ASC
) tab
WHERE tab.cities_rank <= 5;



-- 5. Выполните ранжирование стран по средней численности населения в городах.
SELECT co.Name, ROUND(AVG(ci.Population)) AS avg_population,
	DENSE_RANK() OVER(ORDER BY AVG(ci.Population) DESC) AS citie_rank
FROM country co
JOIN city ci
	ON co.Code = ci.CountryCode
GROUP BY co.name;



-- 4. Напишите запрос для определения разницы в продолжительности жизни 
-- между текущей страной и страной с самой высокой продолжительностью жизни.
SELECT Name, LifeExpectancy, 
	MAX(LifeExpectancy) OVER() AS max_le,
    (MAX(LifeExpectancy) OVER() - LifeExpectancy) AS diff_le
FROM country;



