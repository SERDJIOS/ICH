USE hr;


-- 1. Выведите номера отделов и количество сотрудников в каждом отделе, где сотрудников больше 1
SELECT 
    department_id, 
    COUNT(employee_id) AS employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(employee_id) > 10;

-- 2. Выведите название отделов с кол-вом сотрудников больше 10.
SELECT 
    d.department_name, 
    COUNT(employee_id) AS employee_count
FROM employees e
 RIGHT JOIN departments d
 ON e.department_id = d.department_id
GROUP BY d.department_name;

-- 3. Найти максимальную зарплату в каждом департаменте. Вывести department_id и max_salary

SELECT * FROM employees;

SELECT 
    department_id, 
	MAX(salary) AS max_salary
FROM employees
GROUP BY department_id
HAVING department_id is not NULL ;

-- 4. Найти сотрудников, у которых наибольшая зарплата в их департамент

SELECT e.*
FROM employees e
JOIN (
    SELECT department_id, MAX(salary) AS max_salary
    FROM employees
    GROUP BY department_id
) d ON e.department_id = d.department_id AND e.salary = d.max_salary;


SELECT * 
FROM employees e1
WHERE salary = (
    SELECT MAX(salary) 
    FROM employees e2 
    WHERE e2.department_id = e1.department_id
);

-- 4. Найти сотрудников, у которых наибольшая зарплата в их департаменте
SELECT e.first_name, e.last_name, e.salary, ems.max_salary
FROM employees e
JOIN (
	SELECT department_id, MAX(salary) as max_salary
	FROM employees
	GROUP BY department_id
) ems
	ON e.department_id = ems.department_id
WHERE e.salary = ems.max_salary;

-- 5. Найти департамент с наибольшим кол-вом сотрудников

SELECT department_id, COUNT(employee_id) AS e_count
FROM employees
GROUP BY department_id
ORDER BY e_count DESC
LIMIT 1;


-- 5. Найти департамент с наибольшим кол-вом сотрудников 
SELECT d.department_name, COUNT(*) AS emp_cnt
FROM employees e
JOIN departments d
	ON e.department_id = d.department_id
GROUP BY d.department_name
HAVING emp_cnt = (
	SELECT MAX(ce.emp_cnt) AS max_emp
	FROM (
		SELECT department_id, COUNT(*) AS emp_cnt
		FROM employees
		GROUP BY department_id
	) ce
);

-- 6. Найти департаменты, в которых больше 10 сотрудников
SELECT d.department_name, COUNT(*) AS cnt_emp
FROM employees e
JOIN departments d
	ON e.department_id = d.department_id
GROUP BY department_name
HAVING cnt_emp > 10;

-- 7. Выведите название отделов с кол-вом сотрудников больше среднего.

SELECT d.department_name, COUNT(*) AS cnt_emp
FROM employees e
JOIN departments d
    ON e.department_id = d.department_id
GROUP BY d.department_name
HAVING COUNT(*) > (
    SELECT AVG(department_count)
    FROM (
        SELECT COUNT(*) AS department_count
        FROM employees
        GROUP BY department_id
    ) AS subquery
);

-- 7. Выведите название отделов с кол-вом сотрудников больше среднего.
SELECT d.department_name, COUNT(*) AS emp_cnt
FROM employees e
JOIN departments d
	ON e.department_id = d.department_id
GROUP BY d.department_name
HAVING emp_cnt > (
	SELECT AVG(ce.emp_cnt) AS max_emp
	FROM (
		SELECT department_id, COUNT(*) AS emp_cnt
		FROM employees
		GROUP BY department_id
	) ce
);

USE airport;

SHOW TABLES;

SELECT * FROM airliners;
SELECT * FROM clients;
SELECT * FROM tickets;
SELECT * FROM trips;

-- 8. Выведите количество лайнеров в каждом году.


SElECT production_year, COUNT(*) AS count
FROM airliners
Group by production_year;


-- 9. Выведите количество лайнеров в каждом году с годами, где количеством лайнеров больше 1.
SElECT production_year, COUNT(*) AS count
FROM airliners
Group by production_year
HAVING count > 1;

-- 10. Выведите список client_id, amount_of_tickets (таблица tickets), 
-- который содержит айди клиентов и количество билетов у каждого.

SELECT client_id, COUNT(*) as amount_of_tickets 
FROM tickets
Group by client_id;

-- 11. Выведите только тех клиентов, у которых больше 2 билетов.

SELECT client_id, COUNT(*) as amount_of_tickets 
FROM tickets
Group by client_id
HAVING amount_of_tickets > 2 ;

-- 12. Измените запрос так, чтобы вместо айди клиентов выводились их имена (join с таблицей clients).
SELECT c.name, COUNT(*) AS amount_of_tickets
FROM tickets t
LEFT JOIN clients c 
    ON t.client_id = c.id
GROUP BY c.name
HAVING amount_of_tickets > 2;

-- 13. Выведите среднюю стоимость билетов в каждом сервисном классе.

	SELECT service_class, AVG(price) AS avg_price
	FROM tickets
    GROUP BY service_class;
    
-- 14. Выведите самого молодого клиента

SELECT name, age
FROM clients
WHERE age = (SELECT MIN(age) FROM clients);

-- 15. Выведите имена клиентов, код аэропорта отправления и прибытия


SELECT c.name, tr.departure, tr.arrival
FROM clients c
JOIN tickets tk
    ON c.id = tk.client_id
JOIN  trips tr
    ON tk.trip_id = tr.id;
