import { Router } from "express";
export function createStatusRouter(systemsService) {
    const router = Router();
    router.get("/", (req, res) => {
        systemsService.selectRandomSystem();
        const damagedSystem = systemsService.getDamagedSystem();
        res.json({ damaged_system: damagedSystem });
    });
    return router;
}
