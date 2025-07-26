const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');
const { authenticate } = require('../middleware/auth');
const { validatePassword } = require('../middleware/validation');

// Route to create a new password
router.post('/', authenticate, validatePassword, passwordController.createPassword);

// Route to retrieve all passwords
router.get('/', authenticate, passwordController.getAllPasswords);

// Route to retrieve a specific password by ID
router.get('/:id', authenticate, passwordController.getPasswordById);

// Route to update a password by ID
router.put('/:id', authenticate, validatePassword, passwordController.updatePassword);

// Route to delete a password by ID
router.delete('/:id', authenticate, passwordController.deletePassword);

module.exports = router;