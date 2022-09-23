# -*- coding: utf-8 -*-
"""
Created on Thu Sep 22 15:06:06 2022

@author: hp
"""

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
        self.cur=1
        l=[]
        l2=[]
        self.ind=0
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
        self.dic=dict(zip(l2,liste))  
        
      
    def getVisibleItems(self):
         values=list(self.dic.values())
         if self.ind<1:
             print(f'{list(values[0])}')
         else:
             if self.ind>self.totalPages():
                 print(f'{list(values[self.totalPages()])}')
             else:
                 print(f'{list(values[self.ind-1])}')
                 
                            
    def prevPage(self):
          self.ind-=1
          return self.ind
    def nextPage(self):
         self.ind+=1     
         return self
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
        if ind<1:
           self.ind=1
        else:
             if ind>self.totalPages():
                 self.ind=self.totalPages()
             else:
                 self.ind=ind
    def curentPage(self):
        for x,y in self.dic.items():
            if y==self.goToPage(self.cur):
               return x
            
    
    
                             
            
    

alphabetList = "abcdefghijklmnopqrstuvwxyz"
list(alphabetList)
p = Pagination(alphabetList, 4)

p.nextPage().nextPage().nextPage().nextPage().nextPage().nextPage().nextPage()

p.getVisibleItems()

p.prevPage()
p.getVisibleItems()

p.goToPage(0)
p.getVisibleItems()
















