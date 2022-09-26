# -*- coding: utf-8 -*-
"""
Created on Mon Sep 26 13:31:23 2022

@author: hp
"""

"""
Installez le module faker , consultez la documentation et apprenez à implémenter correctement faker dans votre code.
Créez une liste vide appelée users. Astuce : Il doit s'agir d'une liste de dictionnaires.
Créez une fonction qui ajoute de nouveaux dictionnaires à la usersliste. Chaque utilisateur dispose des clés suivantes : nom , adresse , code_langue . Utilisez faker pour les remplir avec de fausses données.
"""
from faker import Faker
def ad_dic( dictio):
    users=[]
    users.append(dictio)
    return users

fake = Faker('it_IT')
for i in range(5):
    dic={"nom":fake.name(),"adresse":fake.address()}
    print(ad_dic(dic))




