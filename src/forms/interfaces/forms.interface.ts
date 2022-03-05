import { Document } from 'mongoose';

export interface formsInterface extends Document {    
    name: String;
    location: String;
    description: String;
    latitude: String; 
    longitude: String; 
    createdBy: Object;
}