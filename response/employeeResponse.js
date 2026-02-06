export const employeeResponse = (employee) => {
  if (!employee) return null;

  return {    
    eid: employee.id,
    ename: employee.ename,
    email: employee.email,
    ephone: employee.ephone
  };
};

export const employeeListResponse = (employees) => {
  return employees.map(employeeResponse);
};
