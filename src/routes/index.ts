import { NextFunction, Request, Response, Router } from "express";

import * as imageService from '../service/image';

class IndexRoute  {

  public index(req: Request, res: Response, next: NextFunction) {

    imageService.list({})
      .then(data => {
        res.render("index", {
          list: data,
        })
      })
      .catch(e => {
        res.render("index", {
          error: e
        })
      })
  }

  public vision(req: Request, res: Response, next: NextFunction) {
    console.log(`body = ${JSON.stringify(req.body)}`);
    let { detect_type, image_uri } = req.body

    imageService.detect(image_uri, detect_type)
      .then(() => {
        res.redirect("/")
      })
      .catch(e => {
        res.render("index", {
          error: e
        })
      })
  }
}

export let create = (router: Router) => {
  router.get("/", (req: Request, res: Response, next: NextFunction) => {
    new IndexRoute().index(req, res, next);
  });

  router.post("/detect", (req: Request, res: Response, next: NextFunction) => {
    new IndexRoute().vision(req, res, next);
  });
  return router;
}