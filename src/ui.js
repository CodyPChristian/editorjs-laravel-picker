import { make, createItemDetails } from './helpers';
import ControlPanel from './controlPanel';

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
  /**
   * @param {{api: object, config: object, readOnly: Boolean, onAddItemData: Function}}
   *   api - Editorjs API
   *   config - Tool custom config
   *   readOnly - read-only mode flag
   *   onAddItemData - Callback for adding item data
   */
  constructor({
    api, config, readOnly, onAddItemData
  }) {
    this.api = api;
    this.config = config;
    this.readOnly = readOnly;
    this.onAddItemData = onAddItemData;

    this.CSS = {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      wrapper: 'cdx-picker',
      imageHolder: 'cdx-picker_image_holder',
      url: 'cdx-picker__url',
      name: 'cdx-picker__name',
      type: 'cdx-picker__type',
      image: 'cdx-picker__image',
      summary: 'cdx-picker__summary',
      size: 'cdx-picker__size',
    };

    this.controlPanel = new ControlPanel({
      api,
      config,
      readOnly,
      cssClasses: this.CSS,
      onSelectItem: (itemData) => this.selectItem(itemData),
    });

    this.nodes = {
      wrapper: null,
      loader: null,
      image: null,
      title: null,
      file: {
        url: null,
        name: null,
        type: null,
        image: null,
        summary: null,
        size: null,
      }
    };
  }

  /**
   * Renders tool UI
   *
   * @param {Object} data Saved tool data
   * @returns {HTMLDivElement}
   */
  render(data) {
    const wrapper = make('div', [this.CSS.baseClass, this.CSS.wrapper]);
    const loader = make('div', this.CSS.loading);
    const image = make('img', '', {
      onload: () => this.onImageLoad(),
      onerror: () => this.onImageLoadError(),
    });
    this.nodes.imageHolder = make('div', this.CSS.imageHolder);
    if (data.file.url) {
      wrapper.appendChild(loader);
      this.nodes.title = data.file.name;
      this.nodes.file = data.file;
      const details = this.buildItemDetails(data);
      if (details) {
        wrapper.appendChild(details);
      }
      const button = this.buildItemButton(data);
      if (button) {
        wrapper.appendChild(button);
      }
      image.src = data.file.image.replace('amp;', '');
    } else {
      const controlPanelWrapper = this.controlPanel.render();
      this.nodes.controlPanelWrapper = controlPanelWrapper;
      wrapper.appendChild(controlPanelWrapper);
    }

    this.nodes.wrapper = wrapper;
    this.nodes.loader = loader;
    this.nodes.image = image;

    return wrapper;
  }

  /**
   * Builds API item details element
   *
   * @param {Object} itemData item data
   * @returns {HTMLDivElement}
   */
  buildItemDetails(itemData) {
    if (itemData) {
      return createItemDetails(itemData);
    }
    return false;
  }

  /**
   * Builds API item button element
   *
   * @param {Object} itemData item data
   * @returns {HTMLDivElement}
   */
  buildItemButton(itemData) {
    if (itemData) {
      return make('a', ['cdx-picker_item_button'], {
        innerHTML: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>',
        href: itemData.file.url,
        target: '_blank',
        rel: 'nofollow noindex noreferrer'
      });
    }
    return false;
  }

  /**
   * On image load callback
   * Shows the embedded image
   *
   * @returns {void}
   */
  onImageLoad() {
    this.nodes.imageHolder.prepend(this.nodes.image);
    this.nodes.wrapper.prepend(this.nodes.imageHolder);
    this.nodes.loader.remove();
  }

  /**
   * Callback fired when image fails on load.
   * It removes current editor block and notifies error
   *
   * @returns {void}
   */
  onImageLoadError() {
    this.removeCurrentBlock();
    this.api.notifier.show({
      message: 'Can not load the content, try again!',
      style: 'error',
    });
  }

  /**
   * Removes current block from editor
   *
   * @returns {void}
   */
  removeCurrentBlock() {
    Promise.resolve().then(() => {
      const blockIndex = this.api.blocks.getCurrentBlockIndex();
      this.api.blocks.delete(blockIndex);
    })
      .catch((err) => {
        console.error(err);
      });
  }

  /**
   * Makes buttons with tunes
   *
   * @returns {HTMLDivElement}
   */
  renderSettings(data) {
    return this.tunes.render(data);
  }

  /**
   * Shows a loader spinner
   *
   * @returns {void}
   */
  showLoader() {
    this.nodes.controlPanelWrapper.remove();
    this.nodes.wrapper.appendChild(this.nodes.loader);
  }

  /**
   * Callback fired when an image is embedded
   *
   * @param {Object} data Tool data
   * @returns {void}
   */
  selectItem(data) {
    this.onAddItemData(data);
    this.showLoader();
    
    if (data.url) {
      this.nodes.image.src = data.image.replace('amp;', '');
      this.nodes.title = data.name;
      this.nodes.file = data;
      let itemData = {
        title: data.name,
        file: data
      };
      const details = this.buildItemDetails(itemData);
      if (details) {
        this.nodes.wrapper.appendChild(details);
      }
      const button = this.buildItemButton(itemData);
      if (button) {
        this.nodes.wrapper.appendChild(button);
      }
    }
  }
}
