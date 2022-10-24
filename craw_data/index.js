require('dotenv').config();
const cheerio = require('cheerio');
const axios = require('axios');
const mongoose = require('mongoose');
const URI = process.env.MONGODB_URL;

mongoose.connect(`${URI}`, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}, (err) => {
    if (err) throw err;
    console.log("MongoDB connected!!");
});

const getDetailItem = async (url) => {
    const { data } = await axios.get(url);
    let $ = cheerio.load(data);
    let _product = {
        name: "",
        price: 0,
        description: "",
        images: []
    };

    // name
    $('h1.product_title.entry-title').each((index, element) => {
        let $name = cheerio.load($(element).html());
        _product.name = $name.text().slice(5);
    });

    // images
    $('div.woocommerce-product-gallery__image').each((index, element) => {
        let $image = cheerio.load($(element).html());
        _product.images.push($image('img').attr('src'));
    });

    // price
    $('p.price').each((index, element) => {
        let $price = cheerio.load($(element).html());
        _product.price = $price('ins').text().slice(0, -1).trim();
    })

    // description

}


getDetailItem("https://dienthoaivui.com.vn/thay-man-hinh-iphone-xs-max");