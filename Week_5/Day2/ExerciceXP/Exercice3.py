# -*- coding: utf-8 -*-
"""
Created on Wed Sep 21 13:07:33 2022

@author: hp
"""

""" Create a new python file and import your Dog class from the previous exercise.
In the new python file, create a class named PetDog that inherits from Dog.
Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
Add the following methods:
train: prints the output of bark and switches the trained boolean to True

play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

do_a_trick: If the dog is trained the method should print one of the following sentences at random:
“dog_name does a barrel roll”.
“dog_name stands on his back legs”.
“dog_name shakes your hand”.
“dog_name plays dead”.
"""


from Exercice2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
       super().__init__(name, age, weight) 
       self.trained=trained
        
    def train(self):
        print(self.bark())
        self.trained=True
    def play(self,*args):
        l=[]
        dog_names=args
        for i in dog_names:
            l.append(i.name)
        s=','.join(l)
        print(f'{s} all play together')
    def do_a_trick(self):
        string=["does a barrel roll","stands on his back legs","shakes your hand","plays dead"]
        if self.trained==True:
            print(f'{self.name+ " "+random.choice(string)}' )
        else:
            print("No train")   
dog1=PetDog("Choupi", 2, 4)
dog2=PetDog("vict", 6, 15)
dog3=PetDog("rex", 3, 10)  
dog1.train()
jeux=PetDog("n", 1, "n")
jeux.play(dog1,dog3)
dog1.do_a_trick()
            
            
            
     