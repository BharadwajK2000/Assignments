const vehicle = {
    vehicleid: 666,
    brand: 'Rolls Royce',
    model: '2020',
    variant: 'one year',

    specification: {
        firstGear: function(){
            console.log('vehicle is in first gear...');
            maxspeed = 30;
            console.log(`maxspeed : ${maxspeed}`)
        },

        secondgear: function(){
            console.log('vehicle is in second gear...');
            maxspeed = 60;
            console.log(`maxspeed : ${maxspeed}`);
        },
        maxspeed: 90,
        changegear: function(){
            return (this.firstGear(), this.secondgear());
        }
    }
};

const details = (vehicle) => {
    console.log(`vehicleid is: ${vehicle.vehicleid}`);
    console.log(`vehicle brand is: ${vehicle.brand}`);
    console.log(`vehicle model is: ${vehicle.model}`);
    console.log(`vehicle variant is: ${vehicle.variant}`);
    vehicle.specification.changegear();
    console.log(vehicle.specification.maxspeed);
}
details(vehicle);