# birdcam
ESP-CAM sending video to a RPi 3b+ & then to `cass.si`.

# ESP-CAM
just C

* `esp/image` image publish
* `esp/battery` battery voltage publish

# Backend
TypeScript & Express 
Manipulates images adding timestamp 

* __GET__: `i` where 1 < `i` 10 - 10 being oldest image
