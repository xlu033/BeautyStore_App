//products in Beauty Store

/*
//use the Faker.js package to generate a larger number of products
var faker = require("faker");
var data = [];
var categories = ["Skincare", "Makeup", "Hair", "Fragrance", "Bath & Body", "Tools"];
var size = ["5.1 oz/ 150 mL", "0.5 oz/ 14 g", "1 oz/ 30 mL", "5 oz/ 125 ml", "0.019 oz/ 0.55 mL","8.5 oz/ 250 mL","1.70 oz/ 50 mL"];
seed(123);

for (let i = 1; i <= 300; i++) {
    var category = helpers.randomize(categories);
    data.push({
        id: i,
        name: commerce.productName(),
        category: category,
        size: size,
        description: `${category}: ${lorem.sentence(3)}`,
        price: Number(commerce.price())
    })
}

module.exports = function () {
    return {
        categories: categories,
        products: data,
        orders: []
        }
}
*/

module.exports = function () {
    return {
        categories: ["Skincare", "Makeup", "Hair", "Fragrance", "Bath & Body", "Tools"],
        products: [
            //id, name, category, size, description, price
            { id: 1, name: "Lemon Moisturizer", category: "Skincare", size: "100ml",
                description: "A protein moisturizer to improve the look of skin’s tone, texture, and firmness.", price: 75.00 },
            { id: 2, name: "Lemon Cleanser", category: "Skincare", size: "5.1 oz/ 150 mL",
                description: "A face wash that gently removes impurities, and tones for clean, balanced skin.", price: 48.00 },
            { id: 3, name: "Sunlit Eye cream", category: "Skincare", size: "0.5 oz/ 14 g",
                description: " A moisturizing eye cream to hydrate, smooth, visibly de-puff, and brighten the look of the under-eye area.", price: 35.00 },
            { id: 4, name: "Happy Sunscreen SPF 42", category: "Skincare", size: "1 oz/ 30 mL",
                description: "An ultra-light, oil-free fluid with broad-spectrum SPF 42 for daily protection.",
                price: 25.00 },
            { id: 5, name: "Marigold Face Mask", category: "Skincare", size: "5 oz/ 125 ml",
                description: "A face mask that thoroughly hydrates, plumps, and brightens skin.", price: 42.00 },
            { id: 6, name: "Shiny Foundation", category: "Makeup", size:"1 oz/ 30 mL",
                description: "A foundation that delivers buildable medium coverage and a luminous, glowy skin finish for a natural, flawless makeup look.", price: 48.00 },
            { id: 7, name: "Contour", category: "Makeup", size:"0.25 oz/ 7.10 g",
                description: "A contour in a long-wear, light-as-air matte formula in a range of shades for all skin tones.",
                price: 29.95 },
            { id: 8, name: "Waterproof Eyeliner", category: "Makeup", size: "0.019 oz/ 0.55 mL",
                description: "An easy-application, waterproof liquid liner that stays on all day and night.", price: 29.99 },
            { id: 9, name: "Mascara", category: "Makeup", size: "0.43 fl oz / 13 mL",
                description: "A mascara that delivers instant volume, multidimensional length, and weightless lift in a single stroke.", price: 35.00 },
            { id: 10, name: "Eyeshadow", category: "Makeup", size:"10 x 0.03 oz/ 0.95 g",
                description: "A cruelty-free eyeshadow palette in matte, shimmer, and glitter finishes.", price: 48.00 },
            { id: 11, name: "Blush", category: "Makeup", size: "0.16 oz/ 4.8 g",
                description: "An pressed powder blush that delivers healthy-looking color to flatter any skin tone.", price: 32.00 },
            { id: 12, name: "Lipstick", category: "Makeup", size: "0.12 oz/ 3.4 g",
                description: "A full-coverage, long-wearing, matte-to-semi-matte lipstick.", price: 36.00 },
            { id: 13, name: "Shampoo", category: "Hair", size:"8.5 oz/ 250 mL",
                description: " A reparative, moisture-balancing shampoo formulated for any type of hair.", price: 16.50 },
            { id: 14, name: "Conditioner", category: "Hair", size: "8.5 oz/ 250 mL",
                description: "A moisture-balancing conditioner that gently cleanses and repairs weakened hair.",
                price: 19.95 },
            { id: 15, name: "Hair mask", category: "Hair", size:"8.5 oz/ 250 mL",
                description: "A high-performance, oil-rich hair mask that improves hydration, texture, elasticity, shine, and manageability.", price: 29.50 },
            { id: 16, name: "Hair oil", category: "Hair", size: "3.4 oz/ 100 mL",
                description: "An oil-infused hair treatment and styler that promotes softer, stronger hair.",
                price: 39.99 },
            { id: 17, name: "L'étoile filante Eau de Parfum", category: "Fragrance", size:"1.6 oz/ 47 mL",
                description: "The couture elegance is made of three qualities of jasmine which bring a luxurious femininity.", price: 68.00 },
            { id: 18, name: "Mon Chouchou Eau de Parfum", category: "Fragrance", size:"1.70 oz/ 50 mL",
                description: "a new sparkling fragrance exudes sensuality and femininity.", price: 79.95 },
            { id: 19, name: "Les Retrouvailles Eau de Toilette", category: "Fragrance", size:"3.4 oz/ 100 mL",
                description: "Blended with vanilla bourbon, this mix is twisted with a radiant trio of modern wood.",
                price: 69.95 },
            { id: 20, name: "La Mytrille Eau de Toilette", category: "Fragrance", size:"6.8 oz/ 200 mL",
                description: "A fresh and spicy fragrance for men with notes of amber, leather, and tangerine.", price: 120.00 },
            { id: 21, name: "Crush Fragrance Mist", category: "Fragrance", size:"3.04 oz/ 90 mL",
                description: "A new beauty ritual leaves your hair delicately scented.",
                price: 39.00 },
            { id: 22, name: "Lemon Shower", category: "Bath & Body", size: "8.4 oz/ 250 mL",
                description: "A daily multi-vitamin cleanser for skin health in lemon flavor.", price: 15.00 },
            { id: 23, name: "Coconut Bath Soak", category: "Bath & Body", size:"8 oz/ 226 g ",
                description: "A bath soak with skin-softening organic coconut milk as its base, that is perfect for hydrating and softening skin.", price: 22.95 },
            { id: 24, name: "Rose Body Scrub", category: "Bath & Body", size: "7.8 oz/ 220 g",
                description: "A soft-as-sand body scrub that gently exfoliates and moisturizes.", price: 32.00 },
            { id: 25, name: "Lavender Deodorant", category: "Bath & Body", size: "2.4 oz/ 70 mL",
                description: "A deodorant to soothe underarms and aid in odor reduction.", price: 15.00 },
            { id: 26, name: "Hair Dryer", category: "Tools", size:"",
                description: "A  hair dryer that saves energy while minimizing thermal exposure for beautifully styled, healthy-looking hair.", price: 175.00 },
            { id: 27, name: "Curling Iron", category: "Tools", size:"",
                description: "A curling iron for shiny, long-lasting curls in just one pass.", price: 125.00 },
            { id: 28, name: "Makeup Brush Set", category: "Tools", size:"",
                description: "A set of 10 brushes curated to include all the essentials to create a complete makeup look.", price: 75.00 },
            { id: 29, name: "Hair Removal", category: "Tools", size:"",
                description: "A set of three disposable premium razors with high-quality blades that seamlessly remove body hair.", price: 27.00 },
            { id: 30, name: "Travel Cases", category: "Tools", size:"",
                description: "A four-piece collection of hair essentials in a travel-friendly set.", price: 36.50 }
        ],
        orders: []
    }
}
