USE hr;

SELECT *
FROM employees;
-- 1 --
SELECT *
FROM employees
WHERE job_id = 'IT_PROG';
-- 2. Найти сотрудников, с зп 10000 --
SELECT *
FROM employees
WHERE salary > 10000;
-- 3. Найти сотрудников, с зп 10000 bis 20000 --
SELECT * 
FROM employees 
WHERE salary BETWEEN 10000 AND 20000;

SELECT * 
FROM employees 
WHERE department_id NOT IN (60, 30, 100);

SELECT * 
FROM employees 
WHERE first_name LIKE '%ll%';

SELECT * 
FROM employees 
WHERE last_name LIKE '%a';
