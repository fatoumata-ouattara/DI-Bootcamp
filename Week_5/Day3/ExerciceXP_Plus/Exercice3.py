# -*- coding: utf-8 -*-
"""
Created on Sat Sep 24 07:08:33 2022

@author: hp
"""

import string
import random

def strng(length):
    l=[]
    for i in range(length):
        a=+1
        rand=random.choice(string.ascii_letters)
        print(f'Letter {a}--> {rand}')
        l.append(rand)
    l1=''.join(l)
    print(f'My string is : {l1}')
    
strng(5)