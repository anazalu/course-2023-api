import { request } from '../../utils/requests.js'
import { generateCreateRestaurantRequestBody } from '../../utils/requestBodyGenerator/restaurant.js'
import { config } from '../../../config.js'

export async function createRestaurant() {
    it('Create restaurant', async function () {
        const requestBody = await generateCreateRestaurantRequestBody()

        await request(this, 'POST', '/restaurants', requestBody, true, 
            {
                statusCode : 201,
                expectedFields: ['_id', 'user'],
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'description', value: requestBody.description}
                                ],
                executionVariables: [
                    {path: '_id', name: 'restaurantId'},
                    {path: 'name', name: 'restaurantName'},
                    {path: 'description', name: 'restaurantDescription'}
                ],
                expectedTypes: [
                    {path: 'user', type: 'string'}
                ]
            }
        )
    })
}


export async function updateRestaurant() {
    it('Update restaurant', async function () {
        const requestBody = await generateCreateRestaurantRequestBody()

        await request(this, 'PATCH', `/restaurants/${global.executionVariables['restaurantId']}`, requestBody, true, 
            {
                statusCode : 200,
                expectedValues: [
                                    {path: '_id', value: global.executionVariables['restaurantId']},
                                    {path: 'name', value: global.executionVariables['restaurantName']},
                                    {path: 'description', value: global.executionVariables['restaurantDescription']},
                                ],
                expectedFields: ['user']
            }
        )
    })
}


export async function getRestaurant() {
    it('Get restaurant', async function () {
        await request(this, 'GET', `/restaurants/${global.executionVariables['restaurantId']}`, undefined, true, 
            {
                statusCode : 200,
                expectedValues: [
                                    {path: '_id', value: global.executionVariables['restaurantId']},
                                    {path: 'name', value: global.executionVariables['restaurantName']},
                                    {path: 'description', value: global.executionVariables['restaurantDescription']},
                                ],
                expectedFields: ['user']
            }
        )
    })
}

export async function deleteRestaurant(statusCode = 200, message = 'Restaurant removed') {
    it('Delete restaurant', async function () {
        await request(this, 'DELETE', `/restaurants/${global.executionVariables['restaurantId']}`, undefined, true, 
            {
                statusCode : statusCode,
                expectedValues: [
                                    {path: 'message', value: message}
                                ]
            }
        )
    })
}

export async function negativeCreateRestaurant(requestBody, asserts, testCaseName, statusCode) {
    it(testCaseName, async function () {
        await request(this, 'POST', '/restaurants', requestBody, true, 
            {
                statusCode : statusCode,
                expectedValues: asserts
            }
        )
    })
}