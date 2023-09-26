const fs = require('fs').promises;
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'rammstein.json');

let jsonData = null;

async function loadData() {
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        jsonData = JSON.parse(data).Members || [];
    } catch (error) {
        console.error('Error reading data from file:', error);
        jsonData = [];
    }
}

async function ensureDataLoaded() {
    if (!jsonData) {
        await loadData();
    }
}

async function getAllMembers() {
    await ensureDataLoaded();
    return jsonData;
}

async function getMemberById(memberId) {
    await ensureDataLoaded();
    return jsonData.find(member => member.id === memberId) || null;
}

module.exports = {
    getAllMembers,
    getMemberById,
};
