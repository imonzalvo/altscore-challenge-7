import express from "express";
import { createStatusRouter } from "./routes/status.route";
import { createRepairRouter } from "./routes/repair.route";
import teapotRouter from "./routes/teapot.route";
import { SystemsService } from "./services/systems.service";
const app = express();
const systemsService = new SystemsService(); // Create a single instance of the service.
app.use("/status", createStatusRouter(systemsService));
app.use("/repair-bay", createRepairRouter(systemsService));
app.use("/teapot", teapotRouter);
export default app;
