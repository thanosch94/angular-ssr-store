import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  activePageNumber =input<number>(1);
  totalPages =input<number>(1)
  displayPages = input<number>(5)

  pageChanged= output<number>()

  get pages(): number[] {
    const pages: number[] = [];
    let start = Math.max(1, this.activePageNumber() - Math.floor(this.displayPages() / 2));
    let end = Math.min(this.totalPages(), start + this.displayPages() - 1);

    if (end - start + 1 < this.displayPages())
      start = Math.max(1, end - this.displayPages() + 1);

    for (let i = start; i <= end; i++)
      pages.push(i);

    return pages;
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages()) return;
    this.pageChanged.emit(page);
  }

}
