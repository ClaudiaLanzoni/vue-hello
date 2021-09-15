let app = new Vue ({
    el : '#root',
    data : {
        message: 'Buongiorno!',
        name: 'NICK MASON',
        counter: 0
    },

    methods: {
        changeCounter(){
            this.counter += 1
        },

        /*numeroRandom(min, max) { 
            Math.floor(Math.random() * (max - min + 1)) + min;  
        },*/

        changeImage(){
            if (this.counter === 1) {
                this.imgURL = 'https://www.ondamusicale.it/wp-content/uploads/2018/01/mason_young.jpg'
            }
        }
    }
})