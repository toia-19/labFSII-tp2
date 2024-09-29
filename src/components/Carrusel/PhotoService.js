export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&w=400',
                alt: 'Trompeta',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://images.pexels.com/photos/4430936/pexels-photo-4430936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                alt: 'Amplificador',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=400',
                alt: 'Partitura',
                title: 'Title 3'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};