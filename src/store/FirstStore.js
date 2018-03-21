import { observable, action, computed } from 'mobx';
import articleCall from '../Api/articleCall';

export class FirstStore{

    constructor(store) {
        this.store = store
    };

    @observable number = 0;
    @observable apiCallTest = observable.map();

    @computed
    get getNumber(){
        return this.number;
    }

    @action
    setNumber(number){
        this.number = number;
    }

    @action
    getArticle(articleNumber){
        console.log('api call start');
        return articleCall.article.getList(articleNumber)
            .then((result)=>{console.log(result); console.log('api call success');})
            .catch((e)=>{console.log(e);console.log('api call error');})
            .finally(console.log('api call end'));
    }
};