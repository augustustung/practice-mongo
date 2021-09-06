import { model, Schema } from 'mongoose';

import { validateEmail } from '../utils/regex';

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: validateEmail,
    },
    password: { type: String, required: true },
});

const User = model('User', UserSchema, 'users');

export default User;