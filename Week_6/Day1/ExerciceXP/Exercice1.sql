CREATE TABLE items(id int PRIMARY key NOT NULL,
				  libelle VARCHAR(50),
				   prix integer);
				 
INSERT INTO items(id, libelle,prix) VALUES
(1,'mall Desk' ,100 ),
(2, 'Large desk', 300),
(3,'Fan', 80);

CREATE table customers(id int PRIMARY key not NULL,
					  firstname varchar(50),
					  lastname varchar(50));
INSERT into customers(id, firstname,lastname)VALUES
(1, 'Greg','Jones'),	
(2, 'Sandra','Jones'),
(3, 'Scott','Scott'),
(4, 'Trevor','Green'),
(5, 'Melanie','Johnson');

SELECT * FROM items;

SELECT id,libelle, prix from items
WHERE prix>80;
SELECT id,libelle, prix from items
WHERE prix<=300;
SELECT * from customers
WHERE lastname='Smith';
SELECT * from customers
WHERE lastname='Jones';
SELECT * from customers
WHERE firstname!='Scott';







