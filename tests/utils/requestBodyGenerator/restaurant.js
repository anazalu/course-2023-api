import restaurantRequestBody from '../../data/restaurant/create_restaurant.json' assert { type: 'json' }
import { config } from '../../../config.js'
import { generateString, generatePassword } from '../helpers.js'

export async function generateCreateRestaurantRequestBody() {
    restaurantRequestBody.name = await generateString()
    restaurantRequestBody.description = await generateString(20)

    global.executionVariables['restaurantName'] = restaurantRequestBody.name
    global.executionVariables['restaurantDescription'] = restaurantRequestBody.description
    
    return restaurantRequestBody
}