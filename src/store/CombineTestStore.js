import { observable, action, computed } from 'mobx';

export class CombineTestStore{

    constructor(store) {
        this.store = store
    }

    @observable Secondnumber = 0;

    @computed
    get getSecondNumber(){
        return this.Secondnumber;
    }

    @action
    setSecondNumber(number){
        this.number = number;
    }

}