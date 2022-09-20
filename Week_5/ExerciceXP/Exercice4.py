# -*- coding: utf-8 -*-
"""
Created on Tue Sep 20 09:40:25 2022

@author: hp
"""

""" Create a class called Zoo.
In this class create a method __init__ that takes one parameter: zoo_name.
It instantiates two attributes: animals (an empty list) and name (name of the zoo).
Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
Create a method called get_animals that prints all the animals of the zoo.
Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter."""

class Zoo():
    def __init__(self,zoo_name):
        self.animals=[]
        self.name=zoo_name
    def add_animal(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    def get_animals(self):
         for i in self.animals:
             print(i)
    def sell_animal(self, animal_sold):
        self.animals.remove(animal_sold)
    def sort_animals(self):
        anim=sorted(self.animals)
        print(anim)
      
ramat_gan_safari=Zoo("safai")
ramat_gan_safari.add_animal("zèbre")
ramat_gan_safari.add_animal("porc")
ramat_gan_safari.add_animal("ane")
ramat_gan_safari.get_animals()
print("-----------------")
ramat_gan_safari.sell_animal("porc")
ramat_gan_safari.get_animals()
print("-----------------")
ramat_gan_safari.sort_animals()
print("-----------------")


