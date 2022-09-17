# -*- coding: utf-8 -*-
"""
Created on Fri Sep 16 15:04:32 2022

@author: hp
"""

"""z un programme qui imprime une liste des articles que vous pouvez acheter dans le magasin avec l'argent que vous avez dans votre portefeuille.
Triez la liste par ordre alphabétique.
Renvoyez "Rien" si vous ne pouvez rien acheter du magasin. """

l=[]
items_purchase = {
  "Apple": "$400",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}
panier=[]
wallet=input("La somme que vous avez : ")
wallet=wallet.replace("$","")
wallet=int(wallet)
totalL=[]
total=0
for x,y in items_purchase.items():
    y=y.replace("$","")
    x=y
    l.append(y)
a=0
for i in items_purchase:
    items_purchase[i]=l[a]
    l2=int(l[a])
    total+=l2
    totalL.append(total)
    a+=1
b=0
for i in items_purchase:
    
    if wallet>totalL[b]:
        panier.append(i)
    else:
        l2=int(l[b])
        if wallet>l2:
            panier.append(i)
            
    b+=1   
if panier==[]:
    print("Vous ne pouvez rien payer.")
else:
    print("Vous pouver payer {0}".format(panier))       
    
