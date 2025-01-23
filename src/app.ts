import express, { Express } from "express";

import { ChatAppServer } from "@root/setupServer";
import databaseConnection from "@root/setupDatabase";
import { config } from "@root/config";

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: ChatAppServer = new ChatAppServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
