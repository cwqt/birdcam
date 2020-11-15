import { AsyncRouter, NextFunction, Request, Response } from "express-async-router";
import Jimp from 'jimp';

const express = require('express');
const app = express();
const router = AsyncRouter();
const MjpegCamera = require('mjpeg-camera');
const MjpegProxy = require('./mjpeg-proxy').MjpegProxy;

const CAM_URL = "http://192.168.1.129/";
const camera = new MjpegCamera({ url: CAM_URL });
 
router.get("/ping", (req, res) => res.send("pong!").end());
router.get("/current", async (req, res) => {
    const frame = await new Promise((res, rej) => {
        camera.getScreenshot(async (err:any, frame:any) => {
            if(!frame || err) { rej(err); return; }

            const i = await Jimp.read(frame);
            const f = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            i.print(f, 10, 10, new Date().toString())
            frame = await i.getBufferAsync("image/jpeg");

            res(frame);
        })                      
    })

    res.contentType("image/jpg");
    res.send(frame);
}) 


app.listen(3000, () => {
    console.log("Express started!");

    app.get('/stream', new MjpegProxy(CAM_URL).proxyRequest);
    app.use(router);
    app.use((req:Request,res:Response,next:NextFunction,err:any) => res.send("Error occured"));
});