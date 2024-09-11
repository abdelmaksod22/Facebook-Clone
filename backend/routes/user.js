const express = require("express");

const {
  register,
  activateAccount,
  login,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
  getProfile,
  updateProfilePicture,
  updateCover,
  updateDetails,
  addFriend,
  cancelRequest,
  follow,
  unfollow,
  acceptRequest,
  unfriend,
  deleteRequest,
  search,
  addToSearchHistory,
  getSearchHistory,
  removeFromSearch,
  getFriendsPageInfos,
} = require("../controllers/user");
const { authUser } = require("../middlwares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/activate", authUser, activateAccount);
router.post("/sendVerification", authUser, sendVerification);
router.post("/sendResetPasswordCode", sendResetPasswordCode);
router.post("/validateResetCode", validateResetCode);

router.post("/findUser", findUser);
router.get("/getProfile/:username", authUser, getProfile);
router.get("/getFriendsPageInfos", authUser, getFriendsPageInfos);

router.post("/changePassword", changePassword);
router.put("/updateProfilePicture", authUser, updateProfilePicture);
router.put("/updateCover", authUser, updateCover);
router.put("/updateDetails", authUser, updateDetails);

router.put("/addFriend/:id", authUser, addFriend);
router.put("/follow/:id", authUser, follow);

router.put("/cancelRequest/:id", authUser, cancelRequest);
router.put("/acceptRequest/:id", authUser, acceptRequest);
router.put("/deleteRequest/:id", authUser, deleteRequest);

router.put("/unfriend/:id", authUser, unfriend);
router.put("/unfollow/:id", authUser, unfollow);

router.post("/search/:searchTerm", authUser, search);
router.put("/addToSearchHistory", authUser, addToSearchHistory);
router.get("/getSearchHistory", authUser, getSearchHistory);
router.put("/removeFromSearch", authUser, removeFromSearch);

module.exports = router;
