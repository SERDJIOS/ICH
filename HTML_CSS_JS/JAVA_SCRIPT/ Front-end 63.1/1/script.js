// Увеличьте зарплату каждого сотрудника на 10%.
// Найдите сумму зарплат всех сотрудников.
// Добавьте нового сотрудника: { name: "Diana", position: "QA Engineer", salary: 75000 }.
// Отдельно вытащить всех сотрудников чья зарплата больше 80000
// Посчитать общие расходы на компании на затраты сотрудников

const company = {
    name: "TechCorp",
    employees: [
      { name: "Alice", position: "Developer", salary: 80000 },
      { name: "Bob", position: "Manager", salary: 90000 },
      { name: "Charlie", position: "Designer", salary: 70000 }
    ]
  };
  
  // Увеличить зарплату на 10%
  company.employees.forEach(employee => {
    employee.salary *= 1.1;
  });
  
  // Найти сумму зарплат
  const totalSalary = company.employees.reduce((sum, employee) => sum + employee.salary, 0);
  console.log("Сумма зарплат всех сотрудников:", totalSalary);
  
  // Добавить нового сотрудника
  company.employees.push({ name: "Diana", position: "QA Engineer", salary: 75000 });
  
  // Найти сотрудников с зарплатой больше 80000
  const highEarners = company.employees.filter(employee => employee.salary > 80000);
  console.log("Сотрудники с зарплатой больше 80000:", highEarners);
  
  // Посчитать общие расходы на сотрудников
  const totalExpenses = company.employees.reduce((sum, employee) => sum + employee.salary, 0);
  console.log("Общие расходы на сотрудников:", totalExpenses);