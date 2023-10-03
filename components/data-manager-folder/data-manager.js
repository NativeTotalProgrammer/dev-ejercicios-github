import { LitElement } from 'lit';
import { rickMortyService } from '../service-component-folder/service-component';

export class DataManager extends LitElement {
  static properties = {
    page: { type: Number }
  };

  static get is() { return 'data-manager' }

  constructor() {
    super();
    this.page = 1;

    this.loadCharacter();
  }

  loadCharacter() {
    rickMortyService.fetchCharacter(this.page)
      .then(character =>
        this.dispatchEvent(
          new CustomEvent('character-loaded',
            {
              detail: character
            })));
  }

  handlePageChange(difference) {
    if (difference > 0) this.handleNext()
    else this.handlePrevious()

    this.loadCharacter()
  }

  handleNext() {
    if (this.page >= 20) {
      this.page = 1
    } else {
      this.page++;
    }
  }

  handlePrevious() {
    if (this.page <= 1) {
      this.page = 20;
    } else {
      this.page--;
    }
  }
}

customElements.define(DataManager.is, DataManager);
