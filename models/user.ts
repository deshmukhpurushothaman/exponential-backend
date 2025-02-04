import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  score: number;
  prizes: number;
}

const UserSchema: Schema = new Schema({
  _id: { type: String, required: true }, // User ID as string for flexibility
  score: { type: Number, default: 0 },
  prizes: { type: Number, default: 0 },
});

export default mongoose.model<IUser>('User', UserSchema);
