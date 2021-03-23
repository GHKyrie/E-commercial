const SHOP_DATA = [
    {
        id: 1,
        title: 'SSD',
        routeName: 'SSD',
        items: [
            {
                id: 1,
                name: 'WD Green 120',
                imageUrl: 'https://i.ibb.co/z4Tg37B/ssd.jpg',
                price: 1400
            },
            {
                id: 2,
                name: 'WD Green 240',
                imageUrl: 'https://i.ibb.co/z4Tg37B/ssd.jpg',
                price: 2700
            },
            {
                id: 3,
                name: 'WD Blue 120',
                imageUrl: 'https://i.ibb.co/z4Tg37B/ssd.jpg',
                price: 1500
            },
            {
                id: 4,
                name: 'Kingston 120',
                imageUrl: 'https://i.ibb.co/z4Tg37B/ssd.jpg',
                price: 1350
            },
            {
                id: 5,
                name: 'Kingston 240',
                imageUrl: 'https://i.ibb.co/z4Tg37B/ssd.jpg',
                price: 2650
            },
            {
                id: 6,
                name: 'Samsung 128',
                imageUrl: 'https://i.ibb.co/z4Tg37B/ssd.jpg',
                price: 1500
            },
            {
                id: 7,
                name: 'Samsung 256',
                imageUrl: 'https://i.ibb.co/z4Tg37B/ssd.jpg',
                price: 3000
            },
            {
                id: 8,
                name: 'Noname 120',
                imageUrl: 'https://i.ibb.co/z4Tg37B/ssd.jpg',
                price: 1200
            },
            {
                id: 9,
                name: 'Noname 240',
                imageUrl: 'https://i.ibb.co/z4Tg37B/ssd.jpg',
                price: 2400
            }
        ]
    },
    {
        id: 2,
        title: 'Процессоры',
        routeName: 'CPU',
        items: [
            {
                id: 1,
                name: 'Intel Core i5 2310',
                imageUrl: 'https://i.ibb.co/JsCngWy/CPU.jpg',
                price: 1500
            },
            {
                id: 2,
                name: 'Intel Xeon E5 2650v2',
                imageUrl: 'https://i.ibb.co/JsCngWy/CPU.jpg',
                price: 2800
            },
            {
                id: 3,
                name: 'AMD Ryzen 5 2600',
                imageUrl: 'https://i.ibb.co/JsCngWy/CPU.jpg',
                price: 5000
            },
            {
                id: 4,
                name: 'AMD Ryzen 5 3600',
                imageUrl: 'https://i.ibb.co/JsCngWy/CPU.jpg',
                price: 7500
            },
            {
                id: 5,
                name: 'Intel Core i7 3770',
                imageUrl: 'https://i.ibb.co/JsCngWy/CPU.jpg',
                price: 6370
            },
            {
                id: 6,
                name: 'AMD FX-8350',
                imageUrl: 'https://i.ibb.co/JsCngWy/CPU.jpg',
                price: 5500
            },
            {
                id: 7,
                name: 'Intel Core i3 8100',
                imageUrl: 'https://i.ibb.co/JsCngWy/CPU.jpg',
                price: 8200
            },
            {
                id: 8,
                name: 'AMD Ryzen 3 3200g',
                imageUrl: 'https://i.ibb.co/JsCngWy/CPU.jpg',
                price: 4500
            }
        ]
    },
    {
        id: 3,
        title: 'Материнские платы',
        routeName: 'motherboards',
        items: [
            {
                id: 1,
                name: 'ASRock H67M/SI',
                imageUrl: 'https://i.ibb.co/zZdx8n5/mat.jpg',
                price: 1400
            },
            {
                id: 2,
                name: 'ASRock A320M-DVS',
                imageUrl: 'https://i.ibb.co/zZdx8n5/mat.jpg',
                price: 3500
            },
            {
                id: 3,
                name: 'Machinist X79',
                imageUrl: 'https://i.ibb.co/zZdx8n5/mat.jpg',
                price: 3800
            },
            {
                id: 4,
                name: 'Huananzhi X79',
                imageUrl: 'https://i.ibb.co/zZdx8n5/mat.jpg',
                price: 5000
            },
            {
                id: 5,
                name: 'Tan Trench',
                imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                price: 185
            }
        ]
    },
    {
        id: 4,
        title: 'Комплектующие',
        routeName: 'parts',
        items: [
            {
                id: 1,
                name: 'NVIDIA GeForce GTX 1060',
                imageUrl: 'https://i.ibb.co/zQhcY5W/parts.jpg',
                price: 13200
            },
            {
                id: 2,
                name: 'AMD Radeon RX 570',
                imageUrl: 'https://i.ibb.co/zQhcY5W/parts.jpg',
                price: 35000
            },
            {
                id: 3,
                name: 'AMD Radeon R9 290X',
                imageUrl: 'https://i.ibb.co/zQhcY5W/parts.jpg',
                price: 14000
            },
            {
                id: 4,
                name: 'AMD Radeon RX 470',
                imageUrl: 'https://i.ibb.co/zQhcY5W/parts.jpg',
                price: 7000
            },
            {
                id: 5,
                name: 'NVIDIA GeForce GTX 650',
                imageUrl: 'https://i.ibb.co/zQhcY5W/parts.jpg',
                price: 3000
            },
            {
                id: 6,
                name: 'NVIDIA GeForce GTX 1050 TI',
                imageUrl: 'https://i.ibb.co/zQhcY5W/parts.jpg',
                price: 12000
            },
            {
                id: 7,
                name: 'NVIDIA GeForce GTX 1660 Super',
                imageUrl: 'https://i.ibb.co/zQhcY5W/parts.jpg',
                price: 42000
            }
        ]
    },
    {
        id: 5,
        title: 'Сборки',
        routeName: 'PC',
        items: [
            {
                id: 1,
                name: 'Sborka 1',
                imageUrl: 'https://i.ibb.co/vwpttRJ/sborka.jpg',
                price: 32500
            },
            {
                id: 2,
                name: 'Sborka 2',
                imageUrl: 'https://i.ibb.co/vwpttRJ/sborka.jpg',
                price: 27500
            },
            {
                id: 3,
                name: 'Sborka 3',
                imageUrl: 'https://i.ibb.co/vwpttRJ/sborka.jpg',
                price: 35100
            },
            {
                id: 4,
                name: 'Sborka 4',
                imageUrl: 'https://i.ibb.co/vwpttRJ/sborka.jpg',
                price: 25000
            },
            {
                id: 5,
                name: 'Sborka 5',
                imageUrl: 'https://i.ibb.co/vwpttRJ/sborka.jpg',
                price: 45000
            },
            {
                id: 6,
                name: 'Sborka 6',
                imageUrl: 'https://i.ibb.co/vwpttRJ/sborka.jpg',
                price: 56800
            }
        ]
    }
]

export default SHOP_DATA;