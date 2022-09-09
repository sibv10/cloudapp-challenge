import HomePage from '../pages/home-page'
import LoginPage from '../pages/login-page'
import DashboardPage from '../pages/dashboard-page'
import testUser from '../fixtures/testUser.json'

describe('Desktop: Login Page', () => {

    beforeEach(() => {
        HomePage.navigate()
        HomePage.elems.loginLnk().click()
    })

    it('Can log in & out', () => {
        LoginPage.login()
        DashboardPage.isLoggedIn()
        DashboardPage.logout()
        LoginPage.isLoggedOut()
    })
    
    it('displays error banner for invalid password', () => {
        LoginPage.login(testUser.email, 'badPassword!')
        LoginPage.hasTextElement('Invalid email / password combination')
    })

})
