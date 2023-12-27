const Sahil = {
    id: 900,
    name: "Zakir",
    money: 5000,
    tretDey: function(expense, tax){
        this.money = this.money - expense-tax;
        console.log("here...", this);
        return this.money;
    }
}

const Zarah = {
    id: 800,
    name: "zarah",
    money: 6000
}
// console.log(Sahil.tretDey(100));

// const zarahTreat = Sahil.tretDey.bind(Zarah);
// console.log("zarah", zarahTreat(200));
// console.log(Sahil);
// call
// Sahil.tretDey.call(Zarah, 500);
// Apply
Sahil.tretDey.apply(Zarah,[400,50]);
