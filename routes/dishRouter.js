const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res, next) => {
    res.end('Will send all the dishes to you!');
})

.post((req, res, next) => {
    res.end('Will send the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})

.delete((req, res, next) => {
    res.end('Deleting all the dishes!');
})

dishRouter.get('/:id', (req, res, next) => {
    res.end('Will send details of the dish: ' + req.params.id + ' to you!');
})

dishRouter.post('/:id', (req, res, next) => {
    res.end('POST operation not supported on /dishes/' + req.params.id);
})

dishRouter.put('/:id', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.id + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

dishRouter.delete('/:id', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.id);
})

module.exports = dishRouter;