USE world;

SHOW tables;

-- -- 1. Создайте SQL запрос, который позволяет вывести информацию о населении стран в двух столбцах: 
-- 'CountryCode' и 'Население', где 'Население' представляет собой суммарное количество 
-- жителей всех городов в каждой стране.

SELECT 
    country.code AS CountryCode, 
    SUM(city.Population) AS Population
FROM 
    country
JOIN 
    city 
ON 
    country.Code = city.CountryCode
GROUP BY 
    country.Code;
    
    SELECT * FROM city;
    SELECT * FROM country;
    SELECT * FROM countrylanguage;
SELECT 
    country.Name AS CountryName, 
    SUM(city.Population) AS Population
FROM 
    country
JOIN 
    city 
ON 
    city.CountryCode = country.Code
GROUP BY 
    country.Name;
