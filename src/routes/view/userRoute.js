"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();

const User = require("../../controllers/view/userController");

// ------------------------------------------
// User
// ------------------------------------------

// Login/logout:
// router.all("/login", User.login);
// router.all("/logout", User.logout);

// router.all("/", User.list);
// router.all("/create", User.create);
// router.all("/:id", User.read);
// router.all("/:id/update", User.update);
// router.all("/:id/delete", User.delete);

// Login and logout routes
// Handle login (POST for form submission)
router.route("/login").post(User.login).get(User.login);
// Handle logout (POST since it involves action)
router.post("/logout", User.logout);

// User management routes
// Get the list of users
router.get("/", User.list);
// Create a new user
router.route("/register").post(User.register).get(User.register);
// Get a specific user by ID
router.get("/:id", User.read);
// Update a specific user by ID
router.put("/:id/update", User.update);
router.patch("/:id/update", User.update);
// Delete a specific user by ID
router.delete("/:id/delete", User.delete);

module.exports = router;
