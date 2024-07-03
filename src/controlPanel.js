import { make, isUrl } from './helpers';
import APIClient from './apiClient';

/**
 * Renders control panel view
 */
export default class ControlPanel {
  /**
   * @param {{api: object, config: object, readOnly: Boolean, cssClasses: object, onSelectItem: Function}}
   *  api - Editorjs API
   *  config - Tool custom config
   *  readOnly - read-only mode flag
   *  cssClasses - Css class names
   *  onSelectItem - Item selection callback
   */
  constructor({
    api, config, cssClasses, onSelectItem, readOnly,
  }) {
    this.api = api;
    this.config = config;
    this.readOnly = readOnly;

    this.cssClasses = {
      ...cssClasses,
      controlPanel: 'cdx-picker__control-panel',
      search: 'cdx-picker__search',
      itemGallery: 'cdx-picker__gallery',
      noResults: 'cdx-picker__no-results',
      imgWrapper: 'cdx-picker__img-wrapper',
      thumb: 'cdx-picker__thumb',
      name: 'cdx-picker__name',
      active: 'active',
      hidden: 'panel-hidden',
      scroll: 'panel-scroll',
    };

    this.onSelectItem = onSelectItem;

    this.nodes = {
      loader: null,
      apiPanel: null,
      itemGallery: null,
      searchInput: null,
    };

    this.apiClient = new APIClient(this.config.api);
    this.searchTimeout = null;
  }

  /**
   * Creates Control Panel components
   *
   * @returns {HTMLDivElement}
   */
  render() {
    const wrapper = make('div', this.cssClasses.controlPanel);
    const apiPanel = this.renderAPIPanel();

    wrapper.appendChild(apiPanel);

    this.nodes.apiPanel = apiPanel;

    return wrapper;
  }

  /**
   * Creates "API" control panel
   *
   * @returns {HTMLDivElement}
   */
  renderAPIPanel() {
    const wrapper = make('div', ['cdx-picker__control-panel-cont']);
    const itemGallery = make('div', this.cssClasses.itemGallery);
    const searchInput = make('div', [this.cssClasses.input, this.cssClasses.search], {
      id: 'api-search',
      contentEditable: !this.readOnly,
      oninput: () => this.searchInputHandler()
    });

    searchInput.dataset.placeholder = 'Search...';

    wrapper.appendChild(searchInput);
    wrapper.appendChild(itemGallery);

    this.nodes.searchInput = searchInput;
    this.nodes.itemGallery = itemGallery;
    // this.nodes.itemGallery.innerHTML = searchInput.dataset.placeholder;

    return wrapper;
  }

  /**
   * OnInput handler for Search input
   *
   * @returns {void}
   */
  searchInputHandler() {
    this.showLoader();
    this.performSearch();
  }

  /**
   * Shows a loader spinner on item gallery
   *
   * @returns {void}
   */
  showLoader() {
    this.nodes.itemGallery.innerHTML = '';
    this.nodes.loader = make('div', this.cssClasses.loading);
    this.nodes.itemGallery.appendChild(this.nodes.loader);
  }

  /**
   * Performs item search on user input.
   * Defines a timeout for preventing multiple requests
   *
   * @returns {void}
   */
  performSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      const search_input = this.nodes.searchInput.innerHTML;
      this.apiClient.searchItems(search_input,
        (results) => this.appendItemsToGallery(results));
    }, 1000);
  }

  /**
   * Creates the item gallery using API results.
   *
   * @param {Array} results items from API
   */
  appendItemsToGallery(results) {
    this.nodes.itemGallery.innerHTML = '';
    if (results && results.length) {
      this.nodes.apiPanel.classList.add(this.cssClasses.scroll);
      results.forEach((item) => {
        this.createThumb(item);
      });
    } else {
      const noResults = make('div', this.cssClasses.noResults, {
        innerHTML: 'No results',
      });
      this.nodes.itemGallery.appendChild(noResults);
      this.nodes.apiPanel.classList.remove(this.cssClasses.scroll);
    }
  }

  /**
   * Creates a thumb and appends it to the item gallery
   *
   * @param {Object} item API item object
   * @returns {void}
   */
  createThumb(item) {
    const imgWrapper = make('div', this.cssClasses.imgWrapper);
    const img = make('img', this.cssClasses.thumb, {
      src: item.image,
      onclick: () => this.chooseAPIItem(item),
    });

    const name = make('div', this.cssClasses.name, {
      innerHTML: item.name,
      onclick: () => this.chooseAPIItem(item),
    });

    imgWrapper.appendChild(img);
    imgWrapper.appendChild(name);
    this.nodes.itemGallery.append(imgWrapper);
  }

  /**
   * Handler for embedding API items.
   * Issues a request to API
   *
   * @param {{item: object}}
   *  item - item object
   *
   * @returns {void}
   */
  chooseAPIItem(item) {
    this.onSelectItem(item);
  }
}
