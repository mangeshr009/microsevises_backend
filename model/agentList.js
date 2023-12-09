const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const agentListSchema = Schema({
    agentName: {
        type: String
    },
    Mobile: {
        type: String
    },
    Password: {
        type: String
    },
    Collection: {
        type: String
    },
    TotalDays: {
        type: String
    },
    UserId: {
        type: String
    },
    Commision: {
        type: String
    },
    agentID: {
        type: String
    },
    agentStatus:{
        type:Boolean
    }
    
});

module.exports = model('agentList', agentListSchema);
