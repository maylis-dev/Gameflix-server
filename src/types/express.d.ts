import { JwtPayload } from "jsonwebtoken";

type CustomPayload = JwtPayload & {
  id: number;
  email: string;
  role: string;
};

declare global {
  namespace Express {
    interface Request {
      payload?: CustomPayload;
    }
  }
}

export {};