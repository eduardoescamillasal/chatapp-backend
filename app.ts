import express, { Express } from "express";

import { ChatAppServer } from "./setupServer";

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: ChatAppServer = new ChatAppServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
