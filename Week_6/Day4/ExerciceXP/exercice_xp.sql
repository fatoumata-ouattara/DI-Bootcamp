--BASIC STATEMENTS
--Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” from the employee table.
select first_name as "First name",
last_name as "Last name" from employees ;
--Write a query to get unique departments ID from the employee table (ie. without duplicates).
select distinct department_id from employees;
--Write a query to get the details of all employees from the employee table, do so in descending order by first name.
select * from employees order by first_name desc;
--Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
select CONCAT(first_name, ' ' ,last_name) as names , salary, salary*0.15 as PF from employees;
--Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
 select employee_id as IDs, CONCAT(first_name,' ', last_name) as names,salary from employees order by salary asc;
--Write a query to get the total sum of all salaries paid to the employees.
select sum(salary) from employees;
--Write a query to get the maximum and minimum salaries paid to the employees.
select max(salary), min(salary) from employees;
--Write a query to get the average salary paid to the employees.
select avg(salary) from employees;
--Write a query to get the number of employees working in the company.
select count(employee_id) from employees;
--Write a query to get all the first names from the employees table in upper case.
select upper(first_name)  from employees;
--Write a query to get the first three characters of each first name of all the employees in the employees table.
select substring(first_name from 1 for 3) from employees; 
--Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.
select concat( first_name,' ',last_name) as "Full Name" from employees;
--Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.
select first_name, last_name, char_length(concat( first_name,' ',last_name)) from employees;
--Write a query to check whether the first_name column of the employees table contains any numbers.
select first_name from employees where first_name similar to '%0|1|2|3|4|5|6|7|8|9|%';
--Write a query to select the first ten records from a table.
select * from employees limit 10;


----Restricting And Sorting

--Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.
select first_name,last_name, salary from employees where salary between 10000 and 15000;
--Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
select first_name,last_name, hire_date from employees where TO_CHAR(hire_date,'YYYY') like '1987' ;
--Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
select first_name from employees where first_name like'%c%' and first_name like'%e%';

--Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.
select emp.last_name, j.job_title, emp.salary
from employees emp
inner join jobs j on emp.job_id=j.job_id
where j.job_title not in('Programmer','Shipping Clerk')
and emp.salary not in(4500,10000,15000);
--Write a query to display the last names of all employees whose last name contains exactly six characters.
select last_name from employees where last_name like'______';
--Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.
select last_name from employees where last_name like '__e%';
--Write a query to display the jobs title appearing in the employees table.
select distinct j.job_title
from employees emp
inner join jobs j on emp.job_id=j.job_id;
--Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
select * from employees where last_name in('Jones','Blake','Scott','King','Ford');












