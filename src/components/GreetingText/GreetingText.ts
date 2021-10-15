/* eslint-disable class-methods-use-this */
import { TemplateBlock, templateEngine } from '../../lib/templateEngine';

export class GreetingText {
  container: HTMLElement;

  titleElement: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  templateTitle(): TemplateBlock {
    return {
      block: 'h1',
      cls: 'GreetingText-Title',
      content: 'Приветствуем!'
    };
  }

  render(): void {
    this.container.textContent = '';

    const titleElement = templateEngine(this.templateTitle()) as HTMLElement;

    this.container.appendChild(titleElement);
    this.titleElement = titleElement;
  }
}
