import http from 'http';
import express from "express";
import IHttpRepository from "../IHttpRepository";

import router from "./routes/routes";

export default class ExpressRepository implements IHttpRepository {
  instance: express.Application = express();
  port: number = 3000;

  constructor() {
    this.instance.use(express.json);
    this.instance.use(router);
  }

  async start(): Promise<void> {
    const server = http.createServer(this.instance);
    server.listen(this.port, () => console.log(`${new Date(Date.now()).toLocaleString()} - HTTP Server is running on port ${this.port}`));
  }
  
}