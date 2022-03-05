import * as mongoose from 'mongoose';

export const formsAuditLogSchema = new mongoose.Schema({
    formId: String,
    modifications: [{
        fieldName: String, 
        value: String, 
    }], 
    modificationDate: Date ,
    modifiedBy: Object,         
},
{
    collection: "formsAuditLog",
    versionKey: false,
    timestamps: true
});
