import { Document } from 'mongoose';

export interface formsAuditLogInterface extends Document {    
    formId: String;
    modifications: [{
        fieldName: String, 
        value: String, 
    }]; 
    modificationDate: Date ;
    modifiedBy: Object;    
}