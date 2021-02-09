export const requiredField = value => {
    if (value) return undefined;
    return 'Field is required'
}

export const maxLenCreator = (maxlen) => (value) => {
    if (value && value.length > maxlen) return `Max length is ${maxlen} symbols`;
    return undefined;
}

