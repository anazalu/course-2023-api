import mealRequestBody from '../../data/meal/create_meal.json' assert { type: 'json' }
import { config } from '../../../config.js'
import { generateRandomEmail, generatePassword, generateString, generateInteger } from '../helpers.js'

export async function generateCreateMealRequestBody() {
    mealRequestBody.name = await generateString()
    mealRequestBody.description = await generateString()
    mealRequestBody.amount = await generateInteger()

    return mealRequestBody
}