# -*- coding: utf-8 -*-
"""
Created on Sun Sep 18 20:11:36 2022

@author: hp
"""

""" Create a function called get_random_temp().
This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
Test your function to make sure it generates expected results."""
import random
def get_random_temp():
    deg=random.randint(-10,40) 
    return  "{0} degrees Celsius".format(deg)

""" Create a function called main().
Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”"""

def main():
    print("The temperature right now is : {}".format(get_random_temp()))     


""" Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
between 16 and 23
between 24 and 32
between 32 and 40"""

def main():
    deg=get_random_temp()
    degW=int(deg[0:2])
    
    print("The temperature right now is : {}".format(degW))     
    if degW<0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    else:
        if 0<=degW<16:
            print("Quite chilly! Don’t forget your coat")
        else:
            if 16<=degW<23:
                print("Don't wear your pull-over.")
            else:
                if 23<=degW<32:
                    print("It's Hot!!!")
                else:
                    print("It's very hot!!! hydrate yourself.")


def get_random_temp(season):
    if season=="winter":
       deg=random.randint(-10,16)
    else:
        if season=="spring":
           deg=random.randint(16, 23)
        else:
             if season=="summer":
                 deg=random.randint(32, 40)
             else:
                 deg=random.randint(24, 32)
    return deg
    
def main():
    season=input(" Give a season : ")
    print("it's {0} and {1} degrees celsuius.".format(season,get_random_temp(season) ))
 
main()