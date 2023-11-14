import { createUser, loginUser, deleteUser } from '../../steps/user/user.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

it('User', () => {
    describe(`CRUD User`, () => {
        createUser()
        loginUser()
        deleteUser()
    })
})