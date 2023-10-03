import { LitElement, html, css } from 'lit';

export class RickMortyButtons extends LitElement {
  static properties = {};

  handleNext() {
    this.dispatchEvent(new CustomEvent('page-change', { detail: 1 }));
  }

  handlePrevious() {
    this.dispatchEvent(new CustomEvent('page-change', { detail: -1 }));
  }

  render() {
    return html`
      <div class="rick-morty-buttons">
        <button @click="${this.handlePrevious}">Previous.</button>
        <button @click="${this.handleNext}">Next.</button>
      </div>
    `;
  }

  static styles = css`
    .rick-morty-buttons {
      margin-top: 20px;
    }
  `;
}

customElements.define('rick-morty-buttons', RickMortyButtons);
