const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const { BrowserRouter } = require('react-router-dom');

describe('My Login application', () => {

    beforeEach(() => {
        browser.url('https://englishmasterteacher.netlify.app/')
    })

    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should have the right title', () => {
        expect(browser).toHaveTitle('English Master Teacher')
        // title refers to meta title on html
    })
    
    it('should use elements as first class citizen', function () {
        var input = browser.element('.intro-heading');
        input.setValue('some text');
        // is the same as calling
        browser.setValue('.intro-heading', 'some text');
    });

    it("home page is responsive to window size ", function() {
    browser.setWindowSize(100, 1000);
    browser.pause(5000);
    console.log(browser.getWindowSize());
    });

    it('increases screen to maximum size', () => {
        browser.maximizeWindow();
        browser.pause(5000);
        console.log(browser.getWindowSize());
    });

   it("minimize Command", function() {
       browser.maximizeWindow();
       browser.pause(5000);
       browser.minimizeWindow();
   });

   it("fullscreenWindow Command", function() {
    browser.pause(5000);
    browser.fullscreenWindow();
  });

  it("Pause example ", function() {
    browser.pause(5000);
   });

   it("refresh() Command", function() {
    browser.refresh();
    console.log(browser.getTitle());
   });

//    it("$$ example ", function() {
//     const lstHeaderLinks = $$(".//*[@class='navbar-nav']/li");
//     lstHeaderLinks.forEach(element => {
//     console.log(element.getText());
//     });
});


// webdriver works with example e2e test in vue. 