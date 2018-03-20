import { observable, action, computed } from 'mobx';

export class FirstStore{

    constructor(store) {
        this.store = store
    };

    @observable number = 0;

    @computed
    get getNumber(){
        return this.number;
    }

    @action
    setNumber(number){
        this.number = number;
    }
};