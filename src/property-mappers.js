function getPropertyValue(properties, name, defaultValue = undefined) {
    const style = properties.style;
    if (style !== undefined && style[name] !== undefined) {
      return style[name];
    }

    return (properties[name] !== undefined) ? properties[name] : defaultValue;
}

function allUndefined (...properties) {
    return properties.every(value => value === undefined);
}

function mapBoundsSize(publicProperties) {
    const width = getPropertyValue(publicProperties, 'width');
    const height = getPropertyValue(publicProperties, 'height');
    const multiline = getPropertyValue(publicProperties, 'multiline');

    return allUndefined(width, height, multiline)
        ? undefined
        : {
            boundsSize: [width, height],
            wrap: multiline
        };
}

function mapFontParameters(publicProperties) {
    const fontStyle = getPropertyValue(publicProperties, 'fontStyle');
    const fontWeight = getPropertyValue(publicProperties, 'fontWeight');
    const fontSize = getPropertyValue(publicProperties, 'fontSize');
    const allCaps = getPropertyValue(publicProperties, 'allCaps');

    return allUndefined(fontStyle, fontWeight, fontSize, allCaps)
        ? undefined
        : { fontStyle, fontWeight, fontSize, allCaps };
}

export {
    getPropertyValue,
    mapBoundsSize,
    mapFontParameters
}