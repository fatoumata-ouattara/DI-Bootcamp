# -*- coding: utf-8 -*-
"""
Created on Sun Sep 18 20:11:16 2022

@author: hp
"""

""" Using this list of magician’s names. magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
Call the function make_great().
Call the function show_magicians() to see that the list has actually been modified. """

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
print("*****************a function called show_magicians()*************")
def show_magicians(liste):
    a=1
    for i in liste:
        
       print("Magicians {0} ---> {1}".format(a,i))
       a+=1
show_magicians(magician_names)
print("**************** a function called make_great()**************")
def make_great(liste):
     for i in liste:
        print(" The great {0}".format(i))

make_great(magician_names)

print("**************the function show_magicians()***************")
def show_magicians():
    make_great(magician_names)
    
show_magicians()