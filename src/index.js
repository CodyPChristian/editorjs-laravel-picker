import './index.css';
import Ui from './ui';
import toolboxIcon from '../assets/toolboxIcon.svg';

/**
 * LaravelPicker Tool for the Editor.js
 * Requires API Endpoint to work.
 *
 * @typedef {object} LaravelPickerData
 * @description Tool's input and output data format
 * @property {string} url — item URL
 * @property {string} name — item name
 * @property {string} type — item type
 * @property {string} image — item image
 * @property {string} summary — item summary
 * @property {string} size — item size
 *
 */
export default class LaravelPicker {
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      title: 'Picker',
      icon: toolboxIcon,
    };
  }

  /**
   * Render tool`s main Element and fill it with saved data
   *
   * @param {{data: object, config: object, api: object, readOnly: Boolean}}
   *   data — previously saved data
   *   config - custom tool config
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
  constructor({
    data, api, config, readOnly,
  }) {
    this.api = api;
    this.readOnly = readOnly;

    this.ui = new Ui({
      data,
      api,
      config,
      readOnly,
      onAddItemData: (itemData) => this.addItemData(itemData),
    });

    this.data = {
      title: data.title || null,
      file: {
        url: null,
        name: null,
        type: null,
        image: null,
        summary: null,
        size: null,
      }
    };

    this.data.file.url = data.file && data.file.url ? data.file.url : null
    this.data.file.name = data.file && data.file.name ? data.file.name : null
    this.data.file.type = data.file && data.file.type ? data.file.type : null
    this.data.file.image = data.file && data.file.image ? data.file.image : null
    this.data.file.summary = data.file && data.file.summary ? data.file.summary : null
    this.data.file.size = data.file && data.file.size ? data.file.size : null

    // console.log('idx data', data, this.data);
  }

  /**
   * Renders Block content
   *
   * @returns {HTMLDivElement}
   */
  render() {
    // console.log('render', this.data);
    return this.ui.render(this.data);
  }

  /**
   * Returns Block data
   *
   * @returns {LaravelPickerData}
   */
  save() {
    const {
      title,
      file,
    } = this.ui.nodes;

    this.data.title = title;
    this.data.file = file;

    if (!this.data.title) {
      this.data.title = file.name;
    }

    if (!this.data.file.url) {
      this.data.file.url = file.url;
    }
    if (!this.data.file.name) {
      this.data.file.name = file.name;
    }
    if (!this.data.file.type) {
      this.data.file.type = file.type;
    }
    if (!this.data.file.image) {
      this.data.file.image = file.image;
    }
    if (!this.data.file.summary) {
      this.data.file.summary = file.summary;
    }
    if (!this.data.file.size) {
      this.data.file.size = file.size;
    }

    // console.log('save', this.data);
    return this.data;
  }

  /**
   * Validate saved data returned by the save method
   *
   * @param {object} savedData Block saved data
   */
  validate(savedData) {
    return true;
  }

  /**
   * Sanitizer rules
   *
   * @see {@link https://editorjs.io/sanitizer}
   */
  static get sanitize() {
    // return {
    //   url: {},
    //   name: {},
    //   type: {},
    //   image: {},
    //   summary: {},
    //   size: {},
    // };
  }

  /**
   * Callback for updating data when the item is embedded
   *
   * @param {object} itemData Item data
   */
  addItemData(itemData) {
    this.data.title = itemData.name;
    this.data.file.url = itemData.url;
    this.data.file.name = itemData.name;
    this.data.file.type = itemData.type;
    this.data.file.image = itemData.image;
    this.data.file.summary = itemData.summary;
    this.data.file.size = itemData.size;
  }

  /**
   * Returns item data
   *
   * @return {LaravelPickerData}
   */
  get data() {
    return this._data;
  }

  /**
   * Set item data and update the view
   *
   * @param {LaravelPickerData} data Item data
   */
  set data(data) {
    this._data = { ...this.data, ...data };

    if (data.title) {
      this.data.title = data.title;
    }
    if (data.file.url) {
      this.data.file.url = data.file.url;
    }
    if (data.file.name) {
      this.data.file.name = data.file.name;
    }
    if (data.file.type) {
      this.data.file.type = data.file.type;
    }
    if (data.file.image) {
      this.data.file.image = data.file.image;
    }
    if (data.file.summary) {
      this.data.file.summary = data.file.summary;
    }
    if (data.file.size) {
      this.data.file.size = data.file.size;
    }

    this.ui.nodes.title = this.data.title;
    this.ui.nodes.file.url = this.data.file.url;
    this.ui.nodes.file.name = this.data.file.name;
    this.ui.nodes.file.type = this.data.file.type;
    this.ui.nodes.file.image = this.data.file.image;
    this.ui.nodes.file.summary = this.data.file.summary;
    this.ui.nodes.file.size = this.data.file.size;

    this._data.title = this.data.title;
    this._data.file = this.data.file;
    this._data.file.url = this.data.file.url;
    this._data.file.name = this.data.file.name;
    this._data.file.type = this.data.file.type;
    this._data.file.image = this.data.file.image;
    this._data.file.summary = this.data.file.summary;
    this._data.file.size = this.data.file.size;
  }

  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }
}
