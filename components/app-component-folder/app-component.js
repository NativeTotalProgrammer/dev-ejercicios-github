import { LitElement, html } from 'lit-element';
import '../buttons-component-folder/buttons-component';
import '../card-component-folder/card-component';
import { rickMortyService } from '../service-component-folder/service-component';

class App extends LitElement {
  static properties = {
    character: { type: Object },
    currentIndex: { type: Number },
  };

  constructor() {
    super();
    this.character = {};
    this.currentIndex = 0;
  }


  async handlePageChange(event) {
    const page = event.detail;
    console.log('page', event.detail);
    const characters = await rickMortyService.fetchCharacter(page);
    this.character = characters;
  }

  render() {
    return html`
      <div class="container text-center">
        <character-card .character="${this.character}"></character-card>
        <rick-morty-buttons @page-change="${this.handlePageChange}"></rick-morty-buttons>
      </div>
    `;
  }
}

customElements.define('my-app', App);
