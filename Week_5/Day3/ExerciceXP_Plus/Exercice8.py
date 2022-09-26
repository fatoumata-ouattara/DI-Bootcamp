# -*- coding: utf-8 -*-
"""
Created on Mon Sep 26 11:44:56 2022

@author: hp
"""

""" 
Given an age in seconds, calculate how old someone would be on:
Earth: orbital period 365.25 Earth days, or 31557600 seconds
Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.

"""
import datetime as dt
def AgeSur(age):
    p_terre=31557600 
    terre=age/p_terre
   
    dic={"Terre":age/p_terre,"Mercure":age/0.2408467*age/terre,"Vénus":age/0.61519726*age/terre,"Mars":age/1.8808158*age/terre,
         "Jupyter":age/11.862615*age/terre,"Saturne":age/29.447498*age/terre,"Uranus":age/84.016846*age/terre, 
         "Neptune":age/164.79132*age/terre}
    print("Age sur : ")
    for i,j in dic.items():
        print(f'{i} : {j} annees terrestre')
    
AgeSur(1000000000)