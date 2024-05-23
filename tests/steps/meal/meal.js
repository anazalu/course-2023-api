import { request } from '../../utils/requests.js'
import { generateCreateMealRequestBody } from '../../utils/requestBodyGenerator/meal.js'
import { config } from '../../../config.js'

export async function createMeal() {
    it('Create meal', async function () {
        const requestBody = await generateCreateMealRequestBody()

        await request(this, 'POST', `/restaurants/${global.executionVariables['restaurantId']}/meals`, requestBody, true, 
            {
                statusCode : 201,
                expectedFields: ['_id', 'user'],
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'description', value: requestBody.description},
                                    {path: 'amount', value: requestBody.amount}
                                ],
                executionVariables: [
                    {path: '_id', name: 'mealId'},
                    {path: 'name', name: 'mealName'},
                    {path: 'description', name: 'mealDescription'},
                    {path: 'amount', name: 'mealAmount'}
                ],
                expectedTypes: [
                    {path: 'created', type: 'string'}
                ]
            }
        )
    })
}

export async function deleteMeal() {
    it('Delete meal', async function () {
        await request(this, 'DELETE', `/restaurants/${global.executionVariables['restaurantId']}/meals/${global.executionVariables['mealId']}`, undefined, true, 
            {
                statusCode : 200,
                expectedValues: [
                                    {path: 'message', value: 'Meal removed'}
                                ]
            }
        )
    })
}

export async function getMeals() {
    it('Get meals', async function () {
        await request(this, 'GET', `/restaurants/${global.executionVariables['restaurantId']}/meals`, undefined, true, 
            {
                statusCode : 200,
                expectedValuesInArrayOfObjects: {
                    fields: [
                        {path: 'name', value: global.executionVariables['mealName']},
                        {path: 'description', value: global.executionVariables['mealDescription']},
                        {path: 'amount', value: global.executionVariables['mealAmount']}
                    ],
                    idKey: '_id',
                    value: global.executionVariables['mealId']
                }
            }
        )
    })
}