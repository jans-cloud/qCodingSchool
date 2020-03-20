/* eslint-disable import/extensions */

import mongoose from 'mongoose';
import config from '../../../../utils/config/accounts';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  verified: { type: Boolean, required: true },
  fistname: { type: String },
  lastname: { type: String },
  password: { type: String },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  created: { type: Date, required: true },
  updated: { type: Date, required: true },
  permissions: { type: [String], enum: config.permissions },
  account: { type: Schema.Types.ObjectId, ref: 'accounts', required: true },
});

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
