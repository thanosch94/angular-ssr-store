import { ImportSetting } from './../../../interfaces/import-setting';
import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { BehaviorSubject } from 'rxjs';
import { ImportSettingsService } from '../../../services/import-settings.service';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ImportTypeEnum } from '../../../enum/import-type.enum';
import { DropDownListModule } from "@syncfusion/ej2-angular-dropdowns";
import { ImportTypesEnumlist } from '../../../enumlists/import-types.enumlist';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  imports: [ReactiveFormsModule, AccordionModule, TextBoxModule, ButtonModule, DropDownListModule],
  styleUrls: ['./imports.component.css'],
})
export class ImportsComponent implements OnInit {
  data = new BehaviorSubject<ImportSetting[]>([])
  form: any;
  selectedFolder?: string;
  importTypes: any[] = ImportTypesEnumlist.data
  constructor(private importsSettingsService:ImportSettingsService, private productsService:ProductsService, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getData()
  }

  initializeForm(){
    this.form = this.fb.group({
        importSettings: this.fb.array([])
    });
  }

  get importSettings(): FormArray {
    return this.form.get('importSettings') as FormArray;
  }

  getData() {
    this.importsSettingsService.GetAll().subscribe((result:ImportSetting[])=>{
      this.importSettings.clear(); // important when reloading data!
      result.forEach(item=>    this.importSettings.push(this.createImportGroup(item)));


    })
  }

  onExecuteClick(item:any){
    this.productsService.ExecuteImport(item).subscribe(res=>{
      this.getData();
    })
  }

  addImport() {
    const isAnyNew = this.importSettings.value.some((x:any) => x.Id === null);
    let newData :ImportSetting;
    newData={
        Folder: "New Import",
        Name: '',
        Title:'',
        GetUrl: '',
        DbMatchProperty: '',
        FileMatchProperty: '',
        UpdateExistingEntities: false,
        ImportType:ImportTypeEnum.Products
    }
    if(!isAnyNew) {
    this.importSettings.insert(0, this.createImportGroup(newData));

  }
  }

  createImportGroup(data: ImportSetting): FormGroup {
  return this.fb.group({
    Id: [data.Id],
    Folder: [data.Folder],
    Name: [data.Name],
    Title: [data.Title],
    GetUrl: [data.GetUrl],
    DbMatchProperty: [data.DbMatchProperty],
    FileMatchProperty: [data.FileMatchProperty],
    UpdateExistingEntities: [data.UpdateExistingEntities],
    ImportType: [data.ImportType]
  });
}
  onSave(item:any){
    if(item.value.Id==null){
      this.importsSettingsService.InsertDto(item.value).subscribe(res=>{
        this.getData();
      })
    }else{
      this.importsSettingsService.UpdateDto(item.value).subscribe(res=>{
        this.getData();
      })
    }

  }
  onRemove(item: any) {
    this.data.next(this.data.value.filter(x=>x!=item));
  }

  onFolderPicked(event: any) {
  const files: FileList = event.target.files;

  if (!files || files.length === 0) return;

  // folder name = first file's path root
  const firstPath = files[0].webkitRelativePath;
  this.selectedFolder = firstPath.split('/')[0];

  console.log("Selected folder:", this.selectedFolder);
}

  submit() {}
}
