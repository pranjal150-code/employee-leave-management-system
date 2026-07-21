const express = require("express");
const Leave = require("../models/Leave");

const router = express.Router();

// Apply Leave
router.post("/", async (req, res) => {
  try {
    const leave = new Leave(req.body);

    await leave.save();

    res.status(201).json({
      message: "Leave Applied Successfully",
      leave,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Leaves
router.get("/", async (req, res) => {
  try {
    const leaves = await Leave.find().populate("employeeId");

    res.json(leaves);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Approve Leave
router.put("/:id/approve", async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      {
        status: "Approved",
      },
      {
        new: true,
      }
    );

    res.json(leave);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Reject Leave
router.put("/:id/reject", async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      {
        status: "Rejected",
      },
      {
        new: true,
      }
    );

    res.json(leave);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;