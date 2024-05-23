import accountRequestBody from '../../data/user/create_account.json' assert { type: 'json' }
import { config } from '../../../config.js'
import { generateRandomEmail, generatePassword } from '../helpers.js'

export async function generateCreateUserRequestBody() {
    accountRequestBody.email = await generateRandomEmail()
    accountRequestBody.name = config[global.env].name
    accountRequestBody.surname = config[global.env].surname
    accountRequestBody.password = await generatePassword()

    global.executionVariables['userEmail'] = accountRequestBody.email
    global.executionVariables['userPassword'] = accountRequestBody.password

    return accountRequestBody
}

export async function generateCreateUserRequestBodyWithoutEmail() {
    accountRequestBody.email = ''
    accountRequestBody.name = config[global.env].name
    accountRequestBody.surname = config[global.env].surname
    accountRequestBody.password = await generatePassword()

    return accountRequestBody
}

export async function getUpdateUserRequestBody() {
    accountRequestBody.name = `${config[global.env].username}Updated`
    accountRequestBody.status = config[global.env].status
    accountRequestBody.gender = config[global.env].gender
    accountRequestBody.email = await generateRandomEmail()
    
    return accountRequestBody
}