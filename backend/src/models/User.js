import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Method to find user by username
userSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
};

// Method to find user by email
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
};

const User = mongoose.model('User', userSchema);

export default User;