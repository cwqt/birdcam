# birdcam
ESP-CAM sending video via MJPEG to a RPi 3b+ & then to `cass.si`.

# ESP-CAM
just C

# Backend
TypeScript & Express 
Manipulates images adding timestamp 

* __GET__: `/:i` where 1 < `i` 10 - 10 being oldest image
* __GET__: `/ping` Pong!
