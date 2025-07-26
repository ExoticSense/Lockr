const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    website: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

passwordSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Password = mongoose.model('Password', passwordSchema);

module.exports = Password;