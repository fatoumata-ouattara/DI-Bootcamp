# -*- coding: utf-8 -*-
"""
Created on Thu Sep 15 11:33:53 2022

@author: hp
"""
fruits=[]
fruit=input("fruit preferés separé d'espaces': ")
fruits=fruit.split()
print(fruits)
fruitAsk=input("Donner le nom d'un fruit :")
if fruitAsk in fruits:
    print("You chose one of your favorite fruits! Enjoy! ")
else:print("You chose a new fruit. I hope you enjoy")