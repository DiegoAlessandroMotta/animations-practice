export const debounce = (callback, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
};

export const handleDomElement = ($element) => {
  const element = {
    value: null,
  };

  const getCurrentValue = () => {
    let currentValue = "";

    if ($element instanceof HTMLInputElement) {
      currentValue = $element.type === 'checkbox'
        ? $element.checked
        : $element.value
    } else if ($element instanceof HTMLTextAreaElement) {
      currentValue = $element.value;
    } else {
      currentValue = $element.innerText;
    }

    element.value = currentValue;
    return currentValue;
  };

  const setValue = (value) => {
    const newValue = typeof value === 'function'
      ? value(element)
      : value

    if ($element instanceof HTMLInputElement){
      if ($element.type === "checkbox") {
        $element.checked = Boolean(newValue);
      } else {
        $element.value = newValue.toString();
      }
    } else if ($element instanceof HTMLTextAreaElement) {
      $element.value = newValue.toString();
    } else {
      $element.innerHTML = newValue.toString();
    }

    element.value = newValue.toString();
  };

  getCurrentValue();
  return [element, setValue, getCurrentValue];
};

export const $ = (selector) => document.querySelector(selector);

export const $all = (selector) => document.querySelectorAll(selector);
