import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Leavehistory } from './leavehistory';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveapplicationsService {
  public leavePendApproved: Leavehistory[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  
  constructor(private http: Http, private httpClient: HttpClient) { }
  
  public getleavePendApproved() : Leavehistory[] {
    return this.leavePendApproved;
  }

  public setleavePendApproved(value: Leavehistory[])
  {
    this.leavePendApproved = value;
  }

  getLeaveApplications(id: number): Observable<Leavehistory[]> {
    let url = `http://localhost:9090/leavehistory/getByEmpId/${id}`;
    return this.http.get(url)
    .pipe(map((res) => <Leavehistory[]> res.json()));
  }

  addLeaveHistory(leaveHistory: Leavehistory): Observable<any>{
    let url = `http://localhost:9090/leavehistory/save`;
    return this.httpClient.post<Leavehistory>(url, leaveHistory, this.httpOptions).pipe(
       catchError(this.handleError)
    )
  }

  updateLeaveHistory(leaveHistory: Leavehistory): Observable<any>{
    let url = `http://localhost:9090/leavehistory/update`;
    return this.httpClient.post<Leavehistory>(url, leaveHistory, this.httpOptions).pipe(
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
