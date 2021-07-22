export interface ParkResponse {
    data:Park[];
}
export interface Park {
    fullName:string;
    description:string;
    activities:Activities[];
    city: string;
    stateCode: string;
    states:string;
    id:string;
    parkCode:string;
    standardHours:{
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
    }
}

export interface Activities {
    name:string;
}

export interface Webcams {
    url: string;
}