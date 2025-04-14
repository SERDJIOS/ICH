SELECT STR_TO_DATE('21,5,2013','%d,%m,%Y') as dttm;

SELECT STR_TO_DATE('2017-03-13T14:39:01.123','%Y-%m-%dT%H:%i:%s.%f') as dttm;

SELECT NOW();

SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s') as formatted_date;
SELECT DATE_FORMAT(NOW(), 'Time: %H:%i Date: %d-%m-%Y') as formatted_date;
SELECT DATE_FORMAT(NOW(), '%H:%i') as formatted_time,
	DATE_FORMAT(NOW(), '%d-%m-%Y') as formatted_date;

SELECT DATEDIFF('2023-03-05', '2023-01-01') as diff_date;

SELECT TIMESTAMPDIFF(MONTH, '2026-03-05', '2023-01-01');
SELECT TIMESTAMPDIFF(MINUTE,'2003-05-01 12:02:55','2003-05-01 12:05:55');

SELECT DAYOFWEEK('2025-01-25'); -- SUN (1) - SAT (7)
SELECT WEEKDAY('2025-01-28');	-- MON (0) - SUN (6)

SELECT DAYNAME('2025-01-28');

SELECT NOW() + INTERVAL 1 DAY;

SELECT NOW() - INTERVAL 1 HOUR;

SELECT DATE_ADD('2025-01-10', INTERVAL 6 MONTH);
SELECT DATE_SUB('2025-01-10', INTERVAL 3 DAY);

select last_day('2025-01-28');

SELECT EXTRACT(HOUR FROM '2025-1-28');

SELECT QUARTER('2025-1-28');

-- ----------------------------------------------------------------------------------------------------------
use hr;

select * from employees;

-- 1. Написать запрос, который отображает сотрудников, нанятых в 2005 году
select * from employees
where hire_date between str_to_date('2005-01-01', '%Y-%m-%d')
	and str_to_date('2005-12-31', '%Y-%m-%d');

select * from employees
where hire_date between '2005-01-01' and '2005-12-31';

SELECT * 
FROM employees
WHERE YEAR(hire_date) = 2005;

select * from employees
where hire_date > now() - interval 5 YEAR;

-- 3. Определите кого из сотрудников приняли на работу в пятницу
select * from employees
where weekday(hire_date) = 4;

-- 4. Испытательный срок после трудоустройства длится три месяца, начиная с календарного месяца 
-- после трудоустройства, напишите скрипт, который рассчитывает дату окончания испытательного срока. 
-- Выведите в результате дату найма и дату окончания испытательного срока. 
-- Улучшите результат, исключив записи, у которых дата найма null.
select first_name, last_name, hire_date, hire_date + interval 3 month as probation_period_ends
from employees;

SELECT first_name, last_name, hire_date, 
	DATE_ADD(hire_date, INTERVAL 3 MONTH) AS probation_finish
FROM employees;

-- 5. Определите месяц, в который чаще всего принимают на работу
select month(hire_date) as hire_month, count(*) as total_empl
from employees
group by hire_month
order by total_empl desc
limit 1;
-- ---------------------------------------------------------------------------------------------------------------
use shop;

show tables;

select * from ORDERS;

-- 2. Написать запрос, который отображает среднюю AMT (сумма заказа) в марте 2022 года
select avg(AMT) from ORDERS
where ODATE between '2022-03-01' and '2022-03-31';

SELECT ROUND(AVG(AMT), 2) AS avg_amt_2022
FROM ORDERS
WHERE ODATE BETWEEN '2022-3-1' AND '2022-3-31';

SELECT ROUND(AVG(AMT), 2) AS avg_amt_2022
FROM ORDERS
WHERE DATE_FORMAT(ODATE, '%Y-%m') = '2022-03';

-- 6. Выведите количество заказов по месяцам (номер месяца - количество заказов в этом месяце)
select month(ODATE) as order_month, count(*) as total_orders
from ORDERS
group by order_month;

-- 7. Выведите список заказов в марте
SELECT *
FROM ORDERS
WHERE EXTRACT(MONTH FROM ODATE) = 3;

SELECT *
FROM ORDERS
WHERE MONTH(ODATE) = 3;

-- 8. Выведите список заказов с годом (номер заказа, год)
select ORDER_ID, YEAR(ODATE)
FROM ORDERS;

-- 9. Выведите список заказов (номер заказа, название месяца)
select ORDER_ID, monthname(ODATE)
FROM ORDERS;

-- 10. Выведите количество заказов по месяцам (название месяца, количество заказов)
select monthname(ODATE) as `month`, COUNT(ORDER_ID) as total_orders
FROM ORDERS
group by `month`;

-- 11. Определить какие из покупок были совершены в интервале от 10 апреля 2022 до 10 мая 2022 года
select ORDER_ID from ORDERS
where ODATE between '2022-04-10' and '2022-05-10';

-- 12. Напишите SQL-запрос для анализа покупок, совершенных в июне, и определите 
-- количество покупок для каждого продавца. Результат запроса должен содержать идентификатор продавца
--  и количество покупок, сделанных им в июне.
select SELL_ID, COUNT(ORDER_ID)
FROM ORDERS
WHERE month(ODATE) = 3
GROUP BY SELL_ID;

-- 13. Напишите SQL-запрос для анализа средней стоимости покупок, совершенных в марте, и определите, 
-- какие продавцы имеют самую высокую и самую низкую среднюю стоимость покупок в этом месяце. 
-- Обязательно выведите имя продавца.
select s.SNAME, MAX(o.AMT) as `max`, MIN(o.AMT) as `min`, ROUND(AVG(o.AMT), 2) as `avg`
from ORDERS o
left join SELLERS s
on o.SELL_ID = s.SELL_ID
where month(o.ODATE) = 3
group by s.SNAME
order by `avg` desc;

SELECT s.SNAME, ROUND(AVG(o.AMT), 2) AS avg_amt
FROM ORDERS o
LEFT JOIN SELLERS s
	ON o.SELL_ID = s.SELL_ID
WHERE MONTH(o.ODATE) = 3
GROUP BY s.SNAME
ORDER BY avg_amt DESC;