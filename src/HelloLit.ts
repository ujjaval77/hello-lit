import { html, css, LitElement, property } from 'lit-element';

export class HelloLit extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--hello-lit-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: String }) personName = 'Saurabh';

  @property({ type: Number }) counter = 5;

  __increment() {
    const app = this.renderRoot.getElementById('app');
    const demo = this.renderRoot.getElementById('demo');
    demo.textContent = 'Hello World';
    app?.appendChild(demo);

    const element = document.createElement('button');
    element.appendChild(document.createTextNode('Click Me!'));
    const page = this.renderRoot.getElementById('secondaryNav');
    page.innerHTML = '';
    page.appendChild(element);
  }

  render() {
    return html`
      <h2>${this.title} ${this.personName}</h2>
      <button @click=${this.__increment}>increment</button>
      <div id="app">
        <p id="demo"></p>
        <div id="secondaryNav"></div>
      </div>
    `;
  }
}
