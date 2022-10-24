const ScreenPhoneModel = require('../models/phone/screen');

const save = async (screen) => {
    const newScreen = await ScreenPhoneModel.create(screen);
    await newScreen.save();
}

module.exports = { save }