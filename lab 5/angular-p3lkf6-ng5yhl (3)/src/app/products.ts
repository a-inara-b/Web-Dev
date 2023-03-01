export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  link: string;
  category: string;
  like: number;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 691500,
    description:
      'Технология NFC: Да. Цвет: фиолетовый. Тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы. Диагональ: 6.7 дюйм',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    category: 'Apple iPhone',
    like: 0, 
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 376900,
    description:
      'Технология NFC: Да. Цвет: черный. Тип экрана: OLED, Super Retina XDR. Диагональ: 6.1 дюйм',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    category: 'Apple iPhone',
    like: 0,
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 294489,
    description:
      'Технология NFC: Да. Цвет: черный. Тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD. Диагональ: 6.1 дюйм',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h2e/31489167622174/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    category: 'Apple iPhone',
    like: 0,
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 12 64Gb черный',
    price: 321900,
    description:
      'Технология NFC: Да. Цвет: черный. Тип экрана: сенсорный, мультитач OLED, Super Retina XDR. Диагональ: 6.1 дюйм',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h35/h3d/33279115886622/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=750000000#!/item',
    category: 'Apple iPhone',
    like: 0,
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 14 256Gb голубой',
    price: 497370,
    description:
      'Технология NFC: Да. Цвет: голубой. Тип экрана: OLED, Super Retina XDR display. Диагональ: 6.1 дюйм',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/h2b/63073056063518/apple-iphone-14-128gb-goluboj-106363155-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-256gb-goluboi-106363155/?c=750000000#!/item',
    category: 'Apple iPhone',
    like: 0,
  },
  {
    id: 6,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    price: 228500,
    description:
      'Поддержка платформ: iOS. Материал корпуса: алюминий. Цвет корпуса: черный. Технология экрана: OLED',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    category: 'Apple Watch',
    like: 0,
  },
  {
    id: 7,
    name: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм золотистый',
    price: 159890,
    description:
      'Поддержка платформ: iOS. Материал корпуса: алюминий. Цвет корпуса: золотистый. Технология экрана: OLED',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/he8/62711073374238/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    category: 'Apple Watch',
    like: 0,
  },
  {
    id: 8,
    name: 'Смарт-часы Apple Watch Series 7 45 мм черный',
    price: 232930,
    description:
      'Поддержка платформ: iOS. Материал корпуса: алюминий. Цвет корпуса: черный. Технология экрана: OLED',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h71/ha1/46553394184222/apple-watch-series-7-41-mm-cernyj-102582811-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-chernyi-102582811/?c=750000000#!/item',
    category: 'Apple Watch',
    like: 0,
  },
  {
    id: 9,
    name: 'Смарт-часы Apple Watch SE 44 мм серебристый-синий',
    price: 148990,
    description:
      'Поддержка платформ: iOS. Материал корпуса: алюминий. Цвет корпуса: серебристый-синий. Технология экрана: OLED',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/hcf/46658520875038/apple-watch-se-gps-44mm-mkq43gk-a-102520002-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-44-mm-serebristyi-sinii-102520002/?c=750000000#!/item',
    category: 'Apple Watch',
    like: 0
  },
  {
    id: 10,
    name: 'Смарт-часы Apple Watch Series 7 45 мм starlight',
    price: 225498,
    description:
      'Поддержка платформ: iOS. Материал корпуса: алюминий. Цвет корпуса: starlight. Технология экрана: OLED',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/h92/46553170640926/apple-watch-series-7-45-mm-zolotistyi-102582780-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-starlight-102582780/?c=750000000#!/item',
    category: 'Apple Watch',
    like: 0
  },
  {
    id: 11,
    name: 'Наушники Apple AirPods Pro 2nd generation белый',
    price: 120809,
    description:
      'Тип: наушники. Вид: внутриканальные. Подключение: беспроводное. Тип акустического оформления: закрытые',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h10/he6/62281477193758/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item',
    category: 'Airpods',
    like: 0,
  },
  {
    id: 12,
    name: 'Наушники Apple AirPods with Charging Case белый',
    price: 64490,
    description:
      'Тип: гарнитура. Вид: внутриканальные. Подключение: беспроводное. Тип акустического оформления: открытые. Тип крепления: без крепления',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h64/46637140475934/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item',
    category: 'Airpods',
    like: 0,
  },
  {
    id: 13,
    name: 'Наушники Apple AirPods 3 белый',
    price: 95336,
    description:
      'Тип: гарнитура. Вид: внутриканальные. Подключение: беспроводное. Тип акустического оформления: открытые',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h7b/46719105990686/apple-airpods-3-belyj-102667744-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
    category: 'Airpods',
    like: 0,
  },
  {
    id: 14,
    name: 'Наушники Apple AirPods Pro белый',
    price: 102885,
    description:
      'Тип: гарнитура. Вид: внутриканальные. Подключение: беспроводное. Тип акустического оформления: закрытые',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/hcc/46659804692510/apple-airpods-pro-belyj-4804718-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4804718/?c=750000000#!/item',
    category: 'Airpods',
    like: 0,
  },
  {
    id: 15,
    name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
    price: 98105,
    description:
      'Тип: гарнитура. Вид: внутриканальные. Подключение: беспроводное',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h39/62858842931230/apple-airpods-3-with-lightning-charging-case-belyj-106667987-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000#!/item',
    category: 'Airpods',
    like: 0,
  },
  {
    id: 16,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 478888,
    description:
      'Диагональ экрана: 13.3 дюйм. Процессор: Apple M1. Видеокарта: Apple M1 7 core',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/he8/33125684772894/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    category: 'MacBook',
    like: 0,
  },
  {
    id: 17,
    name: 'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
    price: 986830,
    description:
      'Диагональ экрана: 14.2 дюйм. Процессор: Apple M1 Pro. Видеокарта: Apple M1 Pro 14-Core',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h93/47153374134302/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
    category: 'MacBook',
    like: 0,
  },
  {
    id: 18,
    name: 'Ноутбук Apple MacBook Pro 16 MK193 серый',
    price: 1272190,
    description:
      'Диагональ экрана: 16.2 дюйм. Процессор: Apple M1 Pro. Видеокарта: Apple M1 16-Core',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/h20/47152963092510/apple-macbook-pro-16-mk193-seryj-102866164-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk193-seryi-102866164/?c=750000000#!/item',
    category: 'MacBook',
    like: 0,
  },
  {
    id: 19,
    name: 'Ноутбук Apple MacBook Pro 13 Z11C0013E серый',
    price: 1500000,
    description:
      'Диагональ экрана: 13.3 дюйм. Процессор: Apple M1. Видеокарта: Apple M1 Graphics',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h4b/34126422867998/apple-macbook-pro-2020-13-3-z11c0013e-seryj-101694768-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-13-z11c0013e-seryi-101694768/?c=750000000#!/item',
    category: 'MacBook',
    like: 0,
  },
  {
    id: 20,
    name: 'Ноутбук Apple MacBook Pro 16 MNW93RU/A серый',
    price: 1699990,
    description: 'Диагональ экрана: 16.2 дюйм. Процессор: Apple M2 Pro. Видеокарта: Apple M2 Pro 19-Core',
    rating: 5, 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/h26/69561607847966/noutbuk-apple-macbook-pro-16-2-a2780-retina-xdr-m2-pro-16gb-ssd-1tb-grey-mnw93ru-a-109142706-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mnw93ru-a-seryi-109142706/?c=750000000#!/item',
    category: 'MacBook',
    like: 0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
