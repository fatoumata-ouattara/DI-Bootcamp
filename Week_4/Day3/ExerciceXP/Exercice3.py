# -*- coding: utf-8 -*-
"""
Created on Fri Sep 16 00:02:59 2022

@author: hp
"""

#Créez un dictionnaire appelé branddont la valeur correspond aux informations de la première partie (transformez les informations en clés et valeurs ).
brand={"name":"zara",
      "creation_date": "1975 ",
      "creator_name":("Amancio" ,"Ortega", "Gaona"),
      "type_of_clothes":["men", "women","children", "home"],
      "international_competitors":["Gap", "H&M", "Benetton"],
      "number_stores": 7000, 
      "major_color":{"France": "blue", 
                     " Spain":" red", 
                     "US":[ "pink", "green"]} 
       
      
      }
#Modifiez le nombre de magasins à 2.
brand["number_stores"]=2
print(brand)
cl=[]
#Imprimez une phrase qui explique qui sont les clients de Zaras.
for i in brand["type_of_clothes"]: 
    if i=="home":
     cl.append("and for home")
    else:
     cl.append(i)
cl=','.join(cl)
print("zara's clients are : {0}".format(cl))
#Ajoutez une clé appelée country_creationavec une valeur de Spain.
brand["country_creation"]="spain"
#Vérifiez si la clé international_competitorsest dans le dictionnaire. Si c'est le cas, ajoutez le magasin Desigual .

if brand["international_competitors"]:
   brand["international_competitors"].append("Desigual")
   print(brand["international_competitors"])
#Supprimez les informations sur la date de création.
brand.pop( "creation_date")
print(brand)
#Imprimez le dernier concurrent international.
lg=len(brand["international_competitors"])-1
print(brand["international_competitors"][lg])
#Imprimez les principales couleurs de vêtements aux États-Unis.
print(brand["major_color"]["US"][0:])
# Imprimez le nombre de paires clé-valeur (c'est-à-dire la longueur du dictionnaire).
lgBrand=len(brand)
print(lgBrand)
#Imprimez les clés du dictionnaire.
print(brand.keys())
#Créez un autre dictionnaire appelé more_on_zaraavec les détails suivants :
more_on_zara={
    "creation_date":1975,
    "number_stores":10000
         }
#Utilisez une méthode pour ajouter les informations du dictionnaire more_on_zaraau dictionnaire brand.
#14. Imprimer la valeur de la clé number_stores. Qu'est-ce qui vient juste de se passer ?

brand.update(more_on_zara)
print(brand["number_stores"])
# la mise a jour a remplacer l'ancienne valeur par la nouvelle.

