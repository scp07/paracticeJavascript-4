// work with optional chaining
const openigHour = {
    sun:{
        open: 3,
        close: 4
    },
    mon:{
        open: 4,
        close:3,
    },
    tue:{
        open:4,
        close:4,
    }
}
const Shop = {
    ShopeName:'Buy more here',
    ShopLocation:'Patuakhali sadar',
    Items:['foodItems','GroceryItems','Beauty products','Eloctrics items'],
    openigHour,
}

console.log(Shop.openigHour?.mon?.open);
Shop.Age = Shop.age ?? 23;
console.log(Shop)

const name = Shop.ShopeName ?? 'samour';

const ShopeMore = {...Shop}
ShopeMore.ShopeName = "Shope zone";
console.log(ShopeMore);
