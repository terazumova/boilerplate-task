/* eslint-disable class-methods-use-this */
import { TemplateBlock, templateEngine } from '../../lib/templateEngine';
import { CheckPinPage } from '../../pages/CheckPinPage/CheckPinPage';

import './SettingPinInput.styl';

export class SettingPinInput {
  container: HTMLElement;

  saveButtonElement: HTMLElement;

  pinInputElement: HTMLInputElement;

  pinInputTitleElement: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  templatePinInput(): TemplateBlock {
    return {
      block: 'input',
      cls: 'Pincode-Input'
    };
  }

  templateButton(): TemplateBlock {
    return {
      block: 'button',
      cls: 'Pincode-Button'
    };
  }

  templateInputPinTitle(): TemplateBlock {
    return {
      block: 'h1',
      cls: 'Pincode-Title',
      content: 'Создайте пин-код: '
    };
  }

  render(): void {
    this.container.textContent = '';

    const pinInputTitleElement = templateEngine(this.templateInputPinTitle()) as HTMLElement;
    const pinInputElement = templateEngine(this.templatePinInput()) as HTMLInputElement;
    const saveButtonElement = templateEngine(this.templateButton()) as HTMLElement;

    this.container.appendChild(pinInputTitleElement);
    this.pinInputTitleElement = pinInputTitleElement;

    this.container.appendChild(pinInputElement);
    this.pinInputElement = pinInputElement;

    this.container.appendChild(saveButtonElement);
    this.saveButtonElement = saveButtonElement;

    this.saveButtonElement.textContent = 'Сохранить пин-код';

    this.saveButtonElement.addEventListener('click', (event) => {
      const pinString = this.pinInputElement.value;

      if (!pinString || !this.isOnlyDigits(pinString)) {
        alert('Введите пинкод, состоящий из цифр.');
        return;
      }

      const app = document.querySelector<HTMLDivElement>('.app');
      const checkPinPage = new CheckPinPage(app, pinString);
    });
  }

  isOnlyDigits(pinString: string): boolean {
    const pinNumber = Number(pinString);
    if (pinString !== '' && !Number.isNaN(pinNumber)) {
      return true;
    }

    return false;
  }
}
