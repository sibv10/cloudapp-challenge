import LoginPage from '../pages/login-page'
import DashboardPage from '../pages/dashboard-page'
import SettingsPage from '../pages/settings-page'

describe('Desktop: Dashboard Page', () => {

    beforeEach(() => {
        LoginPage.navigate()
        LoginPage.login()
        DashboardPage.isLoggedIn()
        DashboardPage.elems.avatarDd().click()
        DashboardPage.elems.settingsDdi().click()
    })

    afterEach(() => {
        DashboardPage.logout()
    })

    it('Can change avatar', () => {
        SettingsPage.changeAvatar('icon-heart.png')
        // @BUG? success banner displays twice as two separate elements
        SettingsPage.hasTextElement('Account updated successfully')
        SettingsPage.hasMatchingAvatarInMenu()
    })

    it('displays error banner for oversized image', () => {
        SettingsPage.changeAvatar('icon-oversize.png')
        SettingsPage.hasTextElement('Avatar Max size is 500x500px')
    })
    
    it('displays error banner for no image', () => {
        SettingsPage.elems.submitBtn().click()
        SettingsPage.hasTextElement('You need to fill some details or skip this step.')
    })

})
