CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);
SELECT * FROM actors;
--Comptez le nombre d'acteurs dans le tableau.
select count(first_name) from actors
--Essayez d'ajouter un nouvel acteur avec des champs vides. Que pensez-vous que le résultat sera?
--INSERT INTO actors (first_name, last_name, age)
--VALUES('George','Clooney','06/05/1961'); ERROR: ERREUR:  une valeur NULL viole la contrainte NOT NULL de la colonne « number_oscars » dans la relation « actors »