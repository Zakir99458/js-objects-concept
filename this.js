// console.log(this);

const Sahil = {
    id: 900,
    name: "Zakir",
    money: 5000,
    tretDey: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}