export interface dataItemInterface{
    _id: string,
    amount: number,
    type: string,
    name: {
        first: string,
        last: string
    },
    company: string,
    email: string,
    phone: string,
    address: string
}

export const initialItem: dataItemInterface = {
    _id: "",
    amount:  0,
    type:  "",
    name: {
        first:  "",
        last:  ""
    },
    company:  "",
    email:  "",
    phone:  "",
    address:  "" 
}