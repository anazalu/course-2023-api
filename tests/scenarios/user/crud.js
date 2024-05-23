import { createUser, loginUser, deleteUser } from '../../steps/user/user.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

it('User test set', () => {
    describe(`CRUD User`, () => {
        createUser()
        loginUser()
        deleteUser()
    })
})
