const hasErrors = (errors) => {
    return Object.keys(errors).length > 0;
}

const setErrorMessage = (errors) => {
    let message = ''
    Object.keys(errors).forEach(error => message += errors[error] + '\n')
    return message
}

const parseCase = (array) => {
    // array filled with objects: {last_name: 'john'} => {lastName: 'john'}
    const result = []
    for (const object of array) {
        for (const key in object) {
            
            const words = key.split('_');
            let capitalizedWords = '';
            words.forEach((word, index) => {                
                let capitalized = '';
                for (let ix=0; ix < word.length; ix++) {
                    if (index > 0 && ix === 0) {
                        capitalized += word[0].toUpperCase()    
                    } else {
                        capitalized += word[ix]
                    }
                }
                capitalizedWords += capitalized;
                
            })
            result.push({[capitalizedWords]: object[key]})
        }
    }
    return result;
}

export {
    hasErrors,
    setErrorMessage,
    parseCase
}