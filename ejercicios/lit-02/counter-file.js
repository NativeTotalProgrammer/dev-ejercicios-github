import { LitElement, html, css } from "lit";

export class ClassCounterComponent extends LitElement {
  static styles = css`
    .counter-container {
      text-align: center;
      font-size: 1.5rem;
    }

    .counter {
      font-size: 2rem;
      margin: 10px;
    }

    button {
      font-size: 1rem;
      padding: 5px 10px;
      margin: 5px;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 100;
  };


  incrementFn() {
    this.count++;
  }

  decrementFn() {
    if (this.count > 0) {
      this.count--;
    }
  }

  resetFn() {
    this.count = 0;
  }

  render() {
    return html`
      <div class="counter-container">
        <button @click=${this.decrementFn}>Decrement</button>
        <span class="counter">${this.count}</span>
        <button @click=${this.incrementFn}>Increment</button>
        <button @click=${this.resetFn}>Reset</button>
      </div>
    `;
  }
}

customElements.define('counter-selector', ClassCounterComponent);
