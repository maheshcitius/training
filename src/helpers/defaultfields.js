import moment from 'moment';




const today = moment().format('hh:mm:ss DD-MM-YYYY');


export const createdFields = {
    createdOn : today,
    updatedOn : today,

}

