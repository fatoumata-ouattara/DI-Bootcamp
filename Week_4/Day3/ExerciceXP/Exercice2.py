# -*- coding: utf-8 -*-
"""
Created on Thu Sep 15 23:40:23 2022

@author: hp
"""
""" A movie theater charges different ticket prices depending on a person’s age.
if a person is under the age of 3, the ticket is free.
if they are between 3 and 12, the ticket is $10.
if they are over the age of 12, the ticket is $15. """
""" How much does each family member have to pay ?
Print out the family’s total cost for the movies.
Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty). """


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
coutBilletT=0
liste=[]
coutBillet=0
for i in family:
    if(family[i] <3):
        coutBillet=0
        liste.append(0)
    elif(3<=family[i] <12):
         coutBillet=10
         liste.append(10)
    else:
         coutBillet=15
         liste.append(15)
    
 
    print("{0} doit payer : ${1}".format(i,coutBillet))
 #if family[i]=='summer':
for a in liste:
    coutBilletT+=a
print("Le cout total des billets est : ${0}".format(coutBilletT))
 
#Bonus
dictF={}
namesA=[]
familyN=3
for i in range(3):
    name=input("Le nom svp: ")
    age=int(input("L'age  : "))
    dictF[name]=age
print(dictF)



