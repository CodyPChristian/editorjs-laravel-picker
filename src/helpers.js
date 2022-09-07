/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName New Element tag name
 * @param  {Array|string} classNames List or name of CSS class
 * @param  {object} attributes Any attributes
 * @returns {Element}
 */
export const make = (tagName, classNames = null, attributes = {}) => {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  Object.keys(attributes).forEach((attrName) => {
    el[attrName] = attributes[attrName];
  });

  return el;
};

/**
 * Validates Url
 *
 * @param {string} url Url to validate
 * @returns {boolean} Valid Url
 */
export const isUrl = (url) => {
  const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
  return regex.test(url);
};

/**
 * Creates an element with the item details
 *
 * @param {object} itemData item data
 *
 * @returns {HTMLDivElement}
 */
 export const createItemDetails = (itemData) => {
  const wrapper = make('div', 'cdx-picker_item_details');
  const name = make('div', ['cdx-picker_item_details_name'], {
    innerHTML: itemData.file.name,
  });
  const summary = make('div', ['cdx-picker_item_details_summary'], {
    innerHTML: itemData.file.summary,
  });
  const type = make('div', ['cdx-picker_item_details_type'], {
    innerHTML: itemData.file.type,
  });
  const size = make('div', ['cdx-picker_item_details_size'], {
    innerHTML: itemData.file.size,
  });
  
  wrapper.appendChild(name);
  wrapper.appendChild(type);
  wrapper.appendChild(size);
  wrapper.appendChild(summary);
  return wrapper;
};