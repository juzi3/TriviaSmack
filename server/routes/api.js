import { Router } from "express";
import { resolve } from "path";

const router = Router();

router.get("/", (req, res) => {
  // res.send('hi');
  res.status(200).sendFile(resolve(__dirname, "../../client/dist/index.html"));
});

export default router;
