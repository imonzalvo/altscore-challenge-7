export const systems: Record<string, string> = {
  navigation: "NAV-01",
  communications: "COM-02",
  life_support: "LIFE-03",
  engines: "ENG-04",
  deflector_shield: "SHLD-05",
};

export class SystemsService {
  private damagedSystem: string | null = null;

  public selectRandomSystem(): void {
    const systemKeys = Object.keys(systems);
    const randomIndex = Math.floor(Math.random() * systemKeys.length);
    this.damagedSystem = systemKeys[randomIndex];
  }

  public getDamagedSystem(): string | null {
    return this.damagedSystem;
  }

  public getSystemCode(): string | undefined {
    if (!this.damagedSystem) return undefined;
    return systems[this.damagedSystem];
  }
}
