class Calc {
    constructor() {
        this.distance = document.getElementById('distance'); //расстояние
        this.consumption100 = document.getElementById('consumption'); //расход литров на 100км
        this.price = document.getElementById('price'); //цена за 1 л
        this.output = document.getElementById('output'); //результат
        // buttons
        this.btnConsider = document.getElementById('consider'); //кнопка подсчитать
        // checkbox
        this.checkInBothDirections = document.getElementById('checkInBothDirections');
        this.checkboxMap = document.getElementById('checkboxMap');
        // elements
        this.calcConsumptionElem = document.getElementsByClassName('calc-consumption')[0];
        this.map = document.getElementsByClassName('map')[0];
        this.loader = document.getElementsByClassName('loader-gooey');

        this.btnConsider.addEventListener('click', () => {
            this.calculation();
        });
        this.checkInBothDirections.addEventListener('click', () => {
            this.elementWindowShow('checkInBothDir');
        });
        this.checkboxMap.addEventListener('click', () => {
            console.log('dsdsds', this.checkboxMap.checked);
            this.elementWindowShow('checkboxMap');
        });
    }

    calculation() {
        this.output.innerHTML =
            Math.round((this.consumption100.value * this.distance.value * this.price.value) / 100) + ' рублей';
    }

    elementWindowShow(elements) {
        if ('checkInBothDir') {
            this.checkInBothDirections.checked
                ? (this.calcConsumptionElem.style.display = 'block')
                : (this.calcConsumptionElem.style.display = 'none');
        }
        if ('checkboxMap') {
            console.log(this.map);
            this.checkboxMap.checked ? (this.map.style.display = 'block') : (this.map.style.display = 'none');
        }
    }
}

new Calc();
