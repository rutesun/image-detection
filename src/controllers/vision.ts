"use strict";

import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction, Router } from "express";

import * as vision from "../libs/vision";

class VisionRouter {
  constructor() {

  }

  /**
   * 분석된 이미지 List
   * @param req 
   * @param res 
   * @param next 
   */
  public index(req: Request, res: Response, next: NextFunction) {

  }

  /**
   * Analyze what kind of image, using google vision api
   * async function
   * @param req 
   * @param res 
   * @param next 
   */
  public async detect(req: Request, res: Response, next: NextFunction) {
      let result = await vision.detect();
  }
}

export let create = (router: Router) => {
  router.post("/", (req: Request, res: Response, next: NextFunction) => {
    new VisionRouter().index(req, res, next);
  });
  
  router.post("/detect", (req: Request, res: Response, next: NextFunction) => {
    new VisionRouter().detect(req, res, next);
  });

  return router;
}