/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {AnimationEvent} from '@angular/animations';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import {Subject} from 'rxjs';

import {bannerAnimation} from './banner.animation';

export interface MatBannerOptions {
  message: string;
  actions?: [string, string];
  icon?: string;
}

@Component({
  moduleId: module.id,
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [bannerAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MatBannerComponent {
  private _action: string;
  private _isOpened = false;
  actionsArray: string[] = ['Cancel'];
  message: string;
  actions?: [string, string];
  icon?: string;
  close: Subject<string> = new Subject();

  get show() {
    return this._isOpened;
  }

  set show(value: boolean) {
    this._isOpened = value;
  }


  onClose(action: string): void {
    this.show = false;
    this._action = action;
  }

  open(options: MatBannerOptions): MatBannerComponent {
    this.message = options.message;
    this.actions = options.actions;
    this.icon = options.icon;
    this.show = true;

    return this;
  }

  animationDone(event: AnimationEvent) {
    if (event.toState === 'exit') {
      this.close.next(this._action);
    }
  }
}
