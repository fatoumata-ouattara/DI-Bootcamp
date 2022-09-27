---Create a database called bootcamp.
---Create a table called students.

CREATE TABLE students(id serial PRIMARY key,
					 last_name VARCHAR(20),
					  first_name varchar(20),
					  birth_date date
					 );
--Insert the data seen above to the students table. Find the most efficient way to insert the data.
INSERT INTO students(id,last_name,first_name,birth_date)VALUES
(1,'Benichou','Marc', '1998-11-02'),
(2,'Cohen','Yoan', '2010-12-03'),
(3,'Benichou','Lea','1987-07-27'),
(4,'Dux','Amelia','1996-04-07'),
(5,'Grez','David','2003-06-14'),
(6,'Simpson','Omer','1980-10-03');

--Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).
insert into students(id,last_name,first_name,birth_date)values(7,'Houede','Fatim','1996/03/24');
--Fetch all of the data from the table.
SELECT * FROM students;
--Fetch all of the students first_names and last_names.
select first_name,last_name from students;

--For the following questions, only fetch the first_names and last_names of the students.
--Fetch the student which id is equal to 2.
select first_name, last_name from students where id=2;
--Fetch the student whose last_name is Benichou AND first_name is Marc.
select last_name, first_name from students where last_name='Benichou' and first_name='Marc';

--Fetch the students whose last_names are Benichou OR first_names are Marc.
select last_name, first_name from students where last_name='Benichou' or first_name='Marc';
--Fetch the students whose first_names contain the letter a.
select last_name, first_name from students where first_name like '%a%';
--Fetch the students whose first_names start with the letter a.
select last_name, first_name from students where first_name like 'a%';
--Fetch the students whose first_names end with the letter a.
select last_name, first_name from students where first_name like '%a';
--Fetch the students whose second to last letter of their first_names are a (Example: Leah).
select last_name, first_name from students where first_name like '%a_';
--Fetch the students whose id’s are equal to 1 AND 3 .
select last_name, first_name from students where id=1 or id=3;
--Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
select * from students where birth_date>='2000-01-1' ;
