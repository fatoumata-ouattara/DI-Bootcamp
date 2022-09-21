# -*- coding: utf-8 -*-
"""
Created on Tue Sep 20 08:23:46 2022

@author: hp
"""

""" Using this class

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
Instantiate three Cat objects using the code provided above.
Outside of the class, create a function that finds the oldest cat and returns the cat.
Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created. """
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
        
cat1 = Cat("djiki",1)
cat2 = Cat("minou",5)
cat3 = Cat("choupi",3)

def cat_old(chat1,chat2,chat3):
        ageM=0
        if chat1.age>chat2.age and chat1.age>chat3.age:
            ageM=chat1.age
            print("The oldest cat is {0}, and is {1} years old. ".format(chat1.name,ageM))

        else:
           if chat2.age>chat1.age and chat2.age>chat3.age:
              ageM=chat2.age
              print("The oldest cat is {0}, and is {1} years old. ".format(chat2.name,ageM))

           else:
              if chat3.age>chat1.age and chat3.age>chat2.age:
                   ageM=chat3.age
                   print("The oldest cat is {0}, and is {1} years old. ".format(chat3.name,ageM))
print(cat_old(cat1, cat2, cat3))