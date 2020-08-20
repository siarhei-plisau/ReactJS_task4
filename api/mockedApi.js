import  { mockedResponse } from './mockedResponse';

export const apiCall = () => {
    return new Promise( (resolve, regect) => {
        setTimeout( () => resolve(mockedResponse), 500);
    })
}
