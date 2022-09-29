/*In this puzzle you have to go through all the SQL queries and provide us the output of the requests before executing them (ie. make an assumption).
Then, execute them to make sure you were correct.*/

--1) cette requette ci dessous va creer la table firstTab avec champs id et name
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)
--resultat: CREATE TABLE

--2) insert les 4 lignes dans FirstTab 
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')
--Resultat: INSERT 0 4

--3)Affiche tous les champs de FirstTab
SELECT * FROM FirstTab
--Resultat:
--4) create table SecondTab
CREATE TABLE SecondTab (
    id integer 
)
--CREATE TABLE
--5) insert dans la table un id=5
INSERT INTO SecondTab VALUES
(5),
(NULL)
--Resultat : INSERT 0 2
--6) Affiche la table avec les deux lignes affectées
SELECT * FROM secondtab
--Resultat: 2 rows affected.

--Q1. What will be the OUTPUT of the following statement?
--compte tous les elements de la table FirstTab dont les id ne sont pas null dans la table secondTab
--output for me 0
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--Resultat reel : 0

--Q2. What will be the OUTPUT of the following statement?
--output for me : 2 car il y'a 2 elements dans firtTab dont les id sont different de 5  
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--Resultat: 2

--Q3. What will be the OUTPUT of the following statement?
--output for me : 0 car le lien avec les id de la secondTab n'est pas bien specifier
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
--Resultat: 0
--Q4. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
--Resultat : 2

