const TypeValidator = {
  arrayOf: (length, type = "number") => {
    return (propValue, key, componentName, location, propFullName) => {
      if (propValue.length !== length) {
        return new Error(
          `Invalid number of elements (${propValue.length}) of array '${propFullName}' supplied to '${componentName}', expected ${length} elements.`
        );
      }

      if (typeof propValue[key] !== type) {
        return new Error(
          `Invalid prop '${propFullName}' of type '${typeof propValue[
            key
          ]}' supplied to '${componentName}', expected a '${type}'.`
        );
      }
    };
  },
  range: (min, max, type = 'number') => {
    return (propValue, key, componentName) => {
      if (propValue[key] < min || propValue[key] > max) {
        return new Error(
          `Invalid value (${propValue[key]}) of property '${key}' supplied to '${componentName}', expected value in range [${min}..${max}].`
        );
      }

      if (typeof propValue[key] !== type) {
        return new Error(
          `Invalid prop '${key}' of type '${typeof propValue[
            key
          ]}' supplied to '${componentName}', expected a '${type}'.`
        );
      }
    };
  },
};

export { TypeValidator };
