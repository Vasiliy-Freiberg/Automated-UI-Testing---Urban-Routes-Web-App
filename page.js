module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumberField: '#number',
    cardCodeField: '//input[@id="code" and contains(@class, "card-input")]',
    messageField: '#comment.input',
    messageCreatedField: '//input[@value="Please, do not drive too fast"]',
    orderRequirementsStatus: '.switch-input',
    // '//div[@class="r-sw-label" and text()="Blanket and handkerchiefs"]//input[@class="switch-input"]',
// '.switch-input'

    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    planButton: '//img[@alt="Supportive"]',
    planButtonActive: '//div[@class="tcard active"]',
    paymentButton: '.pp-button',
    addCardButton: 'div.pp-title=Add card',
    linkCardButton: 'button=Link',
    cardModalCloseButton: '.payment-picker .section.active .close-button',
    cardChosenButton: '//div[text()="Card"]',
    addIceCreamButton: '.counter-plus',
    iceCreamAmountButton: '//div[@class="counter-value" and text()="2"]',
    carSearchButton: '.smart-button-main',
    
    // Modals
    phoneNumberModal: '.modal',
    paymentModal: '.modal',
    carSearchModal: '//div[@class="order-header-title" and text()="Car search"]',
    driverInfoModal: '.order-body',
    
    // Containers
    tariffGeneralBlock: '.workflow-subcontainer',

    // Checkboxes
    cardLinkedBox: '#card-1',

    // Dropdowns
    // orderRequirementsArrow: '//div[text()="Order requirements"]',
    orderRequirementsArrow: '.reqs',

    // Radiobuttons
    orderSwitchButton: '//span[@class="slider round"]',
    
    // Functions

    fillOnlyAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
    },
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    fillCardDetails: async function(cardNumber, cardCode) {
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.setValue(cardNumber);
        const cardCodeField = await $(this.cardCodeField);
        await cardCodeField.setValue(cardCode);
        await browser.keys('Tab');
        const linkCardButton = await $(this.linkCardButton);
        // await linkCardButton.waitForDisplayed();
        await linkCardButton.click();
},
    writeMessage: async function(messageText) {
    const messageField = await $(this.messageField);
    await messageField.setValue(messageText);
    
}
}