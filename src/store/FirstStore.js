import { observable } from 'mobx';

export class FirstStore{

    @observable
    private _number = 30;

    constructor(number){
        this._number = number;
    }

    public getNumber(){
        return this._number;
    }

    public setNumber(number){
        this._number = number;
    }


}