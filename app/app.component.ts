

import { OnInit } from '@angular/core';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ComputerDetailsService } from './services/computer_details_service';
import { ComputerDetails } from './models/computer_details';
import { Observable } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CIS 2 demo';
  isComputerSelected = false;
  selectedComputers: ComputerDetails[] = [];
  computers: ComputerDetails[] = [];

  constructor(private service: ComputerDetailsService) { }

  ngOnInit(): void {
    this.refreshData();
  }

  onSelectedComputersChanged(computers: ComputerDetails[]): void {
    this.selectedComputers = computers;
    this.isComputerSelected = this.selectedComputers.length > 0;
  }

  saveChanges(): void {
    this.selectedComputers.forEach(selectedComputer => {
      if (selectedComputer && selectedComputer.tblComputerId) {
        console.log('Selected computer ID:', selectedComputer.tblComputerId);
        this.service.updateQlausTaskId(selectedComputer.tblComputerId, selectedComputer.qlausTaskId).subscribe(() => {
          console.log('Qlaus Task ID updated in database');
          this.refreshData();
        });
        this.service.updateJobset(selectedComputer.tblComputerId, selectedComputer.jobsetName).subscribe(() => {
          console.log('Jobset Name updated in database');
          this.refreshData();
        });
      } else {
        console.error('No computer selected or selected computer has no ID');
      }
    });
  }
  
  refreshData(): void {
    this.service.getComputerDetails().subscribe((data: ComputerDetails[]) => {
      this.computers = data;
      this.selectedComputers = this.selectedComputers.map(selectedComputer => {
        return this.computers.find(c => c.tblComputerId == selectedComputer.tblComputerId) || selectedComputer;
      });
      this.isComputerSelected = this.selectedComputers.length > 0;
    });
  }
  

  runPowerShellScript() {
    this.service.runPowerShellScript();
  }
}
