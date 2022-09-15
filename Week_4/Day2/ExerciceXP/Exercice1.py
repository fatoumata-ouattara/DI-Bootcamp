# -*- coding: utf-8 -*-
"""
Created on Wed Sep 14 09:48:09 2022

@author: hp
"""

"""Create a set called my_fav_numbers with all your favorites numbers.
Add two new numbers to the set.
Remove the last number.
Create a set called friend_fav_numbers with your friend’s favorites numbers.
Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers. """
my_fav_numbers={1,2,3,4,5,20,95}

my_fav_numbers.add(54)
#for x in my_fav_numbers: print(x)
x=my_fav_numbers.pop()

friend_fav_numbers={8,80,96,89,2}
our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)
