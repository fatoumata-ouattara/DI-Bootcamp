# -*- coding: utf-8 -*-
"""
Created on Mon Sep 26 10:28:53 2022

@author: hp
"""

""" Créez une fonction qui accepte une date de naissance comme argument (dans le format de votre choix), puis affiche un message indiquant combien de minutes l'utilisateur a vécu dans sa vie."""
import datetime
def dateAniv(datenaiss):
   current=datetime.datetime.now()
   y=datetime.datetime.now().hour
   z=datetime.datetime.now().minute
   dt=current-datenaiss
   dt_h=dt.days*24
   dt_m=dt_h*60 + y*60+z
   return dt_m
    
print(dateAniv(datetime.datetime(2000, 3,28)))