let tShirts = [
    {inCart: 1, type: 'T-Shirts', name: 'Yaztromo', price: 10, brand: 'Military', style: 'T-Shirt', count: 5, img: '/assets/images/prod/tshirts1.png', search: ['футболка', 'камуфляж', 'зеленый'],},
    {inCart: 1, type: 'T-Shirts', name: 'Evard', price: 13, brand: 'Military', style: 'T-Shirt', count: 2, img: '/assets/images/prod/tshirts2.jpg', search: ['футболка', 'зеленый'],},
    {inCart: 1, type: 'T-Shirts', name: 'Flagg', price: 23, brand: 'Military', style: 'T-Shirt', count: 3, img: '/assets/images/prod/tshirts3.png', search: ['футболка', 'зеленый', 'принт']},
    {inCart: 1, type: 'T-Shirts', name: 'Stibbons', price: 30, brand: 'Black Diamond', style: 'T-Shirt', count: 6, img: '/assets/images/prod/tshirts4.png', search: ['футболка', 'зеленый']},
    {inCart: 1, type: 'T-Shirts', name: 'Morgon', price: 33, brand: 'Black Diamond', style: 'T-Shirt', count: 8, img: '/assets/images/prod/tshirts5.png', search: ['футболка', 'оранжевый']},
    {inCart: 1, type: 'T-Shirts', name: 'Malfoy', price: 35, brand: 'Black Diamond', style: 'V-Neck', count: 3, top: true, img: 'assets/images/prod/tshirtsv.jpg', search: ['футболка', 'красный', 'v neck']},
    {inCart: 1, type: 'T-Shirts', name: 'Radagast', price: 9, brand: 'Salomon', style: 'V-Neck', count: 6, img: 'assets/images/prod/tshirtsv2.png', search: ['футболка', 'белый', 'v neck']},
    {inCart: 1, type: 'T-Shirts', name: 'Rincewind', price: 12, brand: 'Salomon', style: 'Polo', count: 9, img: 'assets/images/prod/polo1.png', search: ['поло', 'красный']},
    {inCart: 1, type: 'T-Shirts', name: 'Dresden', price: 51, brand: 'Salomon', style: 'Polo', count: 2, img: 'assets/images/prod/polo2.png', search: ['поло', 'серый']},
    {inCart: 1, type: 'T-Shirts', name: 'Voldemort', price: 25, brand: 'Salomon', style: 'Polo', count: 12, top: true, img: 'assets/images/prod/polo3.png', search: ['поло', 'синий']}
];

let sShirts = [
    {inCart: 1, type: 'S-Shirts', name: 'Gonzalez', price: 34, brand: 'The North Face', style: 'Pullover', count: 6, img: 'assets/images/prod/pull1.png', search: ['пуловер', 'серый', 'кофта']},
    {inCart: 1, type: 'S-Shirts', name: 'Ines', price: 56, brand: 'The North Face', style: 'Jumper', count: 17, img: 'assets/images/prod/jum1.png', search: ['джампер', 'красный', 'кофта', 'принт']},
    {inCart: 1, type: 'S-Shirts', name: 'Kelley', price: 43, brand: 'The North Face', style: 'Hoodie', count: 14, img: 'assets/images/prod/hood1.png', search: ['худи', 'черный', 'кофта', 'капюшон']},
    {inCart: 1, type: 'S-Shirts', name: 'Sharples', price: 21, brand: 'Salomon', style: 'Pullover', count: 4, img: 'assets/images/prod/pull2.png', search: ['пуловер', 'черный', 'кофта']},
    {inCart: 1, type: 'S-Shirts', name: 'Wilks', price: 12, brand: 'Salomon', style: 'Pullover', count: 2, img: 'assets/images/prod/pull3.jpg', search: ['пуловер', 'белый', 'кофта']},
    {inCart: 1, type: 'S-Shirts', name: 'Cabrera', price: 32, brand: 'Salomon', style: 'Pullover', count: 4, top: true, img: 'assets/images/prod/pull4.png', search: ['пуловер', 'бежевый', 'кофта']},
    {inCart: 1, type: 'S-Shirts', name: 'Etienne', price: 45, brand: 'Columbia', style: 'Hoodie', count: 5, img: 'assets/images/prod/hood2.png', search: ['худи', 'желтый', 'кофта', 'капюшон']},
    {inCart: 1, type: 'S-Shirts', name: 'Hail', price: 27, brand: 'Columbia', style: 'Jumper', count: 3, img: 'assets/images/prod/jum2.png', search: ['джампер', 'красный', 'принт', 'кофта']},
    {inCart: 1, type: 'S-Shirts', name: 'Hania', price: 41, brand: 'Columbia', style: 'Jumper', count: 6, img: 'assets/images/prod/jum3.png', search: ['джампер', 'принт', 'красный', 'зеленый']},
    {inCart: 1, type: 'S-Shirts', name: 'Barabada', price: 23, brand: 'Columbia', style: 'Jumper', count: 7, img: 'assets/images/prod/jum4.png', search: ['джампер', 'принт', 'зеленый']},
];


