# -*- coding: utf-8 -*-
"""
Created on Sun Sep 18 23:07:49 2022

@author: hp
"""
#Given a “Matrix” string:
matrixL=["7i3","Tsi","h%x","i"+" "+"#", "sM"+" ","$a"+" ","#t%", "^rt!"]
mot=[]
sentence=[]
l1=""
l2=""
string=[]
print(matrixL)

print("***************************************")
for i in matrixL:
  
    mot=[]
    for a in i:
        if a.isalpha():
            mot.append(a)
        else:
            mot.append(" ")
    sentence.append(mot)

s=""

for ind in range(3):
    for a in sentence:
        b=a[ind]
        
        s+=b

s=s.rstrip("t")     

print(s)

