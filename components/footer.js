class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `


<!-- your common html goes here -->

            `;
    }
  }
  
  customElements.define('footer-component', Footer);