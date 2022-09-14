# -*- coding: utf-8 -*-
"""
Created on Wed Sep 14 07:08:29 2022

@author: hp
"""
import random
""" À l'aide de la inputfonction, demandez à l'utilisateur une chaîne. La chaîne doit comporter 10 caractères.
S'il contient moins de 10 caractères, imprimez un message indiquant "chaîne pas assez longue".
Si c'est plus de 10 caractères, imprimez un message indiquant "chaîne trop longue".

Ensuite, imprimez le premier et le dernier caractère du texte donné.

À l' aide d'un for loop, construisez la chaîne caractère par caractère : imprimez le premier caractère, puis le deuxième, puis le troisième, jusqu'à ce que la chaîne complète soit imprimée. Par"""

chaine=input("Entrer une chaine de 10 caractères svp: ")
chainL=len(chaine)
if len(chaine)<10: print("{0} caractères.La chaine n'est pas assez longue!!".format(chainL))
else:
    if len(chaine)>10: print("{0} caractères. Chaine trop longue!!".format(chainL))
    else:print("Bravoooo!!!!")
    
#Ensuite, imprimez le premier et le dernier caractère du texte donné.
print("Le premier et le dernier caractère de la chaine sont respectivement: ")
chaineI=""
print(chaine[0]+" "+chaine[chainL-1]) 
print("Affichage de la chaine caractère par caractère:")
for i in range(chainL):
    chaineI=chaineI+chaine[i]
    print(chaineI)
"""  Bonus : Échangez quelques caractères puis imprimez la nouvelle chaîne mélangée ( indice : regardez dans la shuffleméthode). Par exemple:

"""
print("Melanger la chaine de caractere : ")
mel=''.join(random.sample(chaine, len(chaine)))
print(mel)