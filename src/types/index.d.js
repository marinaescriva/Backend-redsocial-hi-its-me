export tokenData = {
    userId: number;
    name: string;
};

declare global {
    // Express
    namespace Express {
        export interface Request {
            tokenData: TokenData;
        }
    }
}