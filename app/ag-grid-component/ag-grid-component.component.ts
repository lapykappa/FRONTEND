import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ComputerDetailsService } from '../services/computer_details_service';
import { ComputerDetails } from '../models/computer_details';

@Component({
  selector: 'app-ag-grid-component',
  templateUrl: './ag-grid-component.component.html',
  styleUrls: ['./ag-grid-component.component.scss']
})
export default class AgGridComponentComponent implements OnInit {
  selectedComputers: ComputerDetails[] = [];

  @Output() onSelectComputer = new EventEmitter<ComputerDetails[]>();

  gridOptions: GridOptions = {
    columnDefs: [
      { field: 'computerName', headerName: 'Computer Name', resizable: true, checkboxSelection: true, headerCheckboxSelection: true, sortable: true,filter: true},
      { field: 'address', headerName: 'Address', resizable: true, sortable: true},
      { field: 'comment', headerName: 'Comment', resizable: true,sortable: true },
    ],
    rowSelection: 'multiple',
    suppressCellFocus: true,
    suppressRowDeselection: true,
    
    onRowClicked: event => {
      this.selectOrDeselectComputer(event.data);
      this.onSelectComputer.emit(this.selectedComputers);
    },
    onGridReady: params => {
      this.service.getComputerDetails().subscribe((data: ComputerDetails[]) => {
        params.api.setRowData(data);
      });
    },
  };

  constructor(private service: ComputerDetailsService) { }

  ngOnInit(): void {}

  selectOrDeselectComputer(computer: ComputerDetails): void {
    const index = this.selectedComputers.findIndex(c => c.tblComputerId === computer.tblComputerId);
    if (index >= 0) {
      this.selectedComputers.splice(index, 1);
    } else {
      this.selectedComputers.push(computer);
    }
    console.log(this.selectedComputers);
  }
}
