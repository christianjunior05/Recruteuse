import { Component, OnInit } from '@angular/core';
// import { UserService } from './user.service';
// import { User } from './user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // users: User[] = [];
  // usersToShow: User[] = [];
  // nomFilter = '';
  // prenomFilter = '';
  // emailFilter = '';
  // dateNaissanceFilter = '';
  // lieuNaissanceFilter = '';
  // lieuHabitationFilter = '';
  // profilFilter = '';
  // dateInscriptionFilter = '';
  // sortField = '';
  // sortDirection = 'asc';
  // currentPage = 1;
  // itemsPerPage = 10;
  // totalPages: number;

  constructor() {}
  //private userService: UserService
  ngOnInit(): void {
    // this.userService.getUsers().subscribe(
    //   (users: User[]) => {
    //     this.users = users;
    //     this.filterUsers();
    //   },
    //   (error: any) => console.log(error)
    // );
  }

  // filterUsers() {
  //   this.usersToShow = this.users.filter(
  //     (user) =>
  //       user.nom.toLowerCase().includes(this.nomFilter.toLowerCase()) &&
  //       user.prenom.toLowerCase().includes(this.prenomFilter.toLowerCase()) &&
  //       user.email.toLowerCase().includes(this.emailFilter.toLowerCase()) &&
  //       user.dateNaissance
  //         .toLowerCase()
  //         .includes(this.dateNaissanceFilter.toLowerCase()) &&
  //       user.lieuNaissance
  //         .toLowerCase()
  //         .includes(this.lieuNaissanceFilter.toLowerCase()) &&
  //       user.lieuHabitation
  //         .toLowerCase()
  //         .includes(this.lieuHabitationFilter.toLowerCase()) &&
  //       user.profil.toLowerCase().includes(this.profilFilter.toLowerCase()) &&
  //       user.dateInscription
  //         .toLowerCase()
  //         .includes(this.dateInscriptionFilter.toLowerCase())
  //   );
  //   this.sortUsers();
  //   this.currentPage = 1;
  // }

  // sortUsers() {
  //   if (this.sortField) {
  //     this.usersToShow.sort((a: User, b: User) => {
  //       const aValue = a[this.sortField];
  //       const bValue = b[this.sortField];
  //       if (aValue < bValue) {
  //         return this.sortDirection === 'asc' ? -1 : 1;
  //       } else if (aValue > bValue) {
  //         return this.sortDirection === 'asc' ? 1 : -1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //   }
  // }

  // sort(field: string) {
  //   if (field === this.sortField) {
  //     this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  //   } else {
  //     this.sortField = field;
  //     this.sortDirection = 'asc';
  //   }
  //   this.sortUsers();
  // }

  // prevPage() {
  //   this.currentPage--;
  //   this.usersToShow = this.getUsersToShow();
  // }

  // nextPage() {
  //   this.currentPage++;
  //   this.usersToShow = this.getUsersToShow();
  // }

  // getUsersToShow() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   return this.usersToShow.slice(startIndex, endIndex);
  // }

  // edit(user: User) {
  //   // TODO: Implement edit functionality
  // }

  // delete(user: User) {
  //   // TODO: Implement delete functionality
  // }
}
