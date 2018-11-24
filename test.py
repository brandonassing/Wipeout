import selenium
from selenium import webdriver

#using chrome to acess the internet
driver=webdriver.Chrome()

#open the website
driver.get("https://www.google.com/")

driver.quit