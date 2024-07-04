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
  const itemDataName = itemData?.file?.name ?? '';
  if (itemDataName) {
    const name = make('div', ['cdx-picker_item_details_name'], {
      innerHTML: itemDataName,
    });
    wrapper.appendChild(name);
  }
  const itemDataSummary = itemData?.file?.summary ?? '';
  if (itemDataSummary) {
    const summary = make('div', ['cdx-picker_item_details_summary'], {
      innerHTML: itemDataSummary,
    });
    wrapper.appendChild(summary);
  }
  const itemDataType = itemData?.file?.type ?? '';
  if (itemDataType) {
    const type = make('div', ['cdx-picker_item_details_type'], {
      innerHTML: itemDataType,
    });
    wrapper.appendChild(type);
  }
  const itemDataSize = itemData?.file?.size ?? '';
  if (itemDataSize) {
    const size = make('div', ['cdx-picker_item_details_size'], {
      innerHTML: itemDataSize,
    });
    wrapper.appendChild(size);
  }
  return wrapper;
};