const passwordValidation = (password) => {
    let result = {
        isValid: true,
        message: '',
    }

    let specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/

    password.length < 8 &&
        (result = {
            ...result,
            isValid: false,
            message: 'Requires a minimum of 8 characters',
        })

    !/[A-Z]/.test(password) &&
        (result = {
            ...result,
            isValid: false,
            message: 'Requires at least 1 uppercase letter',
        })

    !/[a-z]/.test(password) &&
        (result = {
            ...result,
            isValid: false,
            message: 'Requires at least 1 lowercase letter',
        })

    !specialChars.test(password) &&
        (result = {
            ...result,
            isValid: false,
            message: 'Requires at least 1 special character',
        })

    return result
}

export { passwordValidation }
