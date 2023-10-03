import { LitElement, html, css } from 'lit';

export class RickMortyButtons extends LitElement {
  static properties = {
    page: { type: Number },
  };

  constructor() {
    super();
    this.page = 1;
  }

  handleNext() {
    this.page++;
    this.dispatchEvent(new CustomEvent('page-change', { detail: this.page }));
  }

  handlePrevious() {
    if (this.page > 1) {
      this.page--;
      this.dispatchEvent(new CustomEvent('page-change', { detail: this.page }));
    }
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
