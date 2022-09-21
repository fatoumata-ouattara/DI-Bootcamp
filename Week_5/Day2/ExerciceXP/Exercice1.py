# -*- coding: utf-8 -*-
"""
Created on Wed Sep 21 10:19:41 2022

@author: hp
"""
""" En utilisant ce code : Créez une autre race de chat nommée Siamesequi hérite de la Catclasse.
Créez une liste appelée all_cats, qui contient trois instances de chat : un bengal, un chartreux et un siamois.
Ces trois chats sont les animaux de compagnie de Sara. Créez une variable appelée sara_petsdont la valeur est une instance de la Petclasse et transmettez la variable all_catsà la nouvelle instance.
Promenez tous les chats, utilisez la walkméthode.
 """

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
      for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
      def sing(self, sounds):
        return f'{sounds}'
all_cats =[] 
bengal=Bengal("Bengal",2)
siamese=Siamese("Siamese",5)
chartreux=Chartreux("Chartreux",1)
all_cats.append(bengal)
all_cats.append(chartreux)
all_cats.append(siamese)
sara_pets=Pets(all_cats)
sara_pets.walk()
    
    
    
    

    

