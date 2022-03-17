import { Schema, model, Document, Model } from 'mongoose';

export interface IWilder extends Document {
  name: string;
  city: string;
  skills?: Array<object>;
  description?: string;
}

const schema = new Schema<IWilder>({
  name: {
    type: String,
    unique: true,
  },
  city: String,
  description: String,
  skills: [
    {
      title: String,
      votes: Number,
    },
  ],
});

// eslint-disable-next-line import/prefer-default-export
export const Wilder: Model<IWilder> = model('Wilder', schema);
