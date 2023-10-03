import { LitElement, html, css } from 'lit-element';

class CharacterCard extends LitElement {
  static properties = {
    character: { type: Object },
  };

  render() {
    return html`
      <div class="character-card">
        <h2>${this.character.name}</h2>
        <img src="${this.character.image}" alt="${this.character.name}" />
        <p>${this.character.status}</p>
      </div>
    `;
  }

  static styles = css``;
}

customElements.define('character-card', CharacterCard);
