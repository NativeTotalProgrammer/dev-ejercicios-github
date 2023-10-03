import { LitElement, html } from 'lit-element';

class CharacterCard extends LitElement {
  static properties = {
    character: { type: Object },
  };

  render() {
    return this.character != undefined || this.character != null ?
      html`<div class="character-card">
        <h2>${this.character.name}</h2>
        <img src="${this.character.image}" alt="${this.character.name}" />
        <p>${this.character.status}</p>
      </div>` :
      html`<h3>Loading...</h3>`;
  }
}

customElements.define('character-card', CharacterCard);
