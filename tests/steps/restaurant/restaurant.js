import { request } from '../../utils/requests.js'
import { getCreateOrUpdateRestaurantRequestBody } from '../../utils/requestBodyGenerator/restaurant.js'

export async function createRestaurant() {
    it('Create restaurant', async function () {
        const requestBody = await getCreateOrUpdateRestaurantRequestBody()
        await request(this, 'POST', '/restaurants', requestBody, true, 
            {
                statusCode : 201,
                expectedFields: ['_id', 'user'],
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'description', value: requestBody.description}
                                ],
                executionVariables: [
                    {
                        path: '_id', name: 'restaurantId'
                    }
                ]
            }
        )
    })
}

export async function deleteRestaurant() {
    it('Remove restaurant', async function () {
        await request(this, 'DELETE', `/restaurants/${global.executionVariables['restaurantId']}`, undefined, true, 
            {
                statusCode : 200,
                expectedValues: [
                    {path: 'message', value: 'Restaurant removed'}
                ]
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
                    {path: 'description', value: global.executionVariables['restaurantDescription']}
                ],
                expectedFields: ['user']
            }
        )
    })
}

export async function updateRestaurant() {
    it('Update restaurant', async function () {
        const requestBody = await getCreateOrUpdateRestaurantRequestBody()
        await request(this, 'PATCH', `/restaurants/${global.executionVariables['restaurantId']}`, requestBody, true, 
            {
                statusCode : 200,
                expectedFields: ['_id', 'user'],
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'description', value: requestBody.description}
                                ],
                expectedTypes: [
                    {
                        path: '_id', type: 'string'
                    }
                ]
            }
        )
    })
}

export async function negativeCreateRestaurant(requestBody, testCaseName, asserts) {
    it(`Create restaurant ${testCaseName}`, async function () {
        await request(this, 'POST', '/restaurants', requestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                    {path: asserts.path, value: asserts.value}
                ]
            }
        )
    })
}