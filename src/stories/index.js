import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import ThemeProvider from './themeProvider';

import Button from '../components/common/button';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <ThemeProvider>{ getStory() }</ThemeProvider>)
  .add('Default', () => <Button variant="default" onClick={action('clicked')}>Click me</Button>)
  .add('Primary', () => <Button variant="primary" onClick={action('clicked')}>Click me</Button>)
