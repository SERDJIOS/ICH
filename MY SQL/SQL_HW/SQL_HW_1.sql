USE hr;
SELECT *
FROM employees;

-- Написать запрос, возвращающий всех сотрудников, c job_id = IT_PROG.

SELECT *
FROM employees
WHERE job_id = 'IT_PROG';

-- Изменить запрос так, чтобы вывести всех сотрудников с job_id равной AD_VP?
SELECT *
FROM employees
WHERE job_id = 'AD_VP';

-- Выполнить эти два запроса: 
SELECT * FROM HR.EMPLOYEES WHERE job_id = 'IT_PROG';
SELECT * FROM HR.EMPLOYEES WHERE job_id = 'AD_VP';


-- Найдите сотрудников, с зп от 10 000 до 20 000 (включая концы)
SELECT * 
FROM employees 
WHERE salary BETWEEN 10000 AND 20000;

-- Найдите сотрудников не из 60, 30 и 100 департамента
SELECT * 
FROM employees 
WHERE department_id NOT IN (60, 30, 100);
-- Найдите сотрудников у которых есть две буквы ll подряд в середине имени
SELECT * 
FROM employees 
WHERE first_name LIKE '%_ll_%';
-- Найдите сотрудников, у которых фамилия кончается на a
SELECT * 
FROM employees 
WHERE last_name LIKE '%a';

-- Найти всех сотрудников с зарплатой выше 10000
SELECT * 
FROM employees
WHERE salary > 10000;


-- Найти всех сотрудников, с зарплатой выше 10000 и чья фамилия начинается на букву L
SELECT first_name, last_name, salary 
FROM employees
WHERE salary > 10000 
  AND last_name LIKE 'L%';



-- 7.Не выполняя запрос к базе данных, предсказать его результат:
-- select *  from employees where salary > 10000 or salary <= 10000;
-- Этот запрос вернет всех сотрудников, так как любое значение зарплаты либо больше 10,000, либо меньше или равно 10,000.
 


-- 8. Ответить в 1 предложении: чем он будет отличаться от результата этого запроса?
-- select *  from employees where salary > 10000 or salary < 10000;
-- Этот запрос тоже вернет всех сотрудников, так как любая зарплата либо больше, либо меньше 10,000 (но не включает зарплату, равную 10,000).

-- 9.Не выполняя запрос к базе, предсказать результат. 
-- select *  from employees where salary > 10000 and salary < 5000;
-- Этот запрос вернет пустой результат, так как невозможно одновременно удовлетворить оба условия (зарплата не может быть больше 10,000 и меньше 5,000 одновременно).