import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorsComponent } from '../../shared/components/errors/errors.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(public dialog: MatDialog) {}

  openDialog(message): void {
    this.dialog.open(ErrorsComponent, {
      width: '300px',
      data: message,
    });
  }
}
