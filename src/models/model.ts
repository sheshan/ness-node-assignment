import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const featureSchema = new Schema({
    feature_id: Number,
    feature_name: String,
    feature_type: String,
    feature_description: String,
    feature_created_timestamp: String,
    feature_version: String,
    feature_owner: String,
    feature_data : Array
});
