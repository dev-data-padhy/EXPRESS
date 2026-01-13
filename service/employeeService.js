import Employee from "../model/employeeModel.js";

const getEmployees = async (req, res) => {
    try {
        const emp=await Employee.find({ $or: [
        { deleted: false },
        { deleted: { $exists: false } }
      ] });
        res.status(200).json(emp);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getOneEmployee = async (req, res) => {
     try {
        const emp=await Employee.findById(req.params.id);
        res.status(200).json(emp);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createEmployee = async (req, res) => {
    const {ename, epassword, ephone, email} = req.body;
    try {
        await Employee.create({ename, epassword, ephone, email});
        res.status(201).json("Employee created successfully");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;

  try {
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
      data: updatedEmployee
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
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
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export {
    getEmployees,
    getOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
};
