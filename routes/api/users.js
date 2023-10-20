const express = require('express');
const { validateBody, authenticate } = require('../../middlewares');
const schemas = require('../../schemas/users');
const ctrl = require('../../controllers/users');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch(
  '/',
  authenticate,
  validateBody(schemas.subscriptionShema),
  ctrl.updateSubscription
);

module.exports = router;
