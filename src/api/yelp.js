import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer tQEzt2Ubbx6LmiM4iefLEz9hKypTk-6KOWSMMOvXpqcA8TnhMeyBNBkLpi9O62WpUfdzlh0PqZQ0XTC0mpXdtuTmSrFtquGnG2q2YpvImlfRcfh2yz3w-wsp2ckQXnYx'
    }
})