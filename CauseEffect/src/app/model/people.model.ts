export class People {
  private _name?: string | undefined;
  private _street?: string | undefined;
  private _city?: string | undefined;
  private _state?: string | undefined;
  private _country?: string | undefined;
  private _telephone?: string | undefined;
  private _birthday?: string | undefined;

  public get name(): string | undefined {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  public get street(): string | undefined {
    return this._street;
  }
  public set street(value: string | undefined) {
    this._street = value;
  }
  public get city(): string | undefined {
    return this._city;
  }
  public set city(value: string | undefined) {
    this._city = value;
  }

  public get state(): string | undefined {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  public get country(): string | undefined {
    return this._country;
  }
  public set country(value: string | undefined) {
    this._country = value;
  }

  public get telephone(): string | undefined {
    return this._telephone;
  }
  public set telephone(value: string | undefined) {
    this._telephone = value;
  }

  public get birthday(): string | undefined {
    return this._birthday;
  }
  public set birthday(value: string | undefined) {
    this._birthday = value;
  }

  constructor(){}
}
