import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { FiiFormField } from '../_models/fii-form-field';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-see-form',
  templateUrl: './see-form.component.html',
  styleUrls: ['./see-form.component.css']
})
export class SeeFormComponent implements OnInit {
  reason: string;
  fields: FiiFormField[];
  loading: boolean;

  @Input() currentUserMail: string;

  constructor(private router: Router,
    private userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit() {
    if (this.currentUserMail) {
      this.loading = true;
      this.userService.getForm(this.currentUserMail).subscribe(
        data => {
          this.fields = JSON.parse(JSON.parse(JSON.stringify(data))._body).blobObject.form;
        },
        error => {
        });
      this.loading = false;
    }
  }

  saveFile(src, filename) {
    const a = <HTMLAnchorElement>document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    const blob = this.b64toBlob(src.split(',')[1], src.split(';')[0].split(':')[1]);
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    window.open(url);
  }
  noReason(reason) {
    if (reason !== '') {
      return false;
    }
    return true;
  }
  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    const sliceSize = 512;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  openDialog(i) {
    const dialogRef = this.dialog.open(DialogReasonComponent, {
      data: { reason: this.reason }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reason = result;
      this.fields[i].reason = this.reason;
      this.fields[i].checked = false;
    });
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  zoom(src) {
    const modal = document.getElementById('myModal');
    const modalImg = <HTMLImageElement>document.getElementById('img01');
    modal.style.display = 'block';
    modalImg.src = src;
  }

  onSubmit() {
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].reason !== '') {
        this.fields[i].value = '';
      }
    }
    this.userService.sendForm(this.currentUserMail, this.fields, false, false)
      .subscribe(
      data => {
        alert(data);
      },
      error => {
        alert(error);
      });

  }

  onApprove() {
    this.userService.sendForm(this.currentUserMail, this.fields, true, true)
    .subscribe(
    data => {
      alert(data);
    },
    error => {
      alert(error);
    });
  }


}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-reason-dialog',
  templateUrl: 'dialog-reason.html',
})
export class DialogReasonComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogReasonComponent>,
    public dialModalRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changePosition() {
    this.dialModalRef.updatePosition({ top: '250px', left: '250px' });
  }

}
