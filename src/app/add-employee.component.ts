import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "add-employee",
  templateUrl: "./add-employee.component.html"
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employee = new Employee();
  }

  addNewEmployee() {
    console.log(this.employee);
    this.employeeService.addNewEmployee(this.employee).subscribe(
      (data: Employee) => {
        if (data != null) {
          alert("Employee record added successfully.");
          location.reload();
        }
      },
      err => {
        alert("something went wrong.");
        console.log(err);
      }
    );
  }
}
