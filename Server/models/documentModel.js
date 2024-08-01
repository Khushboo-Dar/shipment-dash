const mongoose = require('mongoose')
const documentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  
module.exports = mongoose.model('Document', documentSchema);