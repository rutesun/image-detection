"use strict";

import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction, Router } from "express";

import Vision from "../libs/vision";
import VisionSchema from '../models/vision_schema'

class VisionRouter {
  private _vision = null;
  constructor() {
    this._vision = new Vision();
  }

  /**
   * 분석된 이미지 List
   * @param req 
   * @param res 
   * @param next 
   */
  public index(req: Request, res: Response, next: NextFunction) {
    VisionSchema.find({}, (err, docs) => {
      if (err) return res.status(500).send({ error: 'database failure' });
      return res.json(docs);
    })
  }

  /**
   * Analyze what kind of image, using google vision api
   * async function
   * @param req 
   * @param res 
   * @param next 
   */
  public detect(req: Request, res: Response, next: NextFunction) {
    let { uri } = req.body;
    let result = this._vision.detectByUri(uri);
    result.then(x => {
      return res.json(x.responses);
    });
  }
}

export let create = (router: Router) => {
  router.get("/", (req: Request, res: Response, next: NextFunction) => {
    new VisionRouter().index(req, res, next);
  });

  router.post("/detect", (req: Request, res: Response, next: NextFunction) => {
    new VisionRouter().detect(req, res, next);
  });

  return router;
}