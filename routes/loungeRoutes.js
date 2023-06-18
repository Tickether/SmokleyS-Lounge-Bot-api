import express from 'express';
import { createLoungeMember, updateLoungeMember, getLoungeMember, getLoungeMembers } from '../controllers/loungeControl.js';
const router = express.Router();

//CREATE
router.post('/', createLoungeMember);

//UPDATE
router.put('/:discordID', updateLoungeMember);

//GET
router.get('/:discordID', getLoungeMember);

//GET ALL
router.get('/', getLoungeMembers);

export default router