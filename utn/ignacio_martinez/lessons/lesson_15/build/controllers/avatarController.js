"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAvatar = exports.getAvatar = void 0;
const getAvatar = function (req, res, next) {
    const avatar = {
        name: "avatarName",
        image: "avatarImage"
    };
    return res.json(avatar);
};
exports.getAvatar = getAvatar;
const postAvatar = function (req, res, next) {
    const avatar = req.body;
    if (!avatar.name || !avatar.image)
        return;
    const messege = "Avatar seved";
    return res.send(messege);
};
exports.postAvatar = postAvatar;
//module.exports {
//    getAvatar,
//    postAvatar
//}
