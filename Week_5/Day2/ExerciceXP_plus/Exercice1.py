# -*- coding: utf-8 -*-
"""
Created on Wed Sep 21 14:32:11 2022

@author: hp
"""
"""   Create a class called Family and implement the following attributes:

members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
last_name : (string)
Initial members data:

[
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]
Implement the following methods:

born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
family_presentation: a method that prints the family’s last name and all the members’ first name.
"""

class Family():
    def __init__(self,members,family_name):
        self.mb=members
        self.mb=[
                 {'name':'Michael','age':35,'gender':'Male','is_child':False},
                 {'name':'Sarah','age':32,'gender':'Female','is_child':False}
                ]
        self.f_name=family_name
        
    def born(self,**kwargs):
        dic={}
        for arg,v in kwargs.items():
            dic[arg]=v
        self.mb.append(dic)
    def is_18(self,nameM):
        for n in self.mb:
            if n["name"]==nameM :
                if n["age"]==18:
                    return True
                else:
                    return False
    def family_presentation(self):
        l=[]
        for i in self.mb:
             l.append(i["name"])
             p=','.join(l)
        print(f'famille: {self.f_name} membres: {p}' )   
            
        
family1=Family("n","LAGOS")   
family1.born(name='Line',age=2,gender='Female',is_child=True) 
family1.born(name='elienne',age=18,gender='Male',is_child=False) 
for i in family1.mb:
    print(i)     
print(family1.is_18("Line")) 
print(family1.is_18("elienne"))
family1.family_presentation()