import selenium
from selenium import webdriver

#using chrome to acess the internet
driver=webdriver.Chrome()

#open the website
driver.get("https://www.amazon.ca/")

id_box=driver.find_element_by_name('field-keywords')
id_box.send_keys('toilet paper')
id_box.submit()
#search=driver.find_element_by_class_name('nav-search-submit-text')
#search_button.click()

driver.quit