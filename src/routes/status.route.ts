import { Router, Request, Response } from "express";
import { SystemsService } from "../services/systems.service";

export function createStatusRouter(systemsService: SystemsService): Router {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    systemsService.selectRandomSystem();
    const damagedSystem = systemsService.getDamagedSystem();
    res.json({ damaged_system: damagedSystem });
  });

  return router;
}
