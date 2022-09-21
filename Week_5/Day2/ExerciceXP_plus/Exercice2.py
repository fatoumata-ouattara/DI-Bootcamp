# -*- coding: utf-8 -*-
"""
Created on Wed Sep 21 16:06:14 2022

@author: hp
"""

""" Créez une classe appelée TheIncredibles. Cette classe doit hériter de la Familyclasse :

Ce n'est pas une famille aléatoire, c'est une famille incroyable , nous devons donc ajouter les clés suivantes à nos dictionnaires : power et amazing_name .
[
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]


2.Ajoutez une méthode appelée use_power, cette méthode doit imprimer le pouvoir d'un membre uniquement s'il a plus de 18 ans. Si ce n'est pas le cas, soulevez une exception (recherchez des exceptions) indiquant qu'ils n'ont pas plus de 18 ans.


3. Ajoutez une méthode appelée incredible_presentationqui : * imprime le nom de famille et le prénom de tous les membres (c'est-à-dire utilisez la super()fonction, pour appeler la family_presentationméthode) * imprime le nom et le pouvoir incroyables de tous les membres.


4. Appelez la incredible_presentationméthode.
5. Utilisez la bornméthode héritée de la Familyclasse pour ajouter Baby Jack avec la puissance suivante : "Puissance Inconnue".
6. Appelez incredible_presentationà nouveau la méthode.
"""
from Exercice1 import Family
class TheIncredibles(Family):
     def __init__(self,members,family_name):
       super().__init__(members,family_name) 
       self.mb=[
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

     def use_power(self):
         for  i in self.mb:
             if i["age"]>18:
                 print(f'power : {i["power"]} ')
             else:
                 try:
                     print(f'{i["age"]}< 18')
                 except:
                     print("Not in family")
     def incredible_presentation(self):              
                self.family_presentation() 
                for i in self.mb:
                    print(f'{i["name"]} : {i["power"]}')
             
                 
f1=TheIncredibles("n", "Zongo")
f1.incredible_presentation()
f1.born(name='Jack',age=1,gender='Male',is_child=True,power='Unknown Power',incredible_name='SuperBaby')
f1.incredible_presentation()                 
                 
                 
                 
                 
                 
                 
                 
                 