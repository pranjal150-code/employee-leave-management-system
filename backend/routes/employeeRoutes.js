const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

// Get All Employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add Employee
router.post("/", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();

    res.status(201).json({
      message: "Employee Added Successfully",
      employee,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Single Employee
router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee Not Found",
      });
    }

    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Employee
router.put("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json({
      message: "Employee Updated",
      employee,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete Employee
router.delete("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.json({
      message: "Employee Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;