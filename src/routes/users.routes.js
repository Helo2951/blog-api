const {Router} = require('express');
const UsersController = require('../controllers/UsersController');

const usersRouter = Router();
const usersController = new UsersController;

usersRouter.post('/', usersController.createUsers );
usersRouter.get('/', usersController.listAllUsers);
usersRouter.get('/:id', usersController.listUserById);
usersRouter.get('/:email', usersController.listUserByEmail);
usersRouter.delete('/:id', usersController.deleteUser);
usersRouter.put('/:id', usersController.updateUser);


module.exports = usersRouter;