const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {

    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillOnlyAddresses('East 2nd Street, 601', '1300 1st St');
        const tariffGeneralBlock = await $(page.tariffGeneralBlock);
        await expect(tariffGeneralBlock).toBeDisplayed();
    })

    it('should select supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const planButton = await $(page.planButton);
        await expect(planButton).toBeExisting();
        await planButton.click();
        const planButtonActive = await $(page.planButtonActive);
        await expect(planButtonActive).toBeExisting();
    })

    it('should fill in the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should add a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentButton = await $(page.paymentButton);
        await paymentButton.click();
        const paymentModal = await $(page.paymentModal);
        await expect(paymentModal).toBeExisting();
        const addCardButton = await $(page.addCardButton);
        await addCardButton.click();
        const cardNumberField = await $(page.cardNumberField);
        await expect(cardNumberField).toBeExisting();
        // function filling card details
        const cardNumber = helper.getCardNumber();
        const cardCode = helper.getCardCode();
        await page.fillCardDetails(cardNumber, cardCode);
        const cardLinkedBox = await $(page.cardLinkedBox);
        await cardLinkedBox.isSelected();
        const cardModalCloseButton = await $(page.cardModalCloseButton);
        await cardModalCloseButton.click();
        const cardChosenButton = await $(page.cardChosenButton);
        await expect(cardChosenButton).toBeExisting();
    })

    it('should write a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');        
        await page.writeMessage("Please, do not drive too fast");
        const messageCreatedField = await $(page.messageCreatedField);
        await expect(messageCreatedField).toBeExisting();
    })

        it('should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const planButton = await $(page.planButton);
        await expect(planButton).toBeExisting();
        await planButton.click();
        const orderRequirementsArrow = await $(page.orderRequirementsArrow);
        await orderRequirementsArrow.waitForClickable();
        await orderRequirementsArrow.click();
        const orderSwitchButton = await $(page.orderSwitchButton);
        await orderSwitchButton.waitForDisplayed();
        await orderSwitchButton.click();
        const orderRequirementsStatus = await $(page.orderRequirementsStatus);
        await expect(orderRequirementsStatus).toBeChecked();
    })

        it('should order 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const planButton = await $(page.planButton);
        await expect(planButton).toBeExisting();
        await planButton.click();
        const orderRequirementsArrow = await $(page.orderRequirementsArrow);
        await orderRequirementsArrow.waitForClickable();
        await orderRequirementsArrow.click();
        const addIceCreamButton = await $(page.addIceCreamButton);
        await addIceCreamButton.click();
        await addIceCreamButton.click();
        const iceCreamAmountButton = await $(page.iceCreamAmountButton);
        await expect(iceCreamAmountButton).toBeExisting();
    })

    it('should be car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const planButton = await $(page.planButton);
        await expect(planButton).toBeExisting();
        await planButton.click();
        await page.writeMessage("Please, do not drive too fast");
        const messageCreatedField = await $(page.messageCreatedField);
        await (messageCreatedField).waitForExist();
        const carSearchButton = await $(page.carSearchButton);
        await carSearchButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await expect(carSearchModal).toBeDisplayed();
    })

        it('should be driver info', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const planButton = await $(page.planButton);
        await expect(planButton).toBeExisting();
        await planButton.click();
        await page.writeMessage("Please, do not drive too fast");
        const messageCreatedField = await $(page.messageCreatedField);
        await (messageCreatedField).waitForExist();
        const carSearchButton = await $(page.carSearchButton);
        await carSearchButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await (carSearchModal).waitForExist();
        const driverInfoModal = await $(page.driverInfoModal);
        await expect(driverInfoModal).toBeDisplayed();
    })

    it('should make the full order', async () => {
        // the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Supportive plan
        const planButton = await $(page.planButton);
        await expect(planButton).toBeExisting();
        await planButton.click();
        // the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // credit card
        const paymentButton = await $(page.paymentButton);
        await paymentButton.click();
        const paymentModal = await $(page.paymentModal);
        await expect(paymentModal).toBeExisting();        
        const addCardButton = await $(page.addCardButton);
        await addCardButton.click();
        const cardNumberField = await $(page.cardNumberField);
        await expect(cardNumberField).toBeExisting();
        const cardNumber = helper.getCardNumber();
        const cardCode = helper.getCardCode();
        await page.fillCardDetails(cardNumber, cardCode);
        const cardLinkedBox = await $(page.cardLinkedBox);
        await cardLinkedBox.isSelected();
        const cardModalCloseButton = await $(page.cardModalCloseButton);
        await cardModalCloseButton.click();
        const cardChosenButton = await $(page.cardChosenButton);
        await expect(cardChosenButton).toBeExisting();
        // message for the driver
        await page.writeMessage("Please, do not drive too fast");
        const messageCreatedField = await $(page.messageCreatedField);
        await (messageCreatedField).waitForExist();
        // Blanket and handkerchiefs
        const orderRequirementsArrow = await $(page.orderRequirementsArrow);
        await orderRequirementsArrow.waitForClickable();
        await orderRequirementsArrow.click();
        const orderSwitchButton = await $(page.orderSwitchButton);
        await orderSwitchButton.waitForDisplayed();
        await orderSwitchButton.click();
        const orderRequirementsStatus = await $(page.orderRequirementsStatus);
        //await expect(orderRequirementsStatus).toBeChecked();
        // 2 ice creams
        const addIceCreamButton = await $(page.addIceCreamButton);
        await addIceCreamButton.click();
        await addIceCreamButton.click();
        const iceCreamAmountButton = await $(page.iceCreamAmountButton);
        await expect(iceCreamAmountButton).toBeExisting();
        // car search modal
        const carSearchButton = await $(page.carSearchButton);
        await carSearchButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await (carSearchModal).waitForExist();
        // the driver info
        const driverInfoModal = await $(page.driverInfoModal);
        await expect(driverInfoModal).toBeDisplayed();
    })

})