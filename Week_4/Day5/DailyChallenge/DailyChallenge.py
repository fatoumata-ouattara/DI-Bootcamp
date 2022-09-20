# -*- coding: utf-8 -*-
"""
Created on Mon Sep 19 14:11:33 2022

@author: hp
"""

""" Écrivez un programme qui accepte une séquence de mots séparés par des virgules en entrée et imprime les mots dans une séquence séparée par des virgules après les avoir triés par ordre alphabétique.
Utiliser la compréhension de liste
Exemple:

Supposons que l'entrée suivante soit fournie au programme : without,hello,bag,world
alors, la sortie doit être :bag,hello,without,world

"""
l=[]
b=[]
seq=input("sequence separé par des virgules : ") 
seq=list(seq)

for i in range(len(seq)):
   if seq[i]!=",":
      b.append(seq[i])
      

   else:
       s="".join(b)
       l.append(s)
       b=[]        
print(sorted(l))      
    
    
    