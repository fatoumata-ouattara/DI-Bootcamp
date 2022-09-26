# -*- coding: utf-8 -*-
"""
Created on Fri Sep 23 23:08:47 2022

@author: hp
"""

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    def __str__(self):
       print( f'{self.amount} { self.currency}')
    def __int__(self):
       
        print(f'{self.amount}')
        
    def __repr__(self):
       print( f'{self.amount} { self.currency}')
    def __add__(self,n):
         ad=self.amount+n
         print(f'{ad} ') 
         
        
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

c1.__str__()
c1.__int__()
c1.__repr__()
c1.__add__(1)
liste=[c1,c2,c3,c4]

#c1.__add__(c2)
