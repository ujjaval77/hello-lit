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

  @property({ type: String }) personName = 'Welcome';

  @property({ type: Number }) counter = 5;

  @property({type: Array}) myArray = [''];  
  children: any ;
  index:any;

  get button(){
    return html `
        <button>Click Me!</button>
    `
  }
  
  get secondButton() {
    return html`
        <button>{{label}}</button>
    `
  }

  __buttonPOC() {
       
    const app = document.getElementById("app");
    const demo = document.getElementById("demo");
    demo.textContent = "Hello World";
    app?.appendChild(demo);
    
    const myArray = this.myArray;
    var page= this.renderRoot.getElementById('secondaryNav');
    let template = this.button;
    let html = '';
    for (var i=0; i<myArray.length; i++) {
        var menu = template;
        var menuItemHtml = menu.strings[0].replace('{{label}}', myArray[i]['name']);

        html += menuItemHtml;
    }
    page.innerHTML = html;
}

  renderSecondaryNav(index:number){
    const myArray = this.myArray;
    var navObj = myArray[index];
    var page = this.renderRoot.getElementById('tertiaryButton');
    let template = this.secondButton;
    let html = '';
    for (var i=0; i< navObj.children.length; i++){
        var menu = template;
        var menuItemHtml = menu.strings[0].replace('{{label}}', navObj['children']['name']);

        html += menuItemHtml;
    } 
    page.innerHTML = html;
  }


  render() {
    return html`
      <h2>${this.title} ${this.personName}</h2>
      <button @click="${this.__buttonPOC}">Click Me!</button>
      <div id="app">
        <p id="demo"></p>
        <div id="secondaryNav"></div>
      </div>
    `;
  }
}
