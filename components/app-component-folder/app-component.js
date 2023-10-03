import { LitElement, html } from 'lit-element';
import '../buttons-component-folder/buttons-component';
import '../card-component-folder/card-component';
import '../data-manager-folder/data-manager';

class App extends LitElement {
  static properties = {};

  async handlePageChange(event) {
    const dataManager = this.shadowRoot.querySelector('data-manager');
    
    dataManager.handlePageChange(event.detail);
  }
  
  handleCharacterLoaded(event) {
    const characterCard = this.shadowRoot.querySelector('character-card');
    characterCard.character = event.detail
  }

  render() {
    return html`
      <div class="container text-center">
        <data-manager @character-loaded="${this.handleCharacterLoaded}"></data-manager>
        <character-card></character-card>
        <rick-morty-buttons @page-change="${this.handlePageChange}"></rick-morty-buttons>
      </div>
    `;
  }
}

customElements.define('my-app', App);
