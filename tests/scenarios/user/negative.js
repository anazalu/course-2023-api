import { createUserWithoutPassword, createUserWithoutEmail } from '../../steps/user/user.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

it('User negative test set', () => {
    describe(`Create user negative`, () => {
        createUserWithoutPassword()
        createUserWithoutEmail()
    })
})
