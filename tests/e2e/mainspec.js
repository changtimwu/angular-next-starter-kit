describe('Protractor Demo App', function() {
    it('after click dropdown there should be Item 1 and Item 2 ', function() {
      browser.get('http://localhost:8080/');
      browser.driver.sleep(1000);
      element(by.partialButtonText('Dropdown')).click();
      browser.sleep(1000);

      expect( element(by.linkText("Item 1")).isPresent()).toBe(true);
      expect( element(by.linkText("Item 2")).isPresent()).toBe(true);

    });
});
