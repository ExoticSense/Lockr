const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser } = require('../middleware/validation');
const authMiddleware = require('../middleware/auth');

// Route to get user details
router.get('/:id', authMiddleware, userController.getUserDetails);

// Route to update user information
router.put('/:id', authMiddleware, validateUser, userController.updateUser);

// Route to delete a user
router.delete('/:id', authMiddleware, userController.deleteUser);

module.exports = router;