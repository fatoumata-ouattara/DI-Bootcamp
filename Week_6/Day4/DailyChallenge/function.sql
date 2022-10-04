--1)Create a table called product_orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.
create table items(id_items serial primary key, price numeric not null);
create table product_orders(id_order serial primary key,nb integer, 
	id_items integer  references items(id_items));

insert into items(id_items,price)values
(1,'5000'),
(2,'20000'),
(3,'12000');
insert into product_orders(id_order, nb, id_items)values
(1,2,1),
(2,50,1),
(3,10,2);


--2)There should be a one to many relationship between the product_orders table and the items table. An order can have many items, but an item can belong to only one order.

--3)Create a function that returns the total price for a given order.
create FUNCTION get_total_price() 
returns int
language plpgsql
as 
$$
declare 
total_price integer;
begin
select sum(i.price) into total_price 
from items i
inner join  product_orders p on i.id_items=p.id_items;
return total_price;
end;
$$;
select get_total_price();
--4)Bonus :
--Create a table called users.
--There should be a one to many relationship between the users table and the product_orders table.
--Create a function that returns the total price for a given order of a given user.
