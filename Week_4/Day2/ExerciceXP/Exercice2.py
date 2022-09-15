# -*- coding: utf-8 -*-
"""
Created on Wed Sep 14 18:00:20 2022

@author: hp
"""

#Étant donné un tuple dont la valeur est un entier, est-il possible d'ajouter plus d'entiers au tuple ?
#

myTuple=(5)
print(myTuple)
#liste=list(myTuple)#  'int' object is not iterable
#print(liste)
myTuple=("b")
print(myTuple)
liste=list(myTuple)#  'int' object is not iterable
liste.append("yyy")
print(liste)

print("Le tuple d'un entier n'est pas iterable")
print(" Mais Le tuple d'un caractere recoit d'autres elements")
