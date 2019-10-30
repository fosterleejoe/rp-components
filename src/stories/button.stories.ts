// tslint:disable-next-line:require-license-banner
import { moduleMetadata } from '@storybook/angular';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { HttpClientModule } from '@angular/common/http';
import { MatButton } from '../material/button/button';
import { MatRippleModule } from '../material/core/ripple'
// @ts-ignore


// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: 'Button',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [MatButton],
        imports: [MatRippleModule]
      })
    ],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': {
      id: '5db527b19b2637f75e430584',
      // versionFilePath: '../app/components/button/versionFile.json',
      componentPath: '../material/button/button'
    }
  }
};

export const simpleButton = () => ({
  template: '<button mat-button>Text</button>',
  props: {
    textKnob: text('text', 'TEXT'),
    // iconKnob: select('icon', ['none', 'chevron-right'], 'none'),
    disabledKnob: boolean('disabled', false),
    // actionProp: () => action('Button clicked')('Click')
  }
});

simpleButton.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: '../app/components/button/versionFile.json' },
    // docs: { page: buttonDocs }
  }
};
