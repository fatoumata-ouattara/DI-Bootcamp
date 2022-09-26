# -*- coding: utf-8 -*-
"""
Created on Sat Sep 24 07:38:11 2022

@author: hp
"""

""" Create a function that displays the amount of time left from now until January 1st.
(Example: the 1st of January is in 10 days and 10:34:01hours)."""

import datetime


actual_datetime = datetime.datetime.now()
jan= datetime.datetime(2023, 1, 1)
nb_day=jan-actual_datetime
print(f" the 1st of January is in {nb_day}")
#print(f"In 15 hours and 10 minutes it will be the {in_15_hours.day}/{in_15_hours.month}")