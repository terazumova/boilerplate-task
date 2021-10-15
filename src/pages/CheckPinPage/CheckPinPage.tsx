import { PinInput } from '../../components/PinInput/PinInput';

export class CheckPinPage {
  container: HTMLElement;

  element: HTMLElement;

  pin: string;

  constructor(container: HTMLElement, pin: string) {
    this.container = container;

    this.pin = pin;

    this.render();
  }

  render(): void {
    this.container.textContent = '';

    const element = document.createElement('div');
    element.classList.add('CheckPinPage');

    this.container.appendChild(element);
    this.element = element;

    const pinInput = new PinInput(this.element, this.pin);
  }
}
