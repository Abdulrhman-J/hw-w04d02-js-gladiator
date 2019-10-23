export default class Arena {
    constructor(name) {
        this.name = name;
        this.gladiators = [];
    }
    capitalize() {
        return `${this.name.charAt(0).toUpperCase()}`;
    }
    addGladiator(wari) {
        if (this.gladiators.length < 2) {
            this.gladiators.push(wari);
        } else {
            console.log('full');
        }
    }
    fight() {
        if (this.gladiators[0].weapon == this.gladiators[1].weapon) {
            this.gladiators = [];
        } else if (this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon == 'Spear') {
            this.gladiators.pop();
        } else if (this.gladiators[0].weapon == 'Spear' && this.gladiators[1].weapon == 'Trident') {
            this.gladiators.shift();
        } else if (this.gladiators[0].weapon == 'Spear' && this.gladiators[1].weapon == 'Club') {
            this.gladiators.pop();
        } else if (this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon == 'Spear') {
            this.gladiators.shift();
        } else if (this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon == 'Trident') {
            this.gladiators.pop();
        } else if (this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon == 'Club') {
            this.gladiators.shift();
        }
    }

}

// rident beats Spear
// Spear beats Club
// Club beats Trident