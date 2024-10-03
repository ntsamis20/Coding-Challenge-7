// Task 1 Create a Department Structure
const company = {
    departments: [
        {
            departmentName: "Engineering",
            employees: [
                {
                    name: "Allen",
                    salary: 100000,
                    subordinates: [
                        {
                            name: "Bugs",
                            salary: 80000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "Daffy",
                    salary: 60000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: "Sam",
            employees: [
                {
                    name: "Tom",
                    salary: 85000,
                    subordinates: [
                        {
                            name: "Jerry",
                            salary: 70000,
                            subordinates: []
                        },
                        {
                            name: "Spike",
                            salary: 65000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "Grace",
                    salary: 85000,
                    subordinates: []
                }
            ]
        }
    ]
};

// Task 2 Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department) {
    let totalSalary = 0;
    department.employees.forEach(employee => {
        
        totalSalary += employee.salary;

        if (employee.subordinates.length > 0) {
            totalSalary += calculateEmployeeSalary(employee);
        }
    });

    return totalSalary;
}

function calculateEmployeeSalary(employee) {
    let total = 0;
    total += employee.salary;
    employee.subordinates.forEach(subordinate => {
        total += calculateEmployeeSalary(subordinate);
    });

    return total;
}

//Task 3 Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) {
    let totalSalary = 0;
    company.departments.forEach(department => {
        totalSalary += calculateDepartmentSalary(department);
    });

    return totalSalary;
}
