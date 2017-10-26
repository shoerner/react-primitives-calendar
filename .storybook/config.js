import { configure } from '@storybook/react';

function loadStories() {
  require('../storybook-web/index');
}

configure(loadStories, module);
