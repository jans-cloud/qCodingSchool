import mongoose from 'mongoose';
// eslint-disable-next-line import/extensions

const { Schema } = mongoose;

const emailverificationSchema = new Schema({
  email: { type: String, required: true, unique: true },
  token: { type: String, required: true, unique: true },
  type: { type: String, enum: ['enterprise', 'private'] },
  password: { type: String },
  dsgvo: { type: Boolean, required: true },
  termsofservice: { type: Boolean, required: true },
  created: { type: Date, required: true, expires: 1800 },
});

const EmailVerificationModel = mongoose.model('emailverification', emailverificationSchema);

export default EmailVerificationModel;
