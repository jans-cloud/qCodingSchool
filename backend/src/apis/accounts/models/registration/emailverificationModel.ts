import mongoose from 'mongoose';
// eslint-disable-next-line import/extensions

const { Schema } = mongoose;

const emailverificationSchema = new Schema({
  email: { type: String, required: true, unique: true },
  token: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  learner: { type: Boolean, required: true },
  teacher: { type: Boolean, required: true },
  enterprise: { type: Boolean, required: true },
  industry: { type: String },
  skills: { type: [String] },
  dsgvo: { type: Boolean, required: true },
  created: { type: Date, required: true, expires: 180 },
});

const EmailVerificationModel = mongoose.model('emailverification', emailverificationSchema);

export default EmailVerificationModel;
