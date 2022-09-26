# -*- coding: utf-8 -*-
"""
Created on Fri Sep 23 12:33:08 2022

@author: hp
"""

"""   Python a de nombreuses fonctions intégrées.
Si vous pensez que vous ne savez pas comment les implémenter correctement, consultez la documentation Python en ligne.

Écrivez un programme qui imprime les résultats des fonctions intégrées python suivantes : abs(), int(), input().
En utilisant la __doc__méthode dunder créez votre propre documentation qui explique l'exécution de votre code. Jetez un oeil à la méthode doc sur google pour obtenir de l'aide.
"""
n=-5
print("absolute value :",abs(n))

nn="2"
print("absolute value :",int(nn))

def myDoc():
    """
    Ceci est ma documentation. abs() methode print the absolute value of n wich is a negatif number.
    int() turn a str value into integer value.

    """
    
print (myDoc.__doc__)
