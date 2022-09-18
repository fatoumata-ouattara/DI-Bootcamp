# -*- coding: utf-8 -*-
"""
Created on Sun Sep 18 18:29:32 2022

@author: hp
"""
""" Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
Call the function make_shirt().

Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
Make a large shirt with the default message
Make medium shirt with the default message
Make a shirt of any size with a different message.

Bonus: Call the function make_shirt() using keyword arguments."""

def make_shirt(size,message) :
    print("The size of the shirt is {0} and the message is {1} ".format(size,message))
make_shirt(30, "Be happy")

def make_shirt():
    size="large"
    message="i love python"
    print("The size of the shirt is {0} and the message is {1} ".format(size,message))
make_shirt()
def make_shirt():
    size="medium"
    message="i love python"
    print("The size of the shirt is {0} and the message is {1} ".format(size,message))
make_shirt()
def make_shirt(size,message) :
    print("The size of the shirt is {0} and the message is {1} ".format(size,message))

make_shirt("small", "Love")