import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class PreprocessMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(req.headers.cookie);
        const { cookie } = req.headers;
        console.log("preprocess.middleware", cookie);
        next();
    }
}
