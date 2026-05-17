import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { CategoriesService } from '../../../services/categories.service';
import { Product } from '../../../interfaces/product';
import { Category } from '../../../interfaces/category';
import { Guid } from 'guid-typescript';
import { CommonModule } from '@angular/common';
import { TextBoxModule, NumericTextBoxModule, TextAreaModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { HtmlEditorService, ImageService, LinkService, QuickToolbarService, RichTextEditorModule, ToolbarService, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { TabModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TextBoxModule,
    NumericTextBoxModule,
    TextAreaModule,
    CheckBoxModule,
    ButtonModule,
    RichTextEditorModule,
    TabModule,
  ],
      providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService],

})

export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  product: Product | null = null;
  categories: Category[] = [];
  isLoading = false;
  isSaving = false;
 public tools: ToolbarSettingsModel = {
    type: 'Expand' as ToolbarSettingsModel['type'],
    items: ['Formats', '|', 'Bold', 'Italic', 'Underline', '|', 'OrderedList', 'UnorderedList', '|', 'Indent',
      'Outdent', '|', 'CreateLink', 'Image', '|', 'Blockquote', 'SourceCode', '|', 'ClearFormat'],
    };
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {
    this.productForm = this.fb.group({
      Name: ['', Validators.required],
      Sku: ['', Validators.required],
      AffiliateId: [''],
      Description: [''],
      Price: [0, [Validators.required, Validators.min(0)]],
      DiscountPrice: [0],
      FeatureImageUrl: ['', Validators.required],
      Images: this.fb.array([]),
      CategoryIds: this.fb.array([]),
      AffiliateUrl: [''],
      updateName: [true],
      updateSku: [true],
      updateAffiliateId: [true],
      updateDescription: [true],
      updatePrice: [true],
      updateDiscountPrice: [true],
      updateFeatureImageUrl: [true],
      updateImages: [true],
      updateAffiliateUrl: [true],
      IsFavorite: [false]
    });
  }

  ngOnInit() {
    this.loadCategories();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduct(Guid.parse(id));
    }
  }

  get images(): FormArray {
    return this.productForm.get('Images') as FormArray;
  }

  get categoryIds(): FormArray {
    return this.productForm.get('CategoryIds') as FormArray;
  }

  isCategorySelected(categoryId: string): boolean {
    return this.categoryIds.value.includes(categoryId);
  }

  onCategoryChange(categoryId: string, checked: boolean) {
    if (checked) {
      this.categoryIds.push(this.fb.control(categoryId));
    } else {
      const index = this.categoryIds.value.indexOf(categoryId);
      if (index >= 0) {
        this.categoryIds.removeAt(index);
      }
    }
  }

  get selectedCategories(): Category[] {
    return this.categories.filter(category => this.isCategorySelected(category.Id.toString()));
  }

  get productLink(): string {
    const sku = this.productForm.get('Sku')?.value || this.product?.Sku || 'product';
    const slug = String(this.productForm.get('Name')?.value || this.product?.Name || sku)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    return `https://yoursite.gr/go/product/${slug || sku}`;
  }

  removeCategory(categoryId: string) {
    this.onCategoryChange(categoryId, false);
  }

  loadCategories() {
    this.categoriesService.GetAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  loadProduct(id: Guid) {
    this.isLoading = true;
    this.productsService.GetById(id).subscribe({
      next: (product) => {
        this.product = product;
        this.productForm.patchValue({
          Name: product.Name,
          Sku: product.Sku,
          AffiliateId: product.AffiliateId,
          Description: product.Description,
          Price: product.Price,
          DiscountPrice: product.DiscountPrice,
          FeatureImageUrl: product.FeatureImageUrl,
          IsFavorite: product.IsFavorite,
          AffiliateUrl: product.AffiliateUrl
        });
        this.setImages(product.Images || []);
        this.setCategoryIds(product.CategoryIds || []);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading product', err);
        this.isLoading = false;
      }
    });
  }

  setImages(images: string[]) {
    const imagesArray = this.images;
    imagesArray.clear();
    images.forEach(image => {
      imagesArray.push(this.fb.control(image));
    });
  }

  setCategoryIds(categoryIds: Guid[] | undefined) {
    const categoryIdsArray = this.categoryIds;
    categoryIdsArray.clear();
    if (categoryIds && categoryIds.length > 0) {
      categoryIds.forEach(categoryId => {
        categoryIdsArray.push(this.fb.control(categoryId.toString()));
      });
    }
  }

  onSubmit() {
    if (this.productForm.valid && this.product) {
      this.isSaving = true;
      const formValue = this.productForm.value;
      const updatedProduct: Product = { ...this.product };

      if (formValue.updateName) updatedProduct.Name = formValue.Name;
      if (formValue.updateSku) updatedProduct.Sku = formValue.Sku;
      if (formValue.updateAffiliateId) updatedProduct.AffiliateId = formValue.AffiliateId;
      if (formValue.updateDescription) updatedProduct.Description = formValue.Description;
      if (formValue.updatePrice) updatedProduct.Price = formValue.Price;
      if (formValue.updateDiscountPrice) updatedProduct.DiscountPrice = formValue.DiscountPrice;
      if (formValue.updateFeatureImageUrl) updatedProduct.FeatureImageUrl = formValue.FeatureImageUrl;
      if (formValue.updateImages) updatedProduct.Images = this.images.value;
      updatedProduct.CategoryIds = this.categoryIds.value.map((id: string) => Guid.parse(id));
      updatedProduct.IsFavorite = formValue.IsFavorite;
      if (formValue.updateAffiliateUrl) updatedProduct.AffiliateUrl = formValue.AffiliateUrl;

      this.productsService.Update(updatedProduct).subscribe({
        next: () => {
          this.isSaving = false;
          this.router.navigate(['/admin/products']);
        },
        error: (err) => {
          console.error('Error saving product', err);
          this.isSaving = false;
        }
      });
    }
  }

  onCancel() {
    this.router.navigate(['/admin/products']);
  }

  addImage() {
    this.images.push(this.fb.control(''));
  }

  removeImage(index: number) {
    this.images.removeAt(index);
  }
}
