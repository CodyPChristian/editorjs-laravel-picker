import axios from 'axios';

/**
 * Client for API
 */
export default class APIClient {
  constructor(config) {
    this.endpoint = config && config.endpoint ? config.endpoint : null;
    this.search_param = config && config.search_param ? config.search_param : 'term';
    this.results_key = config && config.results_key ? config.results_key : null;
  }

  /**
   * Search items
   *
   * @param {String} search_input Item search input
   * @param {Function} callback Function for redering item gallery
   * @returns {void}
   */
  searchItems(search_input, callback) {
    axios.get(`${this.endpoint}`, {
      params: {
        [this.search_param]: search_input
      },
    })
      .then(results => {
        if (this.results_key) {
          results = results.data[this.results_key];
        } else {
          results = results.data;
        }
        callback(this.parseResponse(results))
      })
      .catch(() => callback([]));
  }

  /**
   * Get All items
   *
   * @param {Function} callback Function for redering item gallery
   * @returns {void}
   */
   getItems(callback) {
    axios.get(`${this.endpoint}`)
      .then(results => {
        if (this.results_key) {
          results = results.data[this.results_key];
        } else {
          results = results.data;
        }
        callback(this.parseResponse(results))
      })
      .catch(() => callback([]));
  }

  /**
   * Parses API response
   * @param {Array} results Array of items from API
   */
  parseResponse(results) {
    return results.map((item) => this.buildItemObject(item));
  }

  /**
   * Builds an item object
   *
   * @param {object} item API item object
   * @returns {object} Item object
   */
  buildItemObject(item) {
    return {
      url: item.url,
      name: item.name,
      type: item.type,
      image: item.image,
      summary: item.summary,
      size: item.size,
    };
  }
}
