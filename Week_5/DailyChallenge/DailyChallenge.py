# -*- coding: utf-8 -*-
"""
Created on Tue Sep 20 17:18:14 2022

@author: hp
"""
class Farm():
    def __init__(self, name_anim):
        self.name=name_anim
        self.animaux=[]
        print("{}'s Farm".format(self.name))
       
        
        
    def add_animals(self,name_animal,*args):
        
       if args:
          print("{0} : {1} ".format(name_animal,*args))
          self.animaux.append(name_animal)
       else: 
           self.animaux.append(name_animal)
           return 1
           
           
          
    def get_info(self):
       
        return "             E-I-E-I-O!    "
    def get_animal_types(self):
        return self.animaux
      
    def get_short_info(self):
        liste=self.get_animal_types()
        l=[]
        for i in liste:
            if i  not in l:
                l.append(i)
                
        sentence=','.join(l)
        
        print("{0}'s Farm has {1}. ".format(self.name,sentence))
        
       
        
macdonald = Farm("McDonald")
macdonald.add_animals("cow",5)
macdonald.add_animals("sheep")
macdonald.add_animals("sheep")
print("{0} : {1}".format("sheep",2*macdonald.add_animals("sheep")))
macdonald.add_animals('goat', 12)
print(macdonald.get_info())
macdonald.get_short_info()