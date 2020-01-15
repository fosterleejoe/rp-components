/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

/**
 * Animations used by the Material snack bar.
 * @docs-private
 */
export const bannerAnimation: {
  readonly bannerState: AnimationTriggerMetadata;
} = {
  /** Animation that shows and hides a snack bar. */
  bannerState: trigger('state', [
    state('void, exit', style({
      opacity: '0',
      overflow: 'hidden',
      height: '0px',
      paddingTop: 0,
      paddingBottom: 0,
    })),
    state('enter', style({
      overflow: 'hidden',
      height: '*',
    })),
    transition('* => enter', animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    transition('* => void, * => exit', animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ])
};
