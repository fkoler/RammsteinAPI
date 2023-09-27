const members = require('./members.schema');

async function getAllMembers() {
    return await members.find({}, { '_id': 0 });
};

async function getMemberById(memberId) {
    try {
        const member = await members.findOne({ id: memberId }, { '_id': 0 }).exec();
        return member || null;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllMembers,
    getMemberById,
};
