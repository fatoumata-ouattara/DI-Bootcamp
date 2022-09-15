# -*- coding: utf-8 -*-
"""
Created on Thu Sep 15 12:13:55 2022

@author: hp
"""

""" Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
As they enter each topping, print a message saying you’ll add that topping to their pizza.
Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping)."""
pizzaSerie=""
price=0
pizzaSeries=[]
while(pizzaSerie!="quit"):
    pizzaSerie=input("pizza series : ")
    price+=10+2.5
    print("Nous ajouterons cette garniture a votre pizza.")
    pizzaSeries.append(pizzaSerie)
    if(pizzaSerie=="quit"):
        pizzaSeries.pop()
        print(pizzaSeries)
        print("Le prix total du pizza garnis est : {0}".format(price-12.5))

