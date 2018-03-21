import axios from 'axios';
import { API_HOST } from '../common/constants';

const article = {
    getList : category => axios.get(API_HOST+`/api/Board/get_list?category=${category}`)
};

export default {
  article
};