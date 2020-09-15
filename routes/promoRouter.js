const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all promotions your way!');
})
.post((req, res, next) => {
    res.end('Will send promotion: ' + req.body.name + ' with details: ' + req.body.promotion);
    //{"name": "test", "promotion": "test promo"}
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions!');
})

promoRouter.get('/:id', (req, res, next) => {
    res.end('Will send details about the promo: ' + req.params.id + ' to you!');
})
promoRouter.post('/:id', (req, res, next) => {
    res.end('POST operation not supported on /promotions/' + req.params.id);
})
promoRouter.put('/:id', (req, res, next) => {
    res.write('Updating promotion: ' + req.params.id + '\n');
    res.end('Will update promotion: ' + req.body.name + ' with promotion: ' + req.body.promotion);
    //{"name": "test", "promotion": "test promo"}
})
promoRouter.delete('/:id', (req, res, next) => {
    res.end('Deleting promotion: ' + req.params.id);
})

module.exports = promoRouter;