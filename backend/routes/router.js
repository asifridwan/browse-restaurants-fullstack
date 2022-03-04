import express from 'express';
import { getRestaurants, getUserID, getCollections, getSavedRestaurants, register, login, addNewCollection, renameCollection, deleteCollection, deleteRestaurant } from '../controllers/controller.js';

const router = express.Router();

router.get('/restaurants', getRestaurants);
router.get('/users/:name', getUserID);
router.get('/collections/:id', getCollections);
router.get('/saved/:id', getSavedRestaurants);

router.post('/register', register);
router.post('/login', login);
router.post('/add', addNewCollection);

router.patch('/rename/:id', renameCollection);

router.delete('/collection/:id', deleteCollection);
router.delete('/restaurant/:id', deleteRestaurant);

export default router;