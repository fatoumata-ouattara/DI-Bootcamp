# -*- coding: utf-8 -*-
"""
Created on Thu Sep 15 15:51:10 2022

@author: hp
"""

""" Écrivez un programme qui demande une chaîne à l'utilisateur et affichez une nouvelle chaîne avec toutes les lettres consécutives en double supprimées.
 """
mot=input("Donne un mot : ")
mot2=mot.rstrip("")
motList=list(mot)
liste=[]
for x,y in zip(motList,motList[1:]):
    if x!=y: 
        liste.append(x)
liste.append(y)
l=''.join(liste)
print(l)

            

