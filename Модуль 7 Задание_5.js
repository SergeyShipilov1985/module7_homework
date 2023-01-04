class ElectricalDevice {
    constructor(name, manufacturer, powerElectricalDevice, turnElectricalDevice) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.powerElectricalDevice = powerElectricalDevice;
        this.turnElectricalDevice = turnElectricalDevice;
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}.
 Power consumption of the ${this.name} is ${this.powerElectricalDevice} W.
 The ${this.name} is switched ${this.turnElectricalDevice}.`
    }
}

class Lamp extends ElectricalDevice {
    constructor(name, manufacturer,powerElectricalDevice, turnElectricalDevice, type) {
        super(name);
        this.manufacturer = manufacturer;
        this.powerElectricalDevice = powerElectricalDevice;
        this.turnElectricalDevice = turnElectricalDevice;
        this.type = type;
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}.
 Power consumption of the ${this.name} is ${this.powerElectricalDevice} W.
 The ${this.name} is switched ${this.turnElectricalDevice}.The type of ${this.name} is ${this.type}.`
    }
}

class Computer extends ElectricalDevice {
    constructor(name, manufacturer,powerElectricalDevice, turnElectricalDevice,type,display) {
        super(name);
        this.manufacturer = manufacturer;
        this.powerElectricalDevice = powerElectricalDevice;
        this.turnElectricalDevice = turnElectricalDevice;
        this.type = type;
        this.display = display;
    }
    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}.
 Power consumption of the ${this.name} is ${this.powerElectricalDevice} W.
 The ${this.name} is switched ${this.turnElectricalDevice}.The type of ${this.name} is ${this.type}.
 Display is ${this.display}.`
    }
}


const hairdryer = new ElectricalDevice('hairdrier', 'Dyson', 1600, 'on');

console.log(hairdryer.getInfo());

const lamp = new Lamp('lamp', 'Camellion', 15, 'off', 'led');

console.log(lamp.getInfo());


const computer = new Computer('computer','Apple', 80, 'on', 'laptop', '13 inch');

console.log(computer.getInfo());

const totalPowerConsumption = function(){
    console.log(`The total power consumption of elecrical devices is ${1600+15+80} W.`)
};
totalPowerConsumption()
