import express from "express";
import bodyParser from "body-parser";
import {Routes} from './routes/routes';
import mongoose from "mongoose";

class App {
    public app: express.Application;
    public route:Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/CRMdb';

    constructor() {
        this.app = express();
        this.config();
        this.route.routes(this.app);
        this.mongoSetup();
    }
    private config(): void {

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    // Mongoose setup
    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
        
}


export default new App().app;
