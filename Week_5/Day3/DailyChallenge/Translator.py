# -*- coding: utf-8 -*-
"""
Created on Mon Sep 26 14:46:27 2022

@author: hp
"""

import deep_translator
from deep_translator import GoogleTranslator

french_words=["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 

l=[]


for i in french_words:
    text=GoogleTranslator(source='fr', target='en').translate(i)    
    l.append(text)
dictio=dict(zip(french_words,l))
print(dictio)