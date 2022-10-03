--Get a list of all film languages.
SELECT l.name from language l
INNER Join  film f on f.language_id=l.language_id;
--Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
--Get all films, even if they don’t have languages.
SELECT f.title, f.description, l.name from film f
LEFT join language l on f.language_id=l.language_id;
--Get all languages, even if there are no films in those languages.
SELECT f.title, f.description, l.name from film f
RIGHT join language l on f.language_id=l.language_id;
--Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (id serial primary key, name varchar(50) );
insert into new_film(id,name) values(2,'lie to me');
--Create a new table called customer_review, which will contain film reviews that customers will make.
--Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
--It should have the following columns:

CREATE TABLE customer_review (review_id serial primary key not NULL,film_id integer not NULL,language_id integer not null,titre varchar(20),note numeric,last_update date,
FOREIGN KEY(film_id) REFERENCES film(film_id) ON DELETE CASCADE);
--Ajoutez 2 critiques de films. Assurez-vous de les lier à des objets valides dans les autres tables.
insert into customer_review(review_id,film_id,language_id,titre,note, last_update) values 
(2,2,2,'lie to me',10,'03/10/2022');


--Delete a film that has a review from the new_film table, what happens to the customer_review table?
delete from new_film where name='lie to me';
select * from customer_review;