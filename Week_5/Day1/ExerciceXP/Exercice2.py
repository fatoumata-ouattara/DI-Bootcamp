# -*- coding: utf-8 -*-
"""
Created on Tue Sep 20 08:57:33 2022

@author: hp
"""
""" Créez une classe appelée Dog.
Dans cette classe, créez une __init__méthode qui prend deux paramètres : nameet height. Cette fonction instancie deux attributs, dont les valeurs sont les paramètres."""

class Dog():
    def __init__(self,name,height):
        self.nom=name
        self.hauteur=height
    def bark(self):
        print(" {} goes woof!".format(self.nom))
    def jump(self):
        h=self.hauteur*2
        print(" {0} jumps {1} cm high!.".format(self.nom,h))
        
davids_dog=Dog("Rex",50)
print(davids_dog.nom, davids_dog.hauteur)
davids_dog.bark()
davids_dog.jump()

sarahs_dog=Dog("Teacup",20)
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.hauteur>sarahs_dog.hauteur:
    print("{} is the bigger dog. ".format(davids_dog.nom))
else:
        print("{} is the bigger dog. ".format(sarahs_dog.nom))
