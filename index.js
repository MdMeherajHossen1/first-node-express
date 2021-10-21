const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('  ohh Node Mon easy this cilly things in the right things for it for the call form it as to be the most importednt for those in kind of selly thing it choose for the main in cartain of those of the call center for those it the beo/hole sheet who said it excited to learn node my first ever Node projects')
})

const users = [
    { "id": 0, "name": "meheraj hossen", "email": "joycomputers36@gmial.com" },
    { "id": 1, "name": "meheraj hossen", "email": "joycomputers36@gmial.com" },
    { "id": 2, "name": "KARIM hossen", "email": "joycomputers36@gmial.com" },
    { "id": 3, "name": "HATIM hossen", "email": "joycomputers36@gmial.com" },
    { "id": 4, "name": "JOY hossen", "email": "joycomputers36@gmial.com" },
    { "id": 5, "name": "KOBIR hossen", "email": "joycomputers36@gmial.com" },
    { "id": 6, "name": "meheraj hossen", "email": "joycomputers36@gmial.com" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const result = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(result)
    } else {
        res.send(users)
    }
})

app.post('/users', (req, res) => {
    const newUsers = req.body;
    newUsers.id = users.length;
    users.push(newUsers)

    res.json(newUsers)

})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const index = req.params.id;
    const user = users[index];
    res.send(user)
})

app.listen(port, () => {
    console.log('listening of port', port)
})