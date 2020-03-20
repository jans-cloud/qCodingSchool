
import mongoose from 'mongoose';
// eslint-disable-next-line import/extensions
import config from '../../../../utils/config/accounts';

const { Schema } = mongoose;

const adressSchema = new Schema({
  zipcode: { type: Number },
  city: { type: String },
  street: { type: String },
});

const roleSchema = new Schema({
  name: { type: String },
  permissions: { type: [String], enum: config.permissions },
});

const accountSchema = new Schema({
  email: { type: String, required: true, unique: true },
  type: { type: String, enum: ['enterprise', 'private'] },
  dsgvo: { type: Boolean, required: true },
  termsofservice: { type: Boolean, required: true },
  address: adressSchema,
  user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  roles: [roleSchema],
  created: { type: Date, required: true },
  updated: { type: Date, required: true },
});

const AccountModel = mongoose.model('accounts', accountSchema);

export default AccountModel;
