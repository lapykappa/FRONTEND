import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputerDetails } from '../models/computer_details';

@Injectable({
  providedIn: 'root'
})
export class ComputerDetailsService {
  private apiUrl = 'https://localhost:7279/ComputerDetails';

  constructor(private httpClient: HttpClient) { }

  getComputerDetails(): Observable<ComputerDetails[]> {
    return this.httpClient.get<ComputerDetails[]>(this.apiUrl);
  }

  updateQlausTaskId(computerId: number, newQlausTaskId: number): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${computerId}/QlausTaskId/${newQlausTaskId}`, null, { responseType: 'text' });
  }
  
  updateJobset(computerId: number, newJobsetName: string): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${computerId}/Jobset/${newJobsetName}`, null, { responseType: 'text' });
  }
  
  runPowerShellScript() {
    this.httpClient.post('https://localhost:7279/ComputerDetails/RunPowerShellScript', {}).subscribe();
  }
  
}  
