# -*- coding: utf-8 -*-
"""
Created on Thu Sep 15 15:36:45 2022

@author: hp
"""
""" Demandez à l'utilisateur un numberet un length.
Créez un programme qui imprime une liste de multiples de numberjusqu'à ce que la longueur de la liste atteigne length.
"""

number=int(input("number : "))
numberE=[]
mult=0
length=int(input("Length : "))
for i in range(1,length+1):
    mult=i*number
    numberE.append(mult)
print(numberE)


