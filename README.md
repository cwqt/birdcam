# birdcam

ESP-CAM sending video to a RPi 3b+ over MQTT.  
Publishes image & battery voltage every 5 seconds.

RPi Express server port-forwarded & serves last 10 images to `cass.si`

# ESP-CAM
just C

* `esp/image` image publish
* `esp/battery` battery voltage publish

# Backend
TypeScript & Express 
Manipulates images adding timestamp 

* __GET__: `i` where 1 < `i` 10 - 10 being oldest image
