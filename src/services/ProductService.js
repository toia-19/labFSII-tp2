export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1',
                code: 'f230fh0g1',
                name: 'Xilófono',
                description: 'https://images.pexels.com/photos/26545471/pexels-photo-26545471/free-photo-of-enfoque-selectivo-del-xilofono.jpeg',
                image: '../../xilofono.jpeg',
                price: 65,
                category: 'Instrumento de aire',
                quantity: 24,
                inventoryStatus: 'EN STOCK',
                rating: 10
            },
            {
                id: '2',
                code: 'f230fh0g2',
                name: 'Redoblante',
                description: 'Redoblante',
                image: 'https://images.pexels.com/photos/5650792/pexels-photo-5650792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                price: 65,
                category: 'Instrumento de percusión',
                quantity: 24,
                inventoryStatus: 'ÚLTIMOS',
                rating: 3
            },
            {
                id: '3',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'https://images.pexels.com/photos/26545471/pexels-photo-26545471/free-photo-of-enfoque-selectivo-del-xilofono.jpeg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'SIN STOCK',
                rating: 1
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

