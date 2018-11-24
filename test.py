import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


#using chrome to acess the internet
driver=webdriver.Chrome()

#open the website
driver.get("https://www.dominos.ca/pages/order/")

#select delivery
driver.find_element_by_css_selector("span.c-delivery").click()

#fill out delivery guest form
streetName=driver.find_element_by_id("Street")
streetName.send_keys("96 Regenet Street")

cityName=driver.find_element_by_id("City")
cityName.send_keys("London")
cityName.submit()

driver.find_element_by_id("Region").click()
driver.find_element_by_css_selector("#Region > option:nth-child(10)").click()

postalCode=driver.find_element_by_id("Postal_Code")
postalCode.send_keys("N6A 2G4")
postalCode.submit()

#driver.find_element_by_xpath("//*[@id='_dpz']/header/nav[1]/div[1]/ul/li[3]/a").click()

driver.refresh()
driver.find_element_by_css_selector("#csn-BuildYourOwn > a").click()
#driver.find_element_by_css_selector("#csn-BuildYourOwn > a").click()


#Province=driver.find_element_by_id


#driver.find_element_by_css_selector("#msName478005").click()
#driver.find_element_by_xpath("//*[contains(text(), 'Queen')]").click()





driver.quit