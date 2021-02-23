import express, { Router } from "express";

const router: Router = express.Router();

/**
 * Route: api/v1
 *
 * Put gateway route to any other services for v1 API here and
 * bring in their
 *
 * Example:
 * /auth
 * /serviceA
 * /serviceB
 *
 */

router.use("/todos", require("./todos"));
// router.use("serviceA/", require("./serviceA"));

module.exports = router;
