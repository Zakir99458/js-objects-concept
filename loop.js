const bottle = {
    color: 'red', 
    hold: 'water', 
    price: 50, 
    isCleaned: true
};

for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
} 