import express, { Express } from "express";

import { ChatAppServer } from "./setupServer";
import databaseConnection from "./setupDatabase";

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: ChatAppServer = new ChatAppServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
