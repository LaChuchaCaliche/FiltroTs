"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _1 = require("./");
const router = (0, express_1.Router)();
router.use('/users', _1.userRouter);
router.use('/products', _1.productRouter);
exports.default = router;
