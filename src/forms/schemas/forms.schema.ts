import * as mongoose from 'mongoose';

export const formsSchema = new mongoose.Schema({
    name: String,
    location: String, 
    description: String ,
    latitude: String, 
    longitude: String, 
    createdBy: Object,     
        
},
{
    collection: "forms",
    versionKey: false,
    timestamps: true
});
