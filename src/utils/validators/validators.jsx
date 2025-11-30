
export const required = (value) => {
    if (!value) return "Field is required"
    return undefined
}

export const maxLength = (length) => (value) => {
    if (value.length > length) return "Field must be less than " + length
    return undefined
}