export interface ParkResponse {
    data:Park[];
}
export interface Park {
    fullName:string;
    description:string;
    activities:Activities[];
    states:string;
    id:string;
    parkCode:string;
}

export interface Activities {
    name:string;
}