import mongoose, { Schema } from "mongoose";

const personSchema = new mongoose.Schema({
    name: { type: String },
    groups: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'group'
    }
})

export const personModel = mongoose.models.person || mongoose.model('person', personSchema, 'Persons');
