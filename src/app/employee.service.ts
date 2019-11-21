import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "./employee";
import { Observable } from "rxjs";

@Injectable()
export class EmployeeService {
  baseUrl = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {}

  addNewEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl + "employee", employee);
  }

  findAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + "employees");
  }

  //   deleteEmployee(employeeId: number) {
  //       return this.http.delete
  //   }
}
