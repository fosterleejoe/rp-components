/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatCommonModule,
} from '@angular/material/core';
import {
  MatButtonModule,
} from '@angular/material/button';
import {
  MatIconModule,
} from '@angular/material/icon';

import {MatBannerComponent} from './banner.component';
import {MatBannerService} from './banner.service';
import {MatBannerDirective} from './banner.directive';

@NgModule({
  declarations: [MatBannerComponent, MatBannerDirective],
  exports: [MatBannerDirective],
  providers: [MatBannerService],
  entryComponents: [MatBannerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCommonModule,
    MatIconModule,
  ]
})
export class BannerModule { }
