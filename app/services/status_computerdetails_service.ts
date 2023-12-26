import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StatusComputerDetails } from '../models/status_computerdetails';

@Injectable({
  providedIn: 'root'
})
export class StatusComputerDetailsService {
  private apiUrl = 'https://localhost:7279/StatusComputerDetails';

  constructor(private http: HttpClient) { }

  getStatusComputerDetails(id: number): Observable<StatusComputerDetails> {
    return this.http.get<StatusComputerDetails>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  getAllStatusComputerDetails(): Observable<StatusComputerDetails[]> {
    return this.http.get<StatusComputerDetails[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
}

