import { request } from '../../utils/requests.js'
import { generateCreateUserRequestBody, getUpdateUserRequestBody, generateCreateUserRequestBodyWithoutEmail } from '../../utils/requestBodyGenerator/user.js'
import { config } from '../../../config.js'

export async function createUser() {
    it('Create user account', async function () {
        const requestBody = await generateCreateUserRequestBody()

        await request(this, 'POST', '/user', requestBody, false, 
            {
                statusCode : 201,
                expectedValues: [
                                    {path: 'email', value: requestBody.email},
                                    {path: 'name', value: requestBody.name},
                                    {path: 'surname', value: requestBody.surname}
                                ]
            }
        )
    })
}

export async function createUserWithoutPassword() {
    it('Create user account without password', async function () {
        let requestBody = await generateCreateUserRequestBody()
        delete requestBody.password

        await request(this, 'POST', '/user', requestBody, false, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: 'Password not provided'}
                                ]
            }
        )
    })
}

export async function createUserWithoutEmail() {
    it('Create user account without email', async function () {
        const requestBody = await generateCreateUserRequestBodyWithoutEmail()

        await request(this, 'POST', '/user', requestBody, false, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: 'User validation failed: email: Path `email` is required.'}
                                ]
            }
        )
    })
}


export async function loginUser() {
    it('Login user', async function () {
        const requestBody = {'email': global.executionVariables['userEmail'], 
        'password': global.executionVariables['userPassword']}

        await request(this, 'POST', '/login', requestBody, false, 
            {
                statusCode : 200,
                expectedValues: [
                                    {path: 'message', value: 'Login successful'}
                                ],
                executionVariables: [
                    {path: 'token', name: 'accessToken'}
                ]
            }
        )
    })
}


export async function deleteUser() {
    it('Remove user account', async function () {
        await request(this, 'DELETE', `/user`, undefined, true, 
            {
                statusCode : 200,
                expectedValues: [
                    {path: 'message', value: 'User and all associated restaurants and meals have been deleted.'}
                ]
            }
        )
    })
}

export async function getUser() {
    it('Get user account', async function () {
        await request(this, 'GET', `/users/${global.executionVariables['userId']}`, undefined, true, 
            {
                statusCode : 200,
                expectedFields: ['email'],
                expectedValues: [
                                    {path: 'name', value: config[global.env].username},
                                    {path: 'gender', value: config[global.env].gender},
                                    {path: 'status', value: config[global.env].status}
                                ]
            }
        )
    })
}

export async function updateUser() {
    it('Update user account', async function () {
        const requestBody = await getUpdateUserRequestBody()
        await request(this, 'PATCH', `/users/${global.executionVariables['userId']}`, requestBody, true, 
            {
                statusCode : 200,
                expectedFields: ['email'],
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'gender', value: requestBody.gender},
                                    {path: 'status', value: requestBody.status}
                                ]
            }
        )
    })
}