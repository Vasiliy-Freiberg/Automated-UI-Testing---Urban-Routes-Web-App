module.exports = {
    getPhoneNumber: function(countryCode) {
        const number = Math.floor(1000000000 + Math.random() * 9000000000)
        return `${countryCode}${number}`
    },
    getElementByText: async function(obj) {
        return await $(`div=${obj.toString()}`);
    },
    getCardNumber: function() {
        const min = 100000000000;  // Минимальное 12-значное число
        const max = 999999999999;  // Максимальное 12-значное число
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getCardCode: function() {
        const min = 10;  // Минимальное 2-значное число
        const max = 99;  // Максимальное 2-значное число
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
