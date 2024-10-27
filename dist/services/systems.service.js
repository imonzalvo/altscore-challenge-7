export const systems = {
    navigation: "NAV-01",
    communications: "COM-02",
    life_support: "LIFE-03",
    engines: "ENG-04",
    deflector_shield: "SHLD-05",
};
export class SystemsService {
    constructor() {
        this.damagedSystem = null;
    }
    selectRandomSystem() {
        const systemKeys = Object.keys(systems);
        const randomIndex = Math.floor(Math.random() * systemKeys.length);
        this.damagedSystem = systemKeys[randomIndex];
    }
    getDamagedSystem() {
        return this.damagedSystem;
    }
    getSystemCode() {
        if (!this.damagedSystem)
            return undefined;
        return systems[this.damagedSystem];
    }
}
