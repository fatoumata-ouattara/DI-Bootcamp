# -*- coding: utf-8 -*-
"""
Created on Thu Sep 15 12:46:26 2022

@author: hp
"""
familleNumber= int(input("Combien de  etes vous ? "))
age=[]
coutBilletT=0
for i in range(1,familleNumber+1):
    ageM= int(input("l'age du membre {0} : ".format(i)))
    age.append(ageM)
    if(ageM <3):
     coutBilletT+=0
    elif(3<=ageM<12):
     coutBilletT+=10
    else:coutBilletT+=15
    if(i==familleNumber):
        print("Le cout total des billets est: {0}".format(coutBilletT))


print("***********Partie 2***********")
listeNom=["Ane", "Elisé","Marvel", "André"]
lisR=[]
listeFinal=[]
for nom in listeNom:
    age= int(input("L'age de {0} : ".format(nom)))
    if(age<16 or age>22):
      lisR.append(nom)
    if(nom=="André"):
      for nom in listeNom:
          if(nom not in lisR):
              listeFinal.append(nom)
      print(" la liste finale est :\n {0}  ".format(listeFinal))
    
     
        

   