let jackets = [
    {inCart: 1, type: 'Jackets', name: 'Ridcully', price: 45, brand: 'The North Face', style: 'Bomber', count: 14, top: true, img: 'assets/images/prod/bom1.png', search: ['бомбер', 'черный', 'куртка']},
    {inCart: 1, type: 'Jackets', name: 'Weasley', price: 63, brand: 'The North Face', style: 'Denim', count: 4, img: 'assets/images/prod/den1.png', search: ['джинсовка', 'куртка']},
    {inCart: 1, type: 'Jackets', name: 'Saruman', price: 50, brand: 'Columbia', style: 'Trucker', count: 7, img: 'assets/images/prod/truc1.png', search: ['джинсовка', 'куртка', 'белый']},
    {inCart: 1, type: 'Jackets', name: 'Rahman', price: 47, brand: 'Salomon', style: 'Bomber', count: 8, top: true, img: 'assets/images/prod/bom2.png', search: ['бомбер', 'куртка', 'красный']},
    {inCart: 1, type: 'Jackets', name: 'Waters', price: 24, brand: 'Salomon', style: 'Bomber', count: 9, img: 'assets/images/prod/bom3.png', search: ['бомбер', 'куртка', 'белый']},
    {inCart: 1, type: 'Jackets', name: 'Gilmore', price: 67, brand: 'Salomon', style: 'Bomber', count: 1, img: 'assets/images/prod/bom4.png', search: ['бомбер', 'куртка', 'красный']},
    {inCart: 1, type: 'Jackets', name: 'Millicent', price: 23, brand: 'Columbia', style: 'Bomber', count: 5, img: 'assets/images/prod/bom5.png', search: ['бомбер', 'куртка', 'черный']},
    {inCart: 1, type: 'Jackets', name: 'Clifford', price: 23, brand: 'Columbia', style: 'Denim', count: 7, img: 'assets/images/prod/den2.png', search: ['джинсовка', 'куртка']},
];


let pants = [
    {inCart: 1, type: 'Pants', name: 'Zhang', price: 10, brand: 'Columbia', style: 'Cargo',  count: 2, img: 'assets/images/prod/car1.png', search: ['карго', 'бежевый', 'штаны']},
    {inCart: 1, type: 'Pants', name: 'Amman', price: 13, brand: 'Columbia', style: 'Jeans',  count: 3, img: 'assets/images/prod/jean1.png', search: ['джинсы', 'штаны', 'синий']},
    {inCart: 1, type: 'Pants', name: 'Milana', price: 15, brand: 'Columbia', style: 'Chinos', count: 3, img: 'assets/images/prod/chin1.png', search: ['чинос', 'бежевый', 'штаны']},
    {inCart: 1, type: 'Pants', name: 'Henderson', price: 17, brand: 'Black Diamond', style: 'Cargo', count: 3, img: 'assets/images/prod/car2.png', search: ['карго', 'штаны', 'черный']},
    {inCart: 1, type: 'Pants', name: 'Reynolds', price: 9, brand: 'Black Diamond', style: 'Cargo', count: 5, img: 'assets/images/prod/car3.png', search: ['карго', 'зеленый', 'штаны']},
    {inCart: 1, type: 'Pants', name: 'Cabrera', price: 13, brand: 'Black Diamond', style: 'Cargo', count: 2, img: 'assets/images/prod/car4.png',  search: ['карго', 'штаны', 'черный']},
    {inCart: 1, type: 'Pants', name: 'Brooke', price: 21, brand: 'Military', style: 'Cargo', count: 3, img: 'assets/images/prod/car5.png', search: ['карго', 'штаны', 'черный']},
    {inCart: 1, type: 'Pants', name: 'Keziah', price: 23, brand: 'Military', style: 'Cargo', count: 4, img: 'assets/images/prod/car6.png', search: ['карго', 'штаны', 'серый']},

];



let boots = [
    {inCart: 1, type: 'Boots', name: 'Chadwick', price: 69, brand: 'The North Face', count: 4, top: true, img: 'assets/images/prod/boot1.png', search: ['ботинки', 'обувь', 'черный']},
    {inCart: 1, type: 'Boots', name: 'Bostock', price: 56, brand: 'The North Face', count: 5, img: 'assets/images/prod/boot2.png', search: ['туфли', 'обувь', 'черный']},
    {inCart: 1, type: 'Boots', name: 'Bullock', price: 78, brand: 'Columbia', count: 3, img: 'assets/images/prod/boot3.png', search: ['ботинки', 'обувь', 'черный']},
    {inCart: 1, type: 'Boots', name: 'Hayden', price: 45, brand: 'Columbia', count: 6, img: 'assets/images/prod/boot4.png', search: ['ботинки', 'обувь', 'бежевый']},
    {inCart: 1, type: 'Boots', name: 'Winter', price: 35, brand: 'Military', count: 7, img: 'assets/images/prod/boot5.png', search: ['ботинки', 'обувь', 'черный']},
    {inCart: 1, type: 'Boots', name: 'Thatcher', price: 78, brand: 'Military', count: 2, img: 'assets/images/prod/boot6.png', search: ['ботинки', 'обувь', 'зеленый']},
    {inCart: 1, type: 'Boots', name: 'Hogg', price: 213, brand: 'The North Face', count: 5, img: 'assets/images/prod/boot7.png', search: ['ботинки', 'обувь', 'серый']},
    {inCart: 1, type: 'Boots', name: 'Merrill', price: 203, brand: 'The North Face', count: 4, img: 'assets/images/prod/boot8.png', search: ['туфли', 'обувь', 'принт', 'серый']},

]




export {tShirts, sShirts, jackets, pants, boots};

