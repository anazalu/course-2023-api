import accountRequestBody from '../../data/user/create_account.json' assert { type: 'json' }
import loginRequestBody from '../../data/user/login.json' assert { type: 'json' }
import { config } from '../../../config.js'
import { generateRandomEmail, generateRandomPassword } from '../helpers.js'

export async function getCreateUserRequestBody() {
    accountRequestBody.name = config[global.env].name
    accountRequestBody.surname = config[global.env].surname

    const password = await generateRandomPassword()
    const email = await generateRandomEmail()

    global.executionVariables['userPassword'] = password
    global.executionVariables['userEmail'] = email

    accountRequestBody.password = password
    accountRequestBody.email = email
    
    return accountRequestBody
}

export async function getLoginUserRequestBody() {
    loginRequestBody.email = global.executionVariables['userEmail']
    loginRequestBody.password = global.executionVariables['userPassword']

    return loginRequestBody
}