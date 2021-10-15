import { GreetingText } from '../../components/GreetingText/GreetingText';

export class GreetingPage {
  container: HTMLElement;

  element: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  render(): void {
    this.container.textContent = '';

    const element = document.createElement('div');
    element.classList.add('GreetingPage');

    this.container.appendChild(element);
    this.element = element;

    const greetingText = new GreetingText(this.element);
  }
}
