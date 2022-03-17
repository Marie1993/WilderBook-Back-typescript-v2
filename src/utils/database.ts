/* eslint-disable no-console */
import mongoose from 'mongoose';

require('dotenv').config();

const connectionSting = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}.qdxvt.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

export default async function connect() {
  try {
    await mongoose.connect(connectionSting, {
      autoIndex: true,
    });
    console.info('Connected to database');
  } catch (err) {
    console.info(err);
  }
}
