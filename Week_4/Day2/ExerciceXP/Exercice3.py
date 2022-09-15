# -*- coding: utf-8 -*-
"""
Created on Wed Sep 14 18:15:31 2022

@author: hp
"""

"""Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

Remove “Banana” from the list.
Remove “Blueberries” from the list.
Add “Kiwi” to the end of the list.
Add “Apples” to the beginning of the list.
Count how many apples are in the basket.
Empty the basket.
Print(basket)
"""
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.pop(0)
print(basket)
basket.pop()
print(basket)
basket.append("kiwi")
print(basket)
basket.insert(0,"Apples")
print(basket)
c=basket.count("Apples")
print(c)
basket.clear()
print(basket)