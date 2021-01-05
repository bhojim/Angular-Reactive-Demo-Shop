import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../products/shared/ui.service';
import { SortPipe } from '../../products/shared/sort.pipe';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-shop-sorting',
  templateUrl: './shop-sorting.component.html',
  styleUrls: ['./shop-sorting.component.scss']
})
export class ShopSortingComponent implements OnInit {
  @Input() public products: Product[];
  @Output() sortingChanged: EventEmitter<any> = new EventEmitter();

  constructor(
    private sortPipe: SortPipe,
    public uiService: UiService
  ) { }

  ngOnInit() {

  }

  onSort(sortBy: string) {
    this.sortPipe.transform(
      this.products,
      sortBy.replace(':reverse', ''),
      sortBy.endsWith(':reverse')
    );
    this.uiService.sorting$.next(sortBy);
    this.sortingChanged.emit(this.products);
    // this.setPage(1);
  }
}
