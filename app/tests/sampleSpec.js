describe('home page tests', function() {

  it('should show the greeting', function() {
    browser.get('http://localhost:7400/app/#/home');

    var greeting = element(by.binding('greeting')).getText();

    console.log('greeting' + greeting);
    expect(greeting).toBe('Good Afternoon, Cisco 115');

  });

  it('should default to the home page', function() {
    browser.get('http://localhost:7400/app/');

   	var url = browser.getLocationAbsUrl()

   	expect(url).toMatch('home');


  });

});