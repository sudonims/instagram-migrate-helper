from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep


driver = webdriver.Chrome(
    r"/home/sudonims/chromedriver"
)  # Enter the path of chromedriver


def execKeyComb(key):
    driver.find_element_by_tag_name("body").send_keys(Keys.CONTROL + key)


driver.get("https://instagram.com")
print("opened")  #!?Parantheses
sleep(1)
user = driver.find_element_by_name("username")
passwd = driver.find_element_by_name("password")
user.send_keys("<username>")  # Replace the text with your username
sleep(0.25)
passwd.send_keys("<password>")  # Replace the text with your password
sleep(0.25)
button = driver.find_element_by_css_selector("button.L3NKy")
button.click()
print("done")  #!?Parantheses...
sleep(3)
driver.find_element_by_css_selector("button.yWX7d").click()
sleep(3)
driver.find_element_by_css_selector("button.HoLwm").click()

f = open("./id.js").read()
driver.execute_script(f)
sleep(2)
user_id = driver.find_element_by_tag_name("html").get_attribute("id")
sleep(2)
following = driver.execute_script(open("./getFollowing.js").read())
print(following)
# Made by Nimish Tarang Shah.
# Special thanks to google and Volsbb login(for idea).
