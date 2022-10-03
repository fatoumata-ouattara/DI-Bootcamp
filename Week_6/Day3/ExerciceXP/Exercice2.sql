--Use UPDATE to change the language of some films. Make sure that you use valid languages.
update film 
set language_id=6
where title='Chamber Italian';
select * from film;
--Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
--customer has one foreign key --> address_id , we musn't put an id great than the greatest address_id.
--We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
Drop table customer_review;--it was very easy.

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select COUNT(*)from rental where RETURN_date is NULL;
--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select rental.rental_id, rental.return_date,payment.payment_id, payment.amount from rental
join payment on rental.rental_id= payment.rental_id
where rental.return_date is NULL order by payment.amount DESC;
---Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--1)The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

select film.title,film.description,actor.first_name, actor.last_name,film_actor.film_id 
from film_actor
 inner join  film on film.film_id=film_actor.film_id 
 inner join  actor on actor.actor_id=film_actor.actor_id 
where actor.last_name='Monroe' and actor.first_name='Penelope';

--The 2nd film : A short documentary (less than 1 hour long), rated “R”.
select * from film where length<=60 and rating='R';
--The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

--The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
