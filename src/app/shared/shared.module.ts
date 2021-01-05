import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { PriceComponent } from './price/price.component';
import { PageTitleComponent } from '../core/page-title/page-title.component';
import { ShopSortingComponent } from '../core/shop-sorting/shop-sorting.component';

@NgModule({
    declarations: [
        PriceComponent,
        PageTitleComponent,
        ShopSortingComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
    ],
    exports: [
        PriceComponent,
        PageTitleComponent,
        ShopSortingComponent,
        CommonModule,
        AppRoutingModule,
        FormsModule
    ]
})
export class SharedModule {}
