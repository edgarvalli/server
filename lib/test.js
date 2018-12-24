'use strict';
const tester = {
    name: "Edgar Valli",
    getName() {
        console.log(this.name)
    },
    getSchema: (data = {}) => {
        this['name'] = data.name || 'Data is null';
        return this;
    }
}

console.log(tester.getSchema())