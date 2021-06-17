const hasErrors = (errors) => {
    return Object.keys(errors).length > 0;
}

const setErrorMessage = (errors) => {
    let message = ''
    Object.keys(errors).forEach(error => message += errors[error] + '\n')
    return message
}

export {
    hasErrors,
    setErrorMessage
}