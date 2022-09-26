# -*- coding: utf-8 -*-
"""
Created on Sat Sep 24 06:58:35 2022

@author: hp
"""
import random

def rd(n=random.randint(1,100)):
   
   m=random.randint(1, 100)  
   if n==m:
       print("Trouvé!!!!")
   else:
       print(n)
       print(m)
       print("message : Try against")
                
rd()