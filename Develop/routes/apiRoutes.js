
const tableData = require('../data/tableData');
const waitListData = require('../data/waitinglistData');

// get route

// post route
module.exports = (app) => {
    app.get('/api/notes', (req,res) => res.json())
    app.post('/api/notes')
}