import { Request, Response } from "express";
import express from "express";
import { FeatureController } from '../controller/controller';


export class Routes {
    public featureController: FeatureController = new FeatureController();
    public routes(app: express.Application): void {
        // for home
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
        // for all features
        app.route('/api/features/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
            // post endpoint create new feature
            .post(this.featureController.addNewFeature);

        // get by id
        app.route('/contact/:contactId')
            // edit specific contact
            .get(this.featureController.getFeatureWithID)
            .put(this.featureController.updateFeature)
            .delete(this.featureController.deleteFeature)

    }
}