import { Component, OnInit } from '@angular/core';

export interface Service {
  id: number;
  client: string;
  dueDate: Date;
  serviced: boolean
}

const SERVICE_DATA: Service[] = [
  { id: 1, client: 'Rick & Morty', dueDate: new Date(2020, 3, 30), serviced: false },
  { id: 2, client: 'Archer', dueDate: new Date(2020, 3, 30), serviced: false },
  { id: 3, client: 'Spongebob', dueDate: new Date(2020, 3, 30), serviced: false },
];

@Component({
  selector: 'app-due-services',
  templateUrl: './due-services.component.html',
  styleUrls: ['./due-services.component.sass']
})
export class DueServicesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'client', 'dueDate', 'serviced'];
  dataSource = SERVICE_DATA;

  constructor() { }

  ngOnInit() {
  }

}
