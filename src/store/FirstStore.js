import { observable, action, computed } from 'mobx';

 class FirstStore{

    @observable number = 0;

    @computed
    get getNumber(){
        return this.number;
    }

    @action
    setNumber(number){
        this.number = number;
    }


}

const singleton = new FirstStore();
export default singleton;