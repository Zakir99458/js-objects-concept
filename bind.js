const Sahil = {
    id: 900,
    name: "Zakir",
    money: 5000,
    tretDey: function(expense){
        this.money = this.money - expense;
        return this.money;
    }
}

const Zarah = {
    id: 800,
    name: "zarah",
    money: 6000
}
console.log(Sahil.tretDey(100));

const zarahTreat = Sahil.tretDey.bind(Zarah);
console.log("zarah", zarahTreat(200));
console.log(Sahil);

