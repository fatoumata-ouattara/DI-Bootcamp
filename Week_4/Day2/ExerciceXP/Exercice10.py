# -*- coding: utf-8 -*-
"""
Created on Thu Sep 15 14:31:13 2022

@author: hp
"""

""" Utilisez la liste ci-dessus appelée sandwich_orders.
Créez une liste vide appelée finished_sandwiches.
Au fur et à mesure que chaque sandwich est préparé, déplacez-le vers la liste des sandwichs finis.
Une fois que tous les sandwichs ont été préparés, imprimez un message répertoriant chaque sandwich qui a été préparé , tel que I made your tuna sandwich."""

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches=[]
for sd in sandwich_orders:
    finished_sandwiches.append(sd)
for sdC in finished_sandwiches:
       print("I made {}".format(sdC))