import express, {
  Application,
  json,
  urlencoded,
  Request,
  Response,
} from "express";
import helmet from "helmet";
import morgan from "morgan";

class App {
  private app: Application;
  port: number;

  constructor(_PORT: number) {
    this.app = express();
    this.port = parseInt(`${process.env.PORT}`) || _PORT; // fucking stupidity
    this.app.use(helmet());

    if (process.env.NODE_ENV === "development") {
      this.app.use(morgan("dev"));
    }

    this.middlewareInit(); // initialise middleware
    this.apiRoutesInit(); // initialise api routes
  }

  private apiRoutesInit() {
    this.app.use("/api", require("./api/routes"));

    this.app.get("*", (req: Request, res: Response) => {
      res.send({
        msg: "No further routes",
      });
    });
  }

  private middlewareInit() {
    this.app.use(urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
    this.app.use(json()); // parse application/json
  }

  public listen() {
    this.app.listen(this.port, () =>
      console.log(`Server is now running on port: ${this.port}`)
    );
  }
}

export default App;
