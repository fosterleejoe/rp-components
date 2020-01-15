/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Directive, ViewContainerRef, AfterViewInit} from '@angular/core';

import {MatBannerService} from './banner.service';

@Directive({
  selector: '[matBanner]'
})
export class MatBannerDirective implements AfterViewInit {
  constructor(
    public viewRef: ViewContainerRef,
    private _service: MatBannerService,
  ) {}

  ngAfterViewInit() {
    this._service.container = this;
  }
}
