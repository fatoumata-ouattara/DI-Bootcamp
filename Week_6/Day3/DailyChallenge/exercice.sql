create table  customer(id serial primary key, first_name varchar(20), last_name varchar(20) not NULL);
create table profil(id serial, isLoggeIn boolean default 'false', customer_id integer references customer(id));

insert into customer(id, first_name, last_name)
values(1,'john','Doe'),
      (2,'Jerome', 'Lalu'),
	  (3,'Lea','Rive');
	  
insert into profil(id, isLoggeIn,customer_id)
values(1,'true',1),
       (2,'false',2)
select c.first_name from customer c 
inner join profil p on 
p.customer_id=c.id
where p.isLoggeIn='true';

select c.first_name, p.isLoggeIn from customer c 
left  join profil p on 
p.customer_id=c.id;

select count(c.first_name) from customer c 
right join profil p on 
p.customer_id=c.id
where p.isLoggeIn='false';
/*1) 
Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
2)
Insert those books :
Alice In Wonderland, Lewis Carroll
Harry Potter, J.K Rowling
To kill a mockingbird, Harper Lee*/
create table Book(book_id SERIAL PRIMARY KEY, title varchar(50) NOT NULL, author varchar(50) NOT NULL);
insert into Book(book_id,title,author)values
(1,'Alice In Wonderland','Lewis Carroll'),
(2,'Harry Potter','J.K Rowling'),
(3,'To kill a mockingbird','Harper Lee');

/*3)
Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);*/
create table Student(student_id serial PRIMARY KEY,name varchar(20) NOT NULL UNIQUE,age numeric );
/*4)
Insert those students:
John, 12
Lera, 11
Patrick, 10
Bob, 14*/
insert into Student(student_id,name,age) values
(1,'John',12),
(2,'Lera',11),
(3,'Patrick',10),
(4,'Bob',14);

/* 5)
Create a table named Library, with the columns :
book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
student_id ON DELETE CASCADE ON UPDATE CASCADE
borrowed_date
This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
book_fk_id is a Foreign Key representing the column book_id from the Book table
student_fk_id is a Foreign Key representing the column student_id from the Student table
The pair of Foreign Keys is the Primary Key of the Junction Table*/

create table Library(book_fk_id integer ,
					 student_fk_id integer ,
					 borrowed_date date,
					 foreign key(book_fk_id ) references Book(book_id) 
					 on delete cascade
					 on update cascade,
					 foreign key(student_fk_id ) references Student(student_id)  on delete cascade
					 on update cascade
					);
/* 6)
Add 4 records in the junction table, use subqueries.
the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
the student named Bob, borrowed the book Harry Potter the on 12/08/2021*/

insert into Library(book_fk_id,student_fk_id, borrowed_date) values
((select book_id from Book where title='Alice In Wonderland'),
 (select student_id from Student where name='John'),('15/02/2022'));

insert into Library(book_fk_id,student_fk_id, borrowed_date) values
((select book_id from Book where title='To kill a mockingbird'),
 (select student_id from Student where name='Bob'),('03/03/2021'));

insert into Library(book_fk_id,student_fk_id, borrowed_date) values
((select book_id from Book where title='Alice In Wonderland'),
 (select student_id from Student where name='Lera'),('23/05/2021'));

insert into Library(book_fk_id,student_fk_id, borrowed_date) values
((select book_id from Book where title='Harry Potter'),
 (select student_id from Student where name='Bob'),('12/08/2021'));
/* 
7)Display the data
Select all the columns from the junction table
Select the name of the student and the title of the borrowed books
Select the average age of the children, that borrowed the book Alice in Wonderland
Delete a student from the Student table, what happened in the junction table ?
*/
select * from Library;
select s.name, b.title  from 
Library l
inner join Student s on s.student_id=l.student_fk_id
inner join Book b on b.book_id= l.book_fk_id;


select avg(s.age) from 
Library l
inner join Student s on s.student_id=l.student_fk_id
inner join Book b on b.book_id= l.book_fk_id
where b.title='Alice In Wonderland';

delete from Student where name='Bob' ;

select * from Library;

--ON a supprimer Bob dans la table student et dans la table Library il a ete automatiquement supprimé.
