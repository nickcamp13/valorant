import { Schema, model } from 'mongoose';

// define the schema
const userSchema = new Schema({
  username: { type: String, required: true},
  // add more fields
})

// Using the schema, create the model
const User = model("User", userSchema);

export default User;