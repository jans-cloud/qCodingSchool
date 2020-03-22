
import mongoose from 'mongoose';
// eslint-disable-next-line import/extensions

const { Schema } = mongoose;


const accountSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  learner: { type: Boolean, required: true },
  teacher: { type: Boolean, required: true },
  enterprise: { type: Boolean, required: true },
  industry: { type: String },
  skills: { type: [String] },
  dsgvo: { type: Boolean, required: true },
  created: { type: Date, required: true, expires: 180 },
  updated: { type: Date, required: true },
});

const AccountModel = mongoose.model('accounts', accountSchema);

export default AccountModel;
