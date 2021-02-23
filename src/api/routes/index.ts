import express, { Router } from "express";

const router: Router = express.Router();

/**
 * Route: api/
 *
 * Gateway version endpoint.
 * Only add to this if you are creating a new api version
 *
 */

router.use("/v1", require("./endpoints"));
router.use("/v2", require("./endpoints"));

module.exports = router;
