function getPropertyValue (properties, name, defaultValue = undefined) {
    const style = properties.style;
    if (style !== undefined && style[name] !== undefined) {
      return style[name];
    }

    return (properties[name] !== undefined) ? properties[name] : defaultValue;
}

function allUndefined (...properties) {
    return properties.every(value => value === undefined);
}

function mapBoundsSize (publicProperties) {
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

function mapFontParameters (publicProperties) {
    const fontStyle = getPropertyValue(publicProperties, 'fontStyle');
    const fontWeight = getPropertyValue(publicProperties, 'fontWeight');
    const fontSize = getPropertyValue(publicProperties, 'fontSize');
    const allCaps = getPropertyValue(publicProperties, 'allCaps');

    return allUndefined(fontStyle, fontWeight, fontSize, allCaps)
        ? undefined
        : { fontStyle, fontWeight, fontSize, allCaps };
}

function mapSize (publicProperties) {
    const width = getPropertyValue(publicProperties, 'width', 0);
    const height = getPropertyValue(publicProperties, 'height', 0);

    return { width, height };
}

function mapProgressColor (publicProperties) {
    const beginColor = getPropertyValue(publicProperties, 'beginColor');
    const endColor = getPropertyValue(publicProperties, 'endColor');

    return allUndefined(beginColor, endColor)
        ? undefined
        : { beginColor, endColor };
}

export {
    getPropertyValue,
    mapBoundsSize,
    mapFontParameters,
    mapSize,
    mapProgressColor
}