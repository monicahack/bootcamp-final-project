export interface ParkResponse {
    data:Data[];
}
export interface Data {
    fullName:string;
    description:string;
    activities:Activities[];
    states:string;
}

export interface Activities {
    name:string;
}
