/* eslint-disable class-methods-use-this */
import { TemplateBlock, templateEngine } from '../../lib/templateEngine';
import { GreetingPage } from '../../pages/GreetingPage/GreetingPage';

import PincodeInput from 'pincode-input';

import 'pincode-input/dist/pincode-input.min.css';
import './PinInput.styl';

export class PinInput {
  container: HTMLElement;

  pinTitleElement: HTMLElement;

  pinInputsElement: HTMLElement;

  pin: string;

  constructor(container: HTMLElement, pin: string) {
    this.container = container;

    this.pin = pin;

    this.render();
  }

  templatePinInputs(): TemplateBlock {
    return {
      block: 'div',
      cls: 'Pincode-Inputs'
    };
  }

  templatePinTitle(): TemplateBlock {
    return {
      block: 'h1',
      cls: 'Pincode-Title',
      content: 'Введите пин-код: '
    };
  }

  render(): void {
    this.container.textContent = '';

    const pinTitleElement = templateEngine(this.templatePinTitle()) as HTMLElement;
    const pinInputsElement = templateEngine(this.templatePinInputs()) as HTMLElement;

    this.container.appendChild(pinTitleElement);
    this.pinTitleElement = pinTitleElement;

    this.container.appendChild(pinInputsElement);
    this.pinInputsElement = pinInputsElement;

    const pinInputs = new PincodeInput('.Pincode-Inputs', {
      count: this.pin.length,
      secure: false,
      previewDuration: 200,
      numeric: true,
      onInput: (value: number) => {
        const suggestedString = value.toString();
        if (suggestedString.length === this.pin.length) {
          this.checkPincode(suggestedString);
        }
      }
    });
  }

  checkPincode(enteredPin: string): void {
    if (enteredPin === this.pin) {
      // eslint-disable-next-line no-console
      console.log('pin is right');

      const app = document.querySelector<HTMLDivElement>('.app');
      const greetingPage = new GreetingPage(app);
      return;
    }

    // eslint-disable-next-line no-alert
    alert('pin is not right');
  }
}
