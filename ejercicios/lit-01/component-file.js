import { LitElement, html } from "lit";

export class MyFirstComponent extends LitElement {

  render() {
    return (
      html`
        <h1>Hola, soy un componente de LitElement.</h1>
        <p>Este es mi contenido.</p>
      `
    );
  };
};

customElements.define('selector-component-1', MyFirstComponent);