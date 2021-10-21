export class Product {
    constructor(public id: number, public name: string, public price: number){}
}

export enum SPORT {
    Running, Soccer, Watersports, Other
}

export class SportProducts extends Product {
    private _sports: SPORT[];

    constructor(public id: number, public name: string, public price: number, ...sportArray: SPORT[]){
        super(id, name, price);
        this._sports = sportArray;
    }

    usedForSports(s: SPORT) {
        return this._sports.includes(s);
    }

    getSports(): SPORT[] {
        return this._sports;
    }
}