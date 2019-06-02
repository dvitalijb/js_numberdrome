class Numberdrome {
    constructor() {
        this.list = [];
    };

    addNumber(n) {
        this.list.push(n);
    };

    removeNumber(n) {
        const index = this.list.find(number => number === n);
        this.list.splice(index, 1);
    };

    sum() {
        return this.list.reduce((acc, number) => acc + number, 0);
    };

    product() {
        return this.list.reduce((acc, number) => acc * number, 1);
    };

    min() {
        try {
            if (this.list.length === 0) {
                throw new Error('No numbers');
            }

            return Math.min(...this.list);
        } catch(e) {
            console.log(e);
            return false;
        }
    };

    max() {
        try {
            if (this.list.length === 0) {
                throw new Error('No numbers');
            }

            return Math.max(...this.list);
        } catch(e) {
            console.log(e);
            return false;
        }
    };
}
