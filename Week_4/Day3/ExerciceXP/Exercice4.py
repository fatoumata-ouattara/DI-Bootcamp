# -*- coding: utf-8 -*-
"""
Created on Fri Sep 16 09:39:03 2022

@author: hp
"""

#Utilisez cette liste :
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
#print(disney_users_A)
#{"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
#Utilisez une boucle for pour recréer le 1er résultat. Astuce : ne codez pas les numéros en dur.
disney_users_A={}
usersLg=len(users)
values=[]
for i in range(usersLg):
    values.append(i)

disney_users_A=dict(zip(users,values))
print(disney_users_A)

#Utilisez une boucle for pour recréer le 2ème résultat. Astuce : ne codez pas les numéros en dur.
disney_users_B=dict(zip(values,users))
print(disney_users_B)
#Utilisez une méthode pour recréer le 3ème résultat. Astuce : Le 3ème résultat est trié par ordre alphabétique.
users.sort()
disney_users_C=dict(zip(users,values))
print(disney_users_C)
#Recréez uniquement le 1er résultat pour :
#Les Chaines dont les noms contiennent la lettre "i".

import re
user=[]
disney_users_A2={}
for i in users:
   x=re.search("i",i)
   if x:
       user.append(i)
   else:
        disney_users_A2=disney_users_A.pop(i)
print(disney_users_A2)
#Les Chaines, dont les noms commencent par la lettre « m » ou « p ».
