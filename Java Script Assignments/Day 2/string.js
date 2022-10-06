const specification= {
    firstgear: function(){
        console.log('First gear');
    },
    secondgear: function(){
        console.log('Second gear');
    },
    maxspeed: 200,
    changegear: function(){
        return `1st gear: ${this.firstgear()}, 2nd gear: ${this.secondgear()}`
    }
};
vehicle = {
    vehicleid: 1234,
    brand: "Bugatti",
    model: "2021",
    variant: "one year",
    specifications: specification
}

let vs = (_object) => {
    console.log(vehicle.vehicleid);
    console.log(vehicle.brand);
    console.log(vehicle.model);
    console.log(vehicle.variant);
    console.log(vehicle.specification.maxspeed);
}
vs(vehicle);