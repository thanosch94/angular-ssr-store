import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  imports: [AsyncPipe, AccordionModule, TextBoxModule, ButtonModule],
  styleUrls: ['./imports.component.css'],
})
export class ImportsComponent implements OnInit {
  data = new BehaviorSubject<any[]>([
    {
      Id: 1,
      FolderToSave: 'C://LocalDisk/Temp/',
      Name: 'file1.csv',
      GetUrl: 'http://example.com/file1.csv',
    },
    {
      Id: 2,
      FolderToSave: 'C://LocalDisk/Temp/',
      Name: 'file2.csv',
      GetUrl: 'http://example.com/file2.csv',
    },
    {
      Id: 3,
      FolderToSave: 'C://LocalDisk/Temp/',
      Name: 'file3.csv',
      GetUrl: 'http://example.com/file3.csv',
    },
  ]);

  constructor() {}

  ngOnInit(): void {}

  addImport() {
    const current = this.data.value;
    const isAnyNew = current.some(x => x.Id === null);
    if(!isAnyNew) {
    this.data.next([
      {
        Id: null,
        FolderToSave: "New Import",
        Name: '',
        GetUrl: '',
      },
      ...this.data.value,

    ]);
  }
  }

  onSave(item:any){
    if(item.Id==null){

    }

  }
  onRemove(item: any) {
    this.data.next(this.data.value.filter(x=>x!=item));
  }

  submit() {}
}
