# -*- coding: utf-8 -*-
"""
Created on Wed Sep 14 22:25:35 2022

@author: hp
"""
""" Récapitulatif - Qu'est-ce qu'un float? Quelle est la différence entre un entier et un flottant ?
Pouvez-vous penser à une autre façon de générer une séquence de flottants ?
Créez une liste contenant la séquence suivante 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (ne codez pas la séquence en dur). """
"""debut=1
pas=0.5
fin=10.5
for i in range() :
    print(i)"""#float  est un type de variable, s'ecrivant avec une virgule
#'float' object cannot be interpreted as an integer

from numpy import arange
print("\nGénérer une séquence de flottants  :")
for i in arange(1 , 6.7 , 1.1 ):print(i,end=',')
liste=[]
for a in arange(1.5 , 5.5 , 0.5 ):
    liste.append(a)
    if(a==5):
     print("\nLa liste de float est: ")
     print(liste)
    
#import random
#random.uniform(1.5, 5.5)

