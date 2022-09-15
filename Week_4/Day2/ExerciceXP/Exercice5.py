# -*- coding: utf-8 -*-
"""
Created on Thu Sep 15 10:00:05 2022

@author: hp
"""

""" Utilisez une forboucle pour imprimer tous les nombres de 1 à 20 inclus.
En utilisant une forboucle, qui boucle de 1 à 20 (inclus), imprimez chaque élément qui a un index pair."""
print("\n tous les nombres de 1 à 20")
for i in range(1,21,1):
    print(i)
        
print("\n tous les nombres pairs de 1 à 20")
for a in range(1,21):
    if(a%2==0):
        print(a)