class Numberdrome {
    constructor() {
        this.list = [];
    };

    addNumber(n) {
        this.list.push(n);
    };

    removeNumber(n) {
        this.list = this.list.filter(number => number !== n)
    };

    sum() {
        return this.list.reduce((acc, number) => acc + number, 0);
    };

    product() {
        return this.list.reduce((acc, number) => acc * number, 1);
    };

    min() {
            if (this.list.length === 0) {
                throw new Error('No numbers');
            }

            return Math.min(...this.list);
    };

    max() {
            if (this.list.length === 0) {
                throw new Error('No numbers');
            }

            return Math.max(...this.list);
    };
}
