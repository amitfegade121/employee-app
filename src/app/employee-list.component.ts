import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "employee-list",
  templateUrl: "./employee-list.component.html"
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.findAllEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
