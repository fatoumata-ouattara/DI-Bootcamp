# -*- coding: utf-8 -*-
"""
Created on Mon Nov  7 15:42:31 2022

@author: hp
"""

source  = r"C:\wamp64\www\DI-Bootcamp\Week_5\Day4\DailyChallenge.py\theStranger\theStranger\the_stranger.txt"

class Text():
    def __init__(self,text):
        self.text = text

    def frequency(self,word):
        seq = self.text.split(" ")
        occ = seq.count(word)
        if occ>0:
            return occ
        return None
        
    def most_common(self):
        seq = self.text.split(" ")
        # print(seq)
        common,express = 1,""
        for word in seq:
            word_occ = self.frequency(word)
            if (word_occ and word_occ > common):
                common = word_occ
                express = word
        if common == 1:
            return None
        return express,common

    def unique(self):
        seq = self.text.split(" ")
        liste = []
        for word in seq:
            word_occ = seq.count(word)
            if word_occ == 1:
                liste.append(word)
        return liste

    @classmethod
    def from_file(cls):
        with open(source) as f:
            text_instance = f.read()
        return text_instance

quote = Text(Text("").from_file())
print(quote.text)
print(quote.most_common())
print(quote.unique())
print(quote.frequency('my'))