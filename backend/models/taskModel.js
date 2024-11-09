const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  deadline: Date,
  priority: { type: String, enum: ['low', 'medium', 'high'], required: true },
});

module.exports = mongoose.model('Task', taskSchema);
