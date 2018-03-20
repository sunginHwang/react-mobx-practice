import { FirstStore } from './FirstStore';
import { CombineTestStore } from './CombineTestStore';

class RootStore{

    constructor(){
        this.FirstStore = new FirstStore(this);
        this.CombineTestStore = new CombineTestStore(this);
    }


}

export default RootStore;

