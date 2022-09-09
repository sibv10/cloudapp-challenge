import SignupPage from '../pages/signup-page'
import OnboardingPage from '../pages/onboarding-page'
import testUser from '../fixtures/testUser.json'

describe('Desktop: Signup Page', () => {

    beforeEach(() => {
        SignupPage.navigate()
    })

    it('Can sign up with valid credentials', () => {
        const newEmail = SignupPage.generateEmailAlias();

        SignupPage.signup(newEmail, testUser.password)
        OnboardingPage.isSignedUp()
    })

    it('displays error banner when password is invalid format', () => {
        const newEmail = SignupPage.generateEmailAlias();

        SignupPage.signup(newEmail, 'badPassword!') 
        SignupPage.hasTextElement(
            'Validation failed: Password must be at least 8 characters long, ' +
            'contain uppercase and lowercase letters and a number.'
        )
    })

    it('displays error banner when email is taken', () => {
        SignupPage.signup()
        SignupPage.hasTextElement('Validation failed: Email has already been taken')
    })

})
