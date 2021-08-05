import { __decorate } from "tslib";
import { html, css, LitElement, property } from 'lit-element';
export class HelloLit extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.personName = 'Welcome';
        this.counter = 5;
    }
    __increment() {
       
        const app = this.renderRoot.getElementById("app");
        const demo = this.renderRoot.getElementById("demo");
        demo.textContent = "Hello World";
        app?.appendChild(demo);
        
        const element = document.createElement("button");
        element.appendChild(document.createTextNode("Click Me!"));
        var page= this.renderRoot.getElementById('secondaryNav');
        page.innerHTML="";
        page.appendChild(element);
    }
    render() {
        return html `
      <h2>${this.title}, ${this.personName}</h2>
      <button @click="${this.__increment}">increment</button>
      <div id="app">
        <p id="demo"></p>
        <div id="secondaryNav"></div>
      </div>
    `;
    }
}
HelloLit.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--hello-lit-text-color, #000);
    }
  `;
__decorate([
    property({ type: String })
], HelloLit.prototype, "title", void 0);
__decorate([
    property({ type: String })
], HelloLit.prototype, "personName", void 0);
__decorate([
    property({ type: Number })
], HelloLit.prototype, "counter", void 0);
//# sourceMappingURL=HelloLit.js.map