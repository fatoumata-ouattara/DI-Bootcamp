
#Exercice1
#Print the following output in one line of code:
print("Hello word")
print("Hello word")
print("Hello word")
print("Hello word")

#Exercice2
#Write code that calculates the result of: (99^3) * 8 (99 to the power of 3 times 8)
print("****************************************************")
print("Exercice2")
print((99**3)*8)

print("****************************************************")
print("Exercice3")
#
#>>> 5 < 3 donnera false 

print(5 < 3)

#>>> 3 == 3 donnera true
print(3==3)
#>>> 3 == "3" false
print(3=="3")
#>>> "3" > 3  false
#print("3">3) not supported between instances of 'str' and 'int'
#>>> "Hello" == "hello"  true
print("Hello"=="hello")

print("****************************************************")
print("Exercice4")
#Create a variable called computer_brand which value is the brand name of your computer.
#Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand= "HP pavillon"
print("I have a "+computer_brand+" computer")
print("****************************************************")
print("Exercice5")
""" Create a variable called name, and set it’s value to your name.
Create a variable called age, and set it’s value to your age.
Create a variable called shoe_size, and set it’s value to your shoe size.
Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
Have your code print the info message.
Run your code """

name="Ouattara"
age=24
shoe_size=39
sentence="My name is "+name+". I have " +str(age) +" years old and my shoe size is "+str(shoe_size)+"."
print(sentence)



print("****************************************************")
print("Exercice6")
""" Create two variables, a and b.
Each variable value should be a number.
If a is bigger then b, have your code print Hello World. """
a= input("Le nombre a ")
b=input("Le nombre b ")
if a>b: print("Hello World!!")

print("****************************************************")
print("Exercice7")

#Write code that asks the user for a number and determines whether this number is odd or even.
nombre= int(input("Entrer un nombre "))

if (nombre%2)==0: print("{0} est pair".format(nombre))
else : print("{0} est impair".format(nombre))

print("****************************************************")
print("Exercice8")
""" Écrivez un code qui demande à l'utilisateur son nom et détermine si vous avez le même nom ou non, imprimez un message amusant en fonction du résultat.
 """
 
my_name= "fatim"
user_name=input("votre nom :")
if (my_name==user_name): print("true")
else : print("false")

print("****************************************************")
print("Exercice9")

""" Exercice 9 : Assez Grand Pour Faire Des Montagnes Russes
Des Instructions
Écrivez un code qui demandera à l'utilisateur sa taille en pouces.
S'ils mesurent plus de 145 cm, imprimez un message indiquant qu'ils sont assez grands pour rouler.
S'ils ne sont pas assez grands, imprimez un message indiquant qu'ils doivent grandir un peu plus pour rouler.
 """
taille= float(input("Entrer votre taille "))

if (taille>145): print("{0} peut rouler".format(taille))
else : print("{0} ne peut pas rouler. Vous devez grandir un peu lus pour rouler!!".format(taille))











