describe('render form component', () => {

    beforeAll(() => {
        browser.url('/contact');
    });

    it('render new contact form', () => {

        browser.setValue('#firstName', 'Bhavik');
        browser.setValue('#lastName', 'Kheni');
        browser.setValue('#email', 'kheni@gmail.com');

        $('#button').click();
        browser.pause(5000);
        expect($('#item').$$('li')[0].getText()).toContain('Bhavik');
        expect($('#item').$$('li')[1].getText()).toContain('Kheni');
        expect($('#item').$$('li')[2].getText()).toContain('kheni@gmail.com');
    });
});