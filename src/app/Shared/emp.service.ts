import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import { Employee } from './employee';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  
  constructor(private http: Http, private httpClient: HttpClient) { }

  getEmp(id: number): Observable<Employee> {
    return this.makeRequest(`getById/${id}`);
  }

  getEmpMngr(id: number): Observable<Employee> {
    return this.makeRequest(`getMngrDtls/${id}`);
  }

  private makeRequest(path: string): Observable<Employee> {
    let params = new URLSearchParams();
    params.set('id', '1');
    let url = `http://localhost:9090/emp/${ path }`;
    return this.http.get(url, {search: params})
      .pipe(map((res) => <Employee> res.json()));
  }

  getRepEmps(id: number): Observable<Employee[]> {
    let url = `http://localhost:9090/emp/getRepEmps/${id}`;
    return this.http.get(url)
    .pipe(map((res) => <Employee[]> res.json()));
  }

  updateEmp(emp: Employee): Observable<any>{
    let url = `http://localhost:9090/emp/update`;
    return this.httpClient.post<Employee>(url, emp, this.httpOptions).pipe(
       catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
