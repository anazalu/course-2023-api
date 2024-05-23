export async function generateTestData() {
    setEnvironment(process.argv.slice(process.argv.length - 1)[0])
}

function setEnvironment(env) {
    global.env = env
}

export async function generateRandomEmail() {
    return `${Math.random().toString(36).substring(2,11)}@domain.com`
}

export async function generatePassword() {
    return Math.random().toString(36).substring(2,11)
}

export async function generateString(length = 10) {
    let result = ''

    while (result.length < length) {
        result += Math.random().toString(36).substring(2)
    }
   
    return result.substring(0, length)
}

export async function generateInteger(length = 5) {
    let result = ''
    const digits = '0123456789'

    for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * digits.length)
       result += digits[randomIndex]
    }
    
    return parseInt(result, 10)
}


