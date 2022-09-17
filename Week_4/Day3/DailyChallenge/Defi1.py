# -*- coding: utf-8 -*-
"""
Created on Fri Sep 16 12:28:59 2022

@author: hp
"""

#Demander un mot à un utilisateur
word=input("Donner un mot svp : ")
#Écrivez un programme qui crée un dictionnaire. Ce dictionnaire stocke les index de chaque lettre dans une liste.
lg=len(word)
liste=[]
ListeM=tuple(word)
dictio={}
for k in range(lg):
    listeI=[]
    liste.append(ListeM[k])
    a=0
    for i in ListeM:
        if liste[k]==i:
            listeI.append(a)
            a+=1
        else:
            
            a+=1
    dictio[liste[k]]=listeI
print(dictio)
     
      
            
 #Or

""" 
word= input("word")
dic={}
for i,letter in enumerate(word):
    if letter not in dic:
        dic[letter]=[]
    dic[letter].append(i)
print(dic)

"""      
 


















