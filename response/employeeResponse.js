export const employeeResponse = (employee) => {
  if (!employee) return null;

  return {    
    ename: employee.ename,
    email: employee.email,
    ephone: employee.ephone
  };
};

export const employeeListResponse = (employees) => {
  return employees.map(employeeResponse);
};
