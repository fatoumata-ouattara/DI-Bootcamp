# -*- coding: utf-8 -*-
"""
Created on Sat Sep 24 08:40:23 2022

@author: hp
"""

""" Le but de l'exercice est de créer une classe qui vous aidera à analyser un texte spécifique. Un texte peut être juste une simple chaîne, comme "Aujourd'hui, c'est un jour heureux" ou il peut s'agir d'un fichier texte externe."""
class Text():
    def __init__(self, ch):
        self.ch=ch
        
        l=self.ch.split()
        self.q=[]
        self.c=0
        n=0
        for self.n in range(len(l)):
           self.p=[] 
           for i in l:
            
               if i==l[self.n]:
                  
                  self.p.append(i)
                  
           self.q.append(self.p)
        self.j=[]   
        for y in self.q:
               self.j.append(str(len(y))+y[0])
               
    def freq_words(self,word):
      r=[]
      nb=[]
      sNb=[]
      for i in self.j:
          if i not in r: 
              r.append(i)
              sNb.append(i[1:])
      for i in range(len(r)):
          nb.append(r[i][0])
      dic= dict(zip(sNb,nb))
      for x,y in dic.items():
          if x == word:
             return f'{word} : ocurrence {y}'
         
    def plus_freq(self):
      r=[]
      nb=[]
      sNb=[]
      val=[]
      wordL=[]
      for i in self.j:
          if i not in r: 
              r.append(i)
              sNb.append(i[1:])
      for i in range(len(r)):
          nb.append(r[i][0])
      dic= dict(zip(sNb,nb))
      for x,y in dic.items():
          if y not in val:
             val.append(y)
             val.sort()
      for x,y in dic.items():
          if y==val[len(val)-1]:
              wordL.append(x)
              word=','.join(wordL)
              
      return  f'{word } ocurrence {val[len(val)-1]}'  
          
    def sing(self):
      r=[]
      nb=[]
      sNb=[]
      val=[]
      wordL=[]
      for i in self.j:
          if i not in r: 
              r.append(i)
              sNb.append(i[1:])
      for i in range(len(r)):
          nb.append(r[i][0])
      dic= dict(zip(sNb,nb))
      for x,y in dic.items():
          if y not in val:
             val.append(y)
             val.sort()
      for x,y in dic.items():
          if y==val[0]:
              wordL.append(x)
              word=','.join(wordL)
              
      return  f'{word } ocurrence {val[0]}'  
          
       
      
  
      
    
text=Text("Un bon bon livre coûterait Un  parfois autant qu'une bonne maison ou Un bon dictio")
print("------ Ocurrence d'un mot------")
print(text.freq_words("bon")) 
print("--Mot(s) le(s) plus frequent(s)---") 
print(text.plus_freq()) 
print("------ Les singletons------")
print(text.sing())          
                