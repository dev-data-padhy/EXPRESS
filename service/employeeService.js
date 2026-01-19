import asyncHandler from "express-async-handler";
import Employee from "../model/employeeModel.js";
import { executeQuery } from "../utils/queryHelper.js";
import { employeeListResponse, employeeResponse } from "../response/employeeResponse.js";

const getEmployees = asyncHandler(async (req, res) => {
  const result = await executeQuery({
    model: Employee,
    req,
    searchableFields: ["ename", "email", "ephone"],
    baseFilter: {
      $or: [{ deleted: false }, { deleted: { $exists: false } }],
    },
  });

  res.status(200).json({
    data: employeeListResponse(result.data),
    ...result,    
  });
});

const getOneEmployee = asyncHandler(async (req, res) => {
    const emp=await Employee.findById(req.params.id);
    res.status(200).json(employeeResponse(emp));

});

const createEmployee = asyncHandler(async (req, res) => {
    const {ename, epassword, ephone, email} = req.body;
    await Employee.create({ename, epassword, ephone, email});
    res.status(201).json("Employee created successfully");
});

const updateEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        { $set: req.body },
        {
          new: true,
          runValidators: true
      }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      data: employeeResponse(updatedEmployee)
    });  
});


const deleteEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;

    const deletedEmployee = await Employee.findByIdAndUpdate(
      id,
      { $set: { deleted: true } },
      { new: true }
    );

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee deleted successfully (soft delete)",
      data: deletedEmployee
    }); 
    
});


export {
    getEmployees,
    getOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
};
