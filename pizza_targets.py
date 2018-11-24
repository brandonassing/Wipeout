from selenium import By, Webdriver

queens_special = "Queen Specials"

student_deals = "Student Deals"

large = "Q2"

king_richies_website = "http://www.kingrichiespizza.com/"

order_online_button = driver.find_elements_by_xpath("//*[contains(text(), 'Order Online')]")


deals = driver.find_elements_by_xpath("//*[contains(text(), '"+queens_special+"'")

size_of_pizza = driver.find_elements_by_xpath("//*[@class='fName' and contains(text(),'"+large+"')]")

