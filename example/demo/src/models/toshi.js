/**
 * XadillaX created at 2016-04-19 16:23:48 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const Akyuu = require("../../../../");
const Toshihiko = Akyuu.get().connection.get("main");

const Toshi = Toshihiko.define("toshi", [
    { name: "id", type: Toshihiko.TYPE.String, primaryKey: true }
]);

module.exports = Toshi;
