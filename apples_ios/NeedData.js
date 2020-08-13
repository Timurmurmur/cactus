const catalog = [
    {
        image: "",
        name: "",
        categoryId: "",
        childCategory: [
            {
                name: "",
                image: "",
                categoryId: "",
            },
            ...
        ]
    },
    ...
]

const itemsByCategoryId = [
    {
        image: "",
        colors: [{
            color: ""
        }] или так ["#fff", "#000"],
        name: "",
        price: "",
        discount: '10%',
        itemId: string
    }
]

const item = {
    name: "",
    code: "",
    status: "В наличии или какой либо из них",
    images: [{
        url: ""
    }],
    discount: "13%",
    colors: [
        {
            name: "black",
            color: "#000"
        }
    ],
    memory: ["64gb", "128gb"],
    shortCharacters: [
        {
            name: "Имя характеристики",
            description: "Описание характеристики"
        }
    ],
    fullCharacters: [
        {
            title: "Корпус",
            characters: [
                {
                    name: "Материалы корпуса",
                    description: "Металл, стекло"
                }
            ]
        },...other
    ],
    shortDescription: "",
    fullDescription: [
        {
            title: string,
            description: {
                title: string || null,
                text: string,
            },
            image: {
                src: any,
                width: number,
                height: number,
            } || null
        }
    ],
    price: "29990"
}

const news = {
    date: "",
    title: "",
    image: "",
    text: "",
    id: ""
}

const bonus = {
    orders: "Колво покупок",
    bonusAdded: "Бонусов начислено",
    bonusPayed: "Бонусов потрачено",
    totalBuyPrice: "Покупок на сумму",
    history: [
        {
            date: "Data",
            description: "",
            bonus
        },
        ...other
    ]
}

const orders = [
    {
        orderNumber: "Номер заказа",
        orderDate: "Дата заказа",
        status: "Статус заказа",
        products: [{
            image: "",
            id: "",
            price: "",
            name: "",
            count: "",
        }],
        deliveryPrice: "",
        totalPrice: "",
        buyer: {
            name: "",
            phoneNumber: "",
        },
        delivery: {
            address: ""
        },
        payment: ""
    }
]

const stocks = [
    {
        image: "",
        type: "Скидка || конкурс || подарки0 || розыгрыш",
        dateStart: "",
        dateEnd: "",
        title: "",
        text: "",
        products: [
            {
                id: "айди товара попадающего под акцию",
                лучше высылать весь товар, но если не получиться то только айди
            },
            {
                "id": ""
            }
        ],

    }
]