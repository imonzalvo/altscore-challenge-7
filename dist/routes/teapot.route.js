import { Router } from "express";
const router = Router();
router.post("/", (req, res) => {
    res.status(418).send("I'm a teapot");
});
export default router;
