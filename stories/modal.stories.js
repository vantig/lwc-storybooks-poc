import {storiesOf} from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import Modal from 'c/modal';

buildAndRegisterCustomElement('c-modal', Modal);

storiesOf('Modal', module).add('modal', () => `<c-modal></c-modal>`)
   
