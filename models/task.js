const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Debe proporcionar un nombre'],
        maxlength:[20, 'No debe ser mayor a 20 caracteres'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);