import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  getSearchUser,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);
router.get("/:userName/searchUser", verifyToken, getSearchUser);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
