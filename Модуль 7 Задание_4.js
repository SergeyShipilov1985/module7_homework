function ElectricalDevice (name, manufacturer, powerElectricalDevice, turnElectricalDevice, type, display){
    this.name = name,
        this.manufacturer = manufacturer,
        this.powerElectricalDevice = powerElectricalDevice,
        this.turnElectricalDevice = turnElectricalDevice,
        this.type = function(){console.log(`The type of ${this.name} is ${type}.`)}
    this.display = function(){console.log(`Display is ${display}.`)}
    this.device = function(){
        console.log(`The ${this.name} is manufacturied by ${this.manufacturer}.
 Power consumption of the ${this.name} is ${this.powerElectricalDevice} W.
 The ${this.name} is switched ${this.turnElectricalDevice}.`)
    }
}
const hairdryer = new ElectricalDevice('hairdrier', 'Dyson', 1600, 'on');
const lamp = new ElectricalDevice('lamp', 'Camellion', 15, 'off', 'led');
const computer = new ElectricalDevice('computer','Apple', 80, 'on', 'laptop', '13 inch');
const totalPowerConsumption =  function(){console.log(`The total power consumption of elecrical devices is ${1600+15+80} W.`)}
hairdryer.device();
lamp.device();
lamp.type();
computer.device();
computer.type();
computer.display();
totalPowerConsumption()