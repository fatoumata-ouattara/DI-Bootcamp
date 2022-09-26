# -*- coding: utf-8 -*-
"""
Created on Mon Sep 26 11:06:54 2022

@author: hp
"""

""" Écrivez une fonction qui affiche la date du jour.
La fonction doit également afficher le temps restant jusqu'aux prochaines vacances à venir et imprimer de quelles vacances il s'agit. ( Exemple : le prochain jour férié est dans 30 jours et 12:03:45 heures).
Astuce : commencez par coder en dur la date et l'heure et le nom des vacances à venir.   
"""
import datetime as dt
def vacAvenir():
    today=dt.datetime.today()
    print(f' Today is : {today}')
    moulid=dt.datetime(2022, 10, 8)
    toussaint=dt.datetime(2022, 11, 1)
    indpendance=dt.datetime(2022, 12, 12)
    proclamation_ind=dt.datetime(2022, 12, 11)
    Noel=dt.datetime(2022, 12, 25)
    
    if today<moulid:
       x=moulid-today
       name="Moulid"
       
    elif moulid<today<toussaint:
        x=toussaint-today
        name="Toussaint"
    elif toussaint<today<indpendance:
        x=indpendance-today
        name="Indpendance Day"
    elif indpendance<today<proclamation_ind:
        x=proclamation_ind-today
        name="Indpendance Proclamation"
    elif proclamation_ind<today<Noel:
        x=Noel-today
        name="Noel"
    else:
        x=" 2022 is finished"
    print(f'the next holiday, which is {name}, is in {x}' )
    
    
vacAvenir()