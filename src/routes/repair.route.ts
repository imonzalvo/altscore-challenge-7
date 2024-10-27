import { Router, Request, Response } from "express";
import { SystemsService } from "../services/systems.service";

export function createRepairRouter(systemsService: SystemsService): Router {
  const router = Router();

  router.get("/", (_req: Request, res: Response) => {
    const systemCode = systemsService.getSystemCode();

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Repair</title>
      </head>
      <body>
        <div class="anchor-point">${systemCode}</div>
      </body>
      </html>
    `;

    res.status(200).send(htmlContent);
  });

  return router;
}
