# -*- coding: utf-8 -*-
"""
Created on Wed Sep 21 22:43:21 2022

@author: hp
"""

"""  

Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

The Pagination class will accept 2 parameters:

items (default: []): A list of contents to paginate.
pageSize (default: 10): The amount of items to show in each page.
So for example we could initialize our pagination like this:

alphabetList = "abcdefghijklmnopqrstuvwxyz".split('')

p = Pagination(alphabetList, 4)


The Pagination class will have a few methods:

getVisibleItems() : returns a list of items visible depending on the pageSize
So for example we could use this method like this:

p.getVisibleItems() 
# ["a", "b", "c", "d"]
You will have to implement various methods to go through the pages such as:
prevPage()
nextPage()
firstPage()
lastPage()
goToPage(pageNum)

Here’s a continuation of the example above using nextPage and lastPage:

alphabetList = "abcdefghijklmnopqrstuvwxyz".split('')

p = Pagination(alphabetList, 4)

p.getVisibleItems() 
# ["a", "b", "c", "d"]

p.nextPage()
p.getVisibleItems()
# ["e", "f", "g", "h"]
p.lastPage()

p.getVisibleItems()
# ["y", "z"]
Notes

The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).


"""

class Pagination():
    def __init__(self, items=[], pageSize=10):
        
        self.items=items
        self.pageSize=pageSize
        self.dic 
        self.cur=1
    def getVisibleItems(self):
         pass
    def prevPage(self):
       p_p=[]
          
    def nextPage(self):
        f=self.items.self.firstPage()
        
        
    
    def firstPage(self):
        f_p=self.items[:self.pageSize]
        
        return f_p
            
    def lastPage(self): 
        lgPage=len(self.items)
        pagination=self.pageSize
        if lgPage%pagination==0:
           lastP=lgPage-pagination
           f_l=self.items[lastP:]
        else: 
            modulo=lgPage%pagination
            lastP=lgPage-modulo
            f_l=self.items[lastP:]
        return f_l
      
   
            
    def totalPages(self):
        nb=self.pageSize
        if len(self.items)%nb==0:
           nb_page=len(self.items)/nb
        else: 
          
           nb_page=int((len(self.items)/nb))+1
        return nb_page 
        
    def goToPage(self, ind):
        l=[]
        l2=[]
        nb=self.pageSize
        if len(self.items)%nb!=0:
           nb_page=len(self.items)
        else: 
           nb_page=(len(self.items)/nb)
        for i in range(1,nb_page,nb):
                l.append(i)
        for a in range(1,len(l)+1):
            l2.append(a)
            
        liste=[]
        k=self.firstPage()
        liste.append(k)
        pas=nb 
       
        for i in range(nb,len(self.items),pas):
            pas=nb+self.pageSize
            l3=self.items[nb: pas]
            nb=pas
            liste.append(l3)
        dic=dict(zip(l2,liste))  
        return dic
 #       for x,y in dic.items():
  #          if ind==x:
   #             return y
    #        else:
     #           if ind>len(dic):
      #              return self.lastPage()
    def curentPage():
        pass
    
    
                             
            
    

alphabetList = "abcdefghijklmnopqrstuvwxyz"
list(alphabetList)
p = Pagination(alphabetList, 4)

print(p.firstPage())
print(p.goToPage(8))
print(p.totalPages())




















