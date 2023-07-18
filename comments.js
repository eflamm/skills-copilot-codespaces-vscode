// Create web server
// ------------------------------------------------

// Import express
const express = require('express');

// Import router
const router = express.Router();

// Import comment controller
const commentController = require('../controllers/commentController');

// Import check auth middleware
const checkAuth = require('../middleware/checkAuth');

// Import check comment owner middleware
const checkCommentOwner = require('../middleware/checkCommentOwner');

// Import check comment owner middleware
const checkCommentOwnerOrAdmin = require('../middleware/checkCommentOwnerOrAdmin');

// Create comment route
router.post('/', checkAuth, commentController.createComment);

// Get all comments route
router.get('/', commentController.getAllComments);

// Get comment by id route
router.get('/:id', commentController.getCommentById);

// Update comment by id route
router.patch('/:id', checkAuth, checkCommentOwnerOrAdmin, commentController.updateCommentById);

// Delete comment by id route
router.delete('/:id', checkAuth, checkCommentOwnerOrAdmin, commentController.deleteCommentById);

// Export router
module.exports = router;
