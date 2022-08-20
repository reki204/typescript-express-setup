import express from 'express';
import * as http from 'http';

export class AppServer {
  public app: express.Application;
  public server: http.Server;
  public port: string | number;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.port = process.env.PORT || 8080;
  };

  public setRoute() {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.json({ message: 'AppServer started' });
    });
  };
  
  public listen() {
    this.app.listen(this.port, () => console.log(`listening on ${this.port}`));
  };
};
