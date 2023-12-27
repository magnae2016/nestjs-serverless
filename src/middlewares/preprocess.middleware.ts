import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class PreprocessMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(req.headers.cookie);
        const { cookie } = req.headers;
        const tokenId = cookie.substr(6);
        console.log("preprocess.middleware", tokenId);
        req.body.tokenId = tokenId;
        next();
    }
}
