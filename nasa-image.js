import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {
  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.alt = '';
    this.owner = '';
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
      alt: { type: String },
      owner: { type: String },
    };
  }

  static get styles() {
    return css`
      .image-card {
        display: inline-block;
        width: 240px;
        height: 320px;
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f0f0f0;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      }

  
        :host .image-card:hover {
        background-color: #FFA500 !important;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      .image-card img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 8px;
      }

      .image-info {
        font-size: 16px;
        font-weight: bold;
        margin-top: 8px;
        color: #333;
      }

      .image-owner {
        font-size: 14px;
        color: #777;
      }
    `;
  }

  render() {
    return html`
      <div
        class="image-card"
        tabindex="0"
        @click="${this.openImageInNewWindow}"
        @keypress="${this.handleKeyPress}"
      >
        <img src="${this.source}" alt="${this.alt}" />
        <div class="image-info">${this.title}</div>
        <div class="image-owner">Owner: ${this.owner}</div>
      </div>
    `;
  }

  openImageInNewWindow() {
    window.open(this.source, '_blank');
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.openImageInNewWindow();
    }
  }

  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);
