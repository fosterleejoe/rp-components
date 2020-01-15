/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {
  Injectable,
  ComponentFactory,
  ComponentFactoryResolver,
  OnDestroy,
  ComponentRef,
} from '@angular/core';

import {take} from 'rxjs/operators';

import {MatBannerComponent, MatBannerOptions} from './banner.component';
import {MatBannerDirective} from './banner.directive';

@Injectable()
export class MatBannerService implements OnDestroy {
  container: MatBannerDirective;
  componentRef: ComponentRef<MatBannerComponent>;

  constructor(private _resolver: ComponentFactoryResolver) {}

  createComponent() {
    if (this.container) {this.container.viewRef.clear(); }
    const factory: ComponentFactory<MatBannerComponent> =
      this._resolver.resolveComponentFactory(MatBannerComponent);
    this.componentRef = this.container.viewRef.createComponent(factory);
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  // Display a message with at least one action. Returned observable will
  // emit the index of the selected action once the user clicks a button.
  open(options: MatBannerOptions) {
    this.createComponent();
    if (this.componentRef && this.componentRef.instance) {
      this.componentRef.instance.close.pipe(take(1)).subscribe(() => this.componentRef.destroy());
    }
    return this.componentRef.instance.open(options);
  }
}
