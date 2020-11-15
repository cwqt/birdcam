# birdcam
ESP-CAM sending video via MJPEG to a RPi 3b+ & then to `cass.si`.

# ESP-CAM
just C

# Backend
TypeScript & Express 
Manipulates images adding timestamp 

* __GET__: `/current` Timestamped snapshot
* __GET__: `/stream` Proxy stream
* __GET__: `/ping` Pong!
