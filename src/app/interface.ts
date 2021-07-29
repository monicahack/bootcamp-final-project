export interface ParkResponse {
    data:Park[];
}
export interface Park {
    fullName:string;
    description:string;
    activities:[{
        name:string;
    }]
    addresses:[{
        city:string;
        stateCode:string;
    }]
    states:string;
    id:string;
    parkCode:string;
    images:Images[];
    operatingHours:[{
    standardHours:[{
        monday:string;
        tuesday:string;
        wednesday:string;
        thursday:string;
        friday:string;
        saturday:string;
        sunday:string;}] 
    }]
    isFavorite: boolean;
    //isFavorite was created by us, and put in so we could saves to a new array so we can access the data
}

export interface Activities {
    name:string;
}

export interface Images {
    url:string;
}

export interface Webcams {
    data:[{
        id:string;
        url:string;
        relatedParks:[{
            parkCode: string;
        }]
    }]
}

export interface ThingsToDo {
    data:[[{
        seasonDescription:string;
        url:string;
        images:[{
            crops:[{
                url:string;
            }]
        season:string[];    
        }]
    }]]
}