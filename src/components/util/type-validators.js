
const TypeValidator = {
  arrayOf: (length, type = 'number') => {
    return (propValue, key, componentName, location, propFullName) => {
      if (propValue.length !== length) {
        return new Error(`Invalid number of elements (${propValue.length}) of array '${propFullName}' supplied to '${componentName}', expected ${length} elements.`);
      }

      if (typeof(propValue[key]) !== type) {
        return new Error(`Invalid prop '${propFullName}' of type '${typeof(propValue[key])}' supplied to '${componentName}', expected a '${type}'.`);
      }
    }
  },
};

export { TypeValidator }
