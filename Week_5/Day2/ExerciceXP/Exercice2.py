# -*- coding: utf-8 -*-
"""
Created on Wed Sep 21 11:19:34 2022

@author: hp
"""
"""   Créez une classe appelée Dogavec les attributs suivants name, age, weight.
Implémentez les méthodes suivantes dans la Dogclasse :
bark: renvoie une chaîne qui indique : « <dog_name>aboie ».
run_speed: renvoie la vitesse de course des chiens (weight/age*10).
fight: prend un paramètre dont la valeur est une autre Doginstance, appelée other_dog. Cette méthode renvoie une chaîne indiquant quel chien a gagné le combat. Le gagnant devrait être le chien avec le plus grand run_speed x weight .

Créez 3 chiens et faites-les passer dans votre classe."""

class Dog():
    def __init__(self,name,age,weight):
        self.name=name
        self.age=age
        self.weight=weight
    def bark(self):
        return f'{self.name} is barking'
    def run_speed(self):
        return self.weight/self.age*10
    def fight(self, other_dog):  
        r=self.run_speed()
        w=self.weight
        if r*w > r*other_dog.weight:
            return f'{self.name} win .'
        else:
            
            return f'{other_dog.name} win .'
            
        
dog1=Dog("Milou",2,10)
dog2=Dog("Rex", 5, 20)
dog3=Dog("Djiki",1,5) 
print(dog2.fight(dog1))
        