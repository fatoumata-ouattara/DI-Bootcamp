--We will work on the public database that we created yesterday.
--Use SQL to get the following from the database:
--1-All items, ordered by price (lowest to highest).
SELECT * FROM items ORDER by  prix asc;
--Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * from items where prix>=80 ORDER by prix DESC;
--The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT firstname, lastname FROM customers  ORDER by firstname LIMIT 3;
--All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT lastname from customers order by lastname Desc;