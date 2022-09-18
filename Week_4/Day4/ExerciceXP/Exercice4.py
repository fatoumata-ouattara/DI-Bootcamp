# -*- coding: utf-8 -*-
"""
Created on Sun Sep 18 18:10:28 2022

@author: hp
"""

"""Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers. """
import random
def number(nb1):
    nb2=random.randint(1,100)
    if nb1==nb2:
        print("Wahou, Bravoooo")
    else:
        print("Oh lalalaaaaa, c'est pas les memes!!")
        print("nombre1 = {0} et nombre2 = {1}".format(nb1,nb2))
        
nb1=random.randint(1, 100)
number(nb1)