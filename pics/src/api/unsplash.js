import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 02bf5961d8778b8bdb75617158a080555bcc443a120befe7f8a29e4b5d8e3211'
    }

});
