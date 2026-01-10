const getEmployees = (req, res) => {
    res.json({ message: "List of employees" });
};

const getOneEmployee = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Employee with id ${id}` });
};

const createEmployee = (req, res) => {
    res.status(201).json({ message: "Employee created successfully" });
};

const updateEmployee = (req, res) => {
   
    res.json({ message: `Employee updated successfully` });
};

const deleteEmployee = (req, res) => {
    
    res.json({ message: `Employee deleted successfully` });
};

export {
    getEmployees,
    getOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
};
