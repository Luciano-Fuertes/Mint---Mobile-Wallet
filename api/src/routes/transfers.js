const { Router } = require("express");
const { CreateTransfers, getTransfers } = require("./Controllers/Transfers.js");

const router = Router();

router.post("/create", CreateTransfers);
router.get("/get", getTransfers);

module.exports = router;
