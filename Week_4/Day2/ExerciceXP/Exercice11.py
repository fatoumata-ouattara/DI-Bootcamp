# -*- coding: utf-8 -*-
"""
Created on Thu Sep 15 14:46:02 2022

@author: hp
"""

""" En utilisant la liste sandwich_ordersde l'exercice précédent, assurez-vous que le sandwich 'pastrami' apparaît dans la liste au moins trois fois.
Ajoutez du code au début de votre programme pour imprimer un message indiquant que la charcuterie n'a plus de pastrami, puis utilisez une whileboucle pour supprimer toutes les occurrences de 'pastrami' de sandwich_orders.
Assurez-vous qu'aucun sandwich au pastrami ne se retrouve dans finished_sandwiches. """


sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich", "Pastrami sandwich", "Pastrami sandwich"]
finished_sandwiches=[]
for sd in sandwich_orders:
    if  sd=="Pastrami sandwich":
        sandwich_orders.remove(sd)
sandwich_orders.pop()

for sd in sandwich_orders:
    finished_sandwiches.append(sd)
print(finished_sandwiches)


   