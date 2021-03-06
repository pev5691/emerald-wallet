import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from '@emeraldplatform/ui';
import { I18nextProvider } from 'react-i18next';
import BigNumber from 'bignumber.js';
import { i18n, App } from '@emeraldwallet/react-app';
import { start as startStore, store } from './store/store';
import About from './containers/About';
import {Logger} from '@emeraldwallet/core';
import {config} from "@emeraldwallet/store";

const TERMS_VERSION = config.TERMS_VERSION;
const log = Logger.forCategory('index');

function start() {
  log.info('Starting Emerald Wallet...');

  // set document background to theme canvas color
  const canvasColor = Theme.palette.background.default;
  document.body.style.backgroundColor = canvasColor;

  ReactDOM.render(
    <App store={store} terms={TERMS_VERSION} />,
    document.getElementById('app')
  );

  startStore();
}

const showAbout = () => {
  // set document background to theme canvas color
  const canvasColor = Theme.palette.background.default;
  document.body.style.backgroundColor = canvasColor;
  const AboutWindow = () => (
    <I18nextProvider i18n={i18n}>
      <About/>
    </I18nextProvider>
  );
  ReactDOM.render(<AboutWindow/>, document.getElementById('app'));
};

window.ETCEMERALD = window.ETCEMERALD || {};
window.ETCEMERALD.start = start;
window.ETCEMERALD.showAbout = showAbout;
BigNumber.config({ EXPONENTIAL_AT: 27 });
