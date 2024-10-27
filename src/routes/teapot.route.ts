import { Router, Request, Response } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  res.status(418).send("I'm a teapot");
});

export default router;
