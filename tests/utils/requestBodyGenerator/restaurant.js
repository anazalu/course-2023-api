import restaurantRequestBody from '../../data/restaurant/create_restaurant.json' assert { type: 'json' }
import { generateRandomPassword } from '../helpers.js'

export async function getCreateRestaurantRequestBody() {

    const name = await generateRandomPassword()
    const description = await generateRandomPassword()

    global.executionVariables['restaurantName'] = name
    global.executionVariables['restaurantDescription'] = description

    restaurantRequestBody.name = name
    restaurantRequestBody.description = description
    
    return restaurantRequestBody
}