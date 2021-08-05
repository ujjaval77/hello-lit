import { __decorate } from "tslib";
import { html, css, LitElement, property } from 'lit-element';
export class HelloLit extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.personName = 'Welcome';
        this.counter = 5;
        this.myArray = [''];
    }
    static get properties() {
        return {
            myArray: { type: Array }
        };
    }

    get button(){
        return html `
            <button>{{label}}</button>
        `
    }

    get secondButton() {
        return html`
            <button>{{label}}</button>
        `
    }

    __buttonPOC() {
       
        const app = this.renderRoot.getElementById("app");
        const demo = this.renderRoot.getElementById("demo");
        demo.textContent = "Hello World";
        app?.appendChild(demo);
        
        const myArray = this.myArray;
        var page= this.renderRoot.getElementById('secondaryNav');
        let template = this.button;
        let html = '';
        for (var i=0; i<myArray.length; i++) {
            var menu = template;
            var menuItemHtml = menu.strings[0].replace('{{label}}', myArray[i].name);

            html += menuItemHtml;
        }
        page.innerHTML = html;

        this.rendersecondTab(index);
    }

    renderSecondaryNav(index){
        const myArray = this.myArray;
        var navOjb = myArray[index];
        var page = this.renderRoot.getElementById('tertiaryButton');
        let template = this.secondButton;
        let html = '';
        for (var i=0; i< navObj.children.length; i++){
            var menu = template;
            var menuItemHtml = menu.strings[0].replace('{{label}}', navObj.children.name);

            html += menuItemHtml;
        } 
        page.innerHTML = html;
    }


    render() {
        return html `
      <h2>${this.title}, ${this.personName}</h2>
      <button @click="${this.__buttonPOC}">increment</button>
      <div id="app">
      <div id="secondaryNav"></div>
        <p id="demo"></p>
      </div>
      <div id="tertiaryButton">
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