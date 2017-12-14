import { NextFunction, Request, Response, Router } from "express";

class IndexRoute  {

  public index(req: Request, res: Response, next: NextFunction) {
    res.render("index", {
      title: "Welcome"
    })
  }
}

export let create = (router: Router) => {
  router.get("/", (req: Request, res: Response, next: NextFunction) => {
    new IndexRoute().index(req, res, next);
  });

  return router;
}