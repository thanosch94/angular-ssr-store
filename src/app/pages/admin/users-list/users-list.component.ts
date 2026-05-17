import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

type UserRole = 'admin' | 'editor' | 'viewer';
type UserStatus = 'active' | 'inactive';

interface UserItem {
  id: number;
  name: string;
  username: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastLogin: string;
  created: string;
  avatar: string;
}

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, FormsModule, ButtonModule, DropDownListModule, GridModule, TextBoxModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  searchTerm = '';
  selectedRole: UserRole | 'all' = 'all';
  selectedStatus: UserStatus | 'all' = 'all';
  filteredUsers: UserItem[] = [];
  pageSize = 10;
  selectedUserId = 1;
  readonly gridSelectionSettings: SelectionSettingsModel = { type: 'Single', mode: 'Row' };

  readonly roleOptions = [
    { text: 'Όλοι οι ρόλοι', value: 'all' },
    { text: 'Διαχειριστής', value: 'admin' },
    { text: 'Editor', value: 'editor' },
    { text: 'Viewer', value: 'viewer' },
  ];

  readonly statusOptions = [
    { text: 'Όλες οι καταστάσεις', value: 'all' },
    { text: 'Ενεργός', value: 'active' },
    { text: 'Ανενεργός', value: 'inactive' },
  ];

  readonly pageSizeOptions = [
    { text: '10', value: 10 },
    { text: '25', value: 25 },
    { text: '50', value: 50 },
  ];

  readonly users: UserItem[] = [
    { id: 1, name: 'Γιάννης Παπαδόπουλος', username: '@giannis', email: 'giannis@affiliatepro.gr', role: 'admin', status: 'active', lastLogin: '15/05/2024 - 10:30', created: '12/01/2024', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face' },
    { id: 2, name: 'Μαρία Κωνσταντίνου', username: '@maria', email: 'maria@affiliatepro.gr', role: 'editor', status: 'active', lastLogin: '15/05/2024 - 09:15', created: '18/01/2024', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face' },
    { id: 3, name: 'Νίκος Ανδρέου', username: '@nikos', email: 'nikos@affiliatepro.gr', role: 'editor', status: 'active', lastLogin: '14/05/2024 - 16:45', created: '22/01/2024', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face' },
    { id: 4, name: 'Ελένη Καραγιάννη', username: '@eleni', email: 'eleni@affiliatepro.gr', role: 'viewer', status: 'active', lastLogin: '14/05/2024 - 11:20', created: '05/02/2024', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face' },
    { id: 5, name: 'Κώστας Λάμπρου', username: '@kostas', email: 'kostas@affiliatepro.gr', role: 'editor', status: 'inactive', lastLogin: '-', created: '20/02/2024', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
    { id: 6, name: 'Σοφία Παπαδοπούλου', username: '@sofia', email: 'sofia@affiliatepro.gr', role: 'viewer', status: 'active', lastLogin: '13/05/2024 - 18:30', created: '28/02/2024', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face' },
    { id: 7, name: 'Δημήτρης Ζήσης', username: '@dimitris', email: 'dimitris@affiliatepro.gr', role: 'viewer', status: 'inactive', lastLogin: '-', created: '10/03/2024', avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=80&h=80&fit=crop&crop=face' },
    { id: 8, name: 'Ανθή Μιχαήλ', username: '@anthi', email: 'anthi@affiliatepro.gr', role: 'editor', status: 'active', lastLogin: '15/05/2024 - 08:50', created: '25/03/2024', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face' },
    { id: 9, name: 'Πέτρος Ιωάννου', username: '@petros', email: 'petros@affiliatepro.gr', role: 'viewer', status: 'active', lastLogin: '12/05/2024 - 20:10', created: '02/04/2024', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&fit=crop&crop=face' },
    { id: 10, name: 'Κατερίνα Σταύρου', username: '@katerina', email: 'katerina@affiliatepro.gr', role: 'viewer', status: 'active', lastLogin: '11/05/2024 - 22:05', created: '15/04/2024', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face' },
  ];

  constructor(private router: Router) {
    this.refreshFilteredUsers();
  }

  refreshFilteredUsers(): void {
    const search = this.searchTerm.trim().toLowerCase();

    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = !search ||
        user.name.toLowerCase().includes(search) ||
        user.username.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search);
      const matchesRole = this.selectedRole === 'all' || user.role === this.selectedRole;
      const matchesStatus = this.selectedStatus === 'all' || user.status === this.selectedStatus;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  get selectedUser(): UserItem {
    return this.users.find(user => user.id === this.selectedUserId) ?? this.users[0];
  }

  selectUser(user: UserItem): void {
    this.selectedUserId = user.id;
  }

  selectUserRecord(user: object): void {
    this.selectUser(user as UserItem);
  }

  getRoleLabel(role: UserRole): string {
    return {
      admin: 'Διαχειριστής',
      editor: 'Editor',
      viewer: 'Viewer',
    }[role];
  }

  getStatusLabel(status: UserStatus): string {
    return status === 'active' ? 'Ενεργός' : 'Ανενεργός';
  }

  editUser(user: UserItem): void {
    this.router.navigate(['/admin/users', user.id, 'edit']);
  }
}
