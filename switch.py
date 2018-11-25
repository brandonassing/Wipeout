import RPi.GPIO as GPIO
import requests
import time
import os
import subprocess

from os import listdir
from time import sleep

def timer():
    now=time.localtime(time.time())
    return now[5]

#declare GPIO pin used for TP messeging
TP_pin=40

#initalize Board
GPIO.setmode(GPIO.BOARD)
GPIO.setup(TP_pin, GPIO.IN)

#initalize variables
interval=1
previousTime=0
songStop=10     #run song for 10 seconds
songFlag=False

#create array of mp3 files in working dir
mp3_files = [ f for f in listdir('.') if f[-4:] == '.mp3' ]

try:
    while True:
        flag = GPIO.input(TP_pin)
        current_sec=timer()
        #for when timer wraps at 60 seconds
        if current_sec==59:
            previousTime=0
        
        #do not listen for button for another 3 seconds after being pressed
        if (flag and (current_sec-previousTime)>interval):
            print(flag)
            #call stdlib to run SMS API
            response = requests.get("https://brandonassing.lib.id/tp-me@dev/")
            sleep(0.1)
            subprocess.Popen(['mpg123', mp3_files[0]])
            songFlag=True
            previousTime=timer()
            print(response)
        else:
            print("switch off", flag)
        sleep(0.1)
        
        if(songFlag and current_sec>previousTime+songStop):
            subprocess.call(['killall', 'mpg123'])
            songFlag=False

finally:
    GPIO.cleanup()