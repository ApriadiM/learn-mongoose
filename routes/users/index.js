const router = require("express").Router();

const {
    getAll,
    // getById,
    // deleteOne,
    addOne,
    //updateOne
} = require("./controller");

router.get("/", getAll);
router.post("/", addOne);
// router.get("/:id", getById);
// router.delete("/:id", deleteOne);
// router.put("/:id", updateOne);

module.exports = router;