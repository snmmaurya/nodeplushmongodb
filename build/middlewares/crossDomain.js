"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `localhost`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
};
exports.default = CrossDomain;
