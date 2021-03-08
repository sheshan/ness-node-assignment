import * as mongoose from 'mongoose';
import { featureSchema } from '../models/model';
import { Request, Response } from 'express';
const Feature = mongoose.model('Feature', featureSchema);


export class FeatureController {
    public addNewFeature(req: Request, res: Response) {
        let newFeature = new Feature(req.body);

        newFeature.save((err, feature) => {
            if (err) {
                res.send(err);
            }
            res.json(feature);
        });

    }
    public getFeatures(req: Request, res: Response) {
        Feature.find({}, (err, feature) => {
            if (err) {
                res.send(err);
            }
            res.json(feature);
        });
    }


    public getFeatureWithID(req: Request, res: Response) {
        Feature.findById(req.params.feature_id, (err, feature) => {
            if (err) {
                res.send(err);
            }
            res.json(feature);
        });
    }

    public updateFeature(req: Request, res: Response) {
        Feature.findOneAndUpdate({ _id: req.params.feature_id }, req.body, { new: true },
            (err, feature) => {
                if (err) {
                    res.send(err);
                }
                res.json(feature);
            });
    }

    public deleteFeature(req: Request, res: Response) {
        Feature.remove({ _id: req.params.contactId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }


}