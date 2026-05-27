import { Express, Request, Response, NextFunction } from "express";

function handleError(app: Express) {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("ERROR", req.method, req.path, err);

    res.status(err.status || 500).json({
      error: err.message || "Internal Server Error",
    });
  });
}

export default handleError;