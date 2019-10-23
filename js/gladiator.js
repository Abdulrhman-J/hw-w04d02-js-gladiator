export default class Gladiator {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    setName(name) {
        //  Change the casing to first capitalized
        this.name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    }
}