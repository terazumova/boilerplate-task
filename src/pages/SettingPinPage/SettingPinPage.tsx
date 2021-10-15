import { SettingPinInput } from '../../components/SettingPinInput/SettingPinInput';

export class SettingPinPage {
  container: HTMLElement;

  element: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  render(): void {
    this.container.textContent = '';

    const element = document.createElement('div');
    element.classList.add('SettingPinPage');

    this.container.appendChild(element);
    this.element = element;

    const settingPinInput = new SettingPinInput(this.element);
  }
}
