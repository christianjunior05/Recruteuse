import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    modalVisible = false;
  
    openModal() {
      this.modalVisible = true;
    }
  
    closeModal() {
      this.modalVisible = false;
    }

}
