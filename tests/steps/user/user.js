import { request } from '../../utils/requests.js'
import { getCreateUserRequestBody, getLoginUserRequestBody } from '../../utils/requestBodyGenerator/user.js'
import { config } from '../../../config.js'

export async function createUser() {
    it('Create user account', async function () {
        const requestBody = await getCreateUserRequestBody()
        await request(this, 'POST', '/user', requestBody, false, 
            {
                statusCode : 201,
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'email', value: requestBody.email},
                                    {path: 'surname', value: requestBody.surname}
                                ]
            }
        )
    })
}

export async function loginUser() {
    it('Login user', async function () {
        const requestBody = await getLoginUserRequestBody()
        await request(this, 'POST', '/login', requestBody, false, 
            {
                statusCode : 200,
                expectedFields: ['token'],
                expectedValues: [
                                    {path: 'message', value: 'Login successful'}
                                ],
                executionVariables: [
                    {path: 'token', name: 'token'}
                ]
            }
        )
    })
}

export async function deleteUser() {
    it('Remove user account', async function () {
        await request(this, 'DELETE', '/user', undefined, true, 
            {
                statusCode : 200
            }
        )
    })
}