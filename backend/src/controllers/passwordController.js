// This file contains functions for managing passwords, including creating, retrieving, updating, and deleting passwords.

const Password = require('../models/Password');

// Create a new password
exports.createPassword = async (req, res) => {
    try {
        const { title, password } = req.body;
        const newPassword = new Password({ title, password });
        await newPassword.save();
        res.status(201).json({ message: 'Password created successfully', newPassword });
    } catch (error) {
        res.status(500).json({ message: 'Error creating password', error });
    }
};

// Retrieve all passwords
exports.getAllPasswords = async (req, res) => {
    try {
        const passwords = await Password.find();
        res.status(200).json(passwords);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving passwords', error });
    }
};

// Update a password
exports.updatePassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, password } = req.body;
        const updatedPassword = await Password.findByIdAndUpdate(id, { title, password }, { new: true });
        if (!updatedPassword) {
            return res.status(404).json({ message: 'Password not found' });
        }
        res.status(200).json({ message: 'Password updated successfully', updatedPassword });
    } catch (error) {
        res.status(500).json({ message: 'Error updating password', error });
    }
};

// Delete a password
exports.deletePassword = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPassword = await Password.findByIdAndDelete(id);
        if (!deletedPassword) {
            return res.status(404).json({ message: 'Password not found' });
        }
        res.status(200).json({ message: 'Password deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting password', error });
    }
};