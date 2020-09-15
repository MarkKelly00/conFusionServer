const express = require('express');
const bodyParser = require('body-parser');

const leadersRouter = express.Router();
leadersRouter.use(bodyParser.json());

leadersRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Sending Leaders!');
})
.post((req, res, next) => {
    res.end('Will send Leader: ' + req.body.name + ' from department: ' + req.body.department);
    //{"name": "test", "department": "testing"}
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all Leaders!');
})

leadersRouter.get('/:id', (req, res, next) => {
    res.end('Sending Leader: ' + req.params.id + ' to you!');
})
leadersRouter.post('/:id', (req, res, next) => {
    res.end('POST operation not supported on /leaders/' + req.params.id);
})
leadersRouter.put('/:id', (req, res, next) => {
    res.write('Updating Leader: ' + req.params.id + '\n');
    res.end('Will update Leader for: ' + req.body.department);
    //{"name": "test", "department": "testing"}
})
leadersRouter.delete('/:id', (req, res, next) => {
    res.end('Deleting leader: ' + req.params.id);
})

module.exports = leadersRouter;