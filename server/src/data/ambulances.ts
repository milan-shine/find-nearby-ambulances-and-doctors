import { InMemoryStore } from "./InMemoryStore";

export interface Ambulance {
    id: string;
    title: string;
    description: string;
    location: string;
    image?: string;
}

export const ambulances: Ambulance[] = [
    {
        id: '085e6c31-73cf-4c40-9578-219ad135ad20',
        title: 'City Ambulance Service',
        description: '24/7 emergency ambulance service',
        location: 'Downtown',
        image: 'https://example.com/ambulance1.jpg'
    },
    {
        id: 'f343d61d-2869-4851-8fc0-96437abd48ad',
        title: 'Suburban Medical Transport',
        description: 'Rapid response for suburban areas',
        location: 'Suburbia',
        image: 'https://example.com/ambulance2.jpg'
    },
    {
        id: '58bebd96-4bd7-4be7-b471-9f51abcac1ad',
        title: 'Metro Health Ambulance',
        description: 'Specialized medical transport in the metro area',
        location: 'Metro City',
        image: 'https://example.com/ambulance3.jpg'
    },
    {
        id: '6388f4b2-8c7c-4a73-982b-542538df54f9',
        title: 'Rural Emergency Services',
        description: 'Emergency services for rural regions',
        location: 'Countryside',
        image: 'https://example.com/ambulance4.jpg'
    },
    {
        id: '1ee444b5-f6c7-44ab-9cf4-d4450717fd92',
        title: 'Express Ambulance Corp',
        description: 'Quick and reliable ambulance services',
        location: 'Uptown',
        image: 'https://example.com/ambulance5.jpg'
    },
    {
        id: '55272b2f-58a3-4dbf-a758-016b3fd1ae78',
        title: 'Nightwatch Ambulance',
        description: 'Night-time emergency services',
        location: 'Old Town',
        image: 'https://example.com/ambulance6.jpg'
    },
    {
        id: '3fda09ba-61e2-4523-8ac2-5cd83713c226',
        title: 'Urban Rescue Squad',
        description: 'Dedicated to urban emergency care',
        location: 'City Center',
        image: 'https://example.com/ambulance7.jpg'
    },
    {
        id: 'fcb7bfba-8c6e-4dc7-a304-9a0252720ffc',
        title: 'Coastal Ambulance Services',
        description: 'Emergency services for coastal areas',
        location: 'Coastline',
        image: 'https://example.com/ambulance8.jpg'
    },
    {
        id: '96efdf35-8fd5-419d-b4e7-7136d23200d7',
        title: 'Highland Medical Rescue',
        description: 'Medical services in highland areas',
        location: 'Highlands',
        image: 'https://example.com/ambulance9.jpg'
    },
    {
        id: 'da6e6ca6-35c1-4e87-9567-6440691614dd',
        title: 'Central Ambulance Network',
        description: 'Comprehensive emergency transport network',
        location: 'Central City',
        image: 'https://example.com/ambulance10.jpg'
    },
    {
        id: '441a7b83-ca17-4b4e-8c93-49b6d868d26b',
        title: 'Harbor Ambulance Services',
        description: 'Emergency services for harbor regions',
        location: 'Harbor Town',
        image: 'https://example.com/ambulance11.jpg'
    },
    {
        id: 'b5ce9b9c-f154-46bb-927d-71ff75aa3f2c',
        title: 'Mountain Emergency Response',
        description: 'Emergency services in mountainous areas',
        location: 'Mountain Region',
        image: 'https://example.com/ambulance12.jpg'
    },
    {
        id: 'b2987fd2-0e70-45ee-97ca-c866bb6f99a7',
        title: 'Desert Rescue Ambulance',
        description: 'Specialized rescue in desert areas',
        location: 'Desert Oasis',
        image: 'https://example.com/ambulance13.jpg'
    },
    {
        id: 'c1a40e2e-15cb-452b-914f-3a88d42e8f93',
        title: 'Forest Ambulance Services',
        description: 'Emergency services in forested regions',
        location: 'Forest Ville',
        image: 'https://example.com/ambulance14.jpg'
    },
    {
        id: '197509b5-809c-465f-995a-7e193daabce3',
        title: 'Lakeside Medical Transport',
        description: 'Ambulance services near lakes and water bodies',
        location: 'Lakeside Town',
        image: 'https://example.com/ambulance15.jpg'
    },
    {
        id: '4ad3272c-a476-4043-862f-bf08da0665df',
        title: 'Airport Emergency Services',
        description: 'Ambulance services for airport emergencies',
        location: 'Airport City',
        image: 'https://example.com/ambulance16.jpg'
    },
    {
        id: '0b07e204-6690-47c0-af93-8c575bb6a54e',
        title: 'Valley Health Ambulance',
        description: 'Emergency services in valley regions',
        location: 'Valley Town',
        image: 'https://example.com/ambulance17.jpg'
    },
    {
        id: '9ef4b486-0b00-43e1-bb1e-903980b9fe3b',
        title: 'Island Rescue Ambulance',
        description: 'Emergency services on island areas',
        location: 'Island City',
        image: 'https://example.com/ambulance18.jpg'
    },
    {
        id: 'b7027045-8df0-430e-aa5b-0b73fb2ca6f2',
        title: 'Regional Ambulance Services',
        description: 'Comprehensive regional emergency services',
        location: 'Regional Center',
        image: 'https://example.com/ambulance19.jpg'
    },
    {
        id: '635abbc4-aa7c-4c1e-9946-8c35f409bedc',
        title: 'Parkside Ambulance Network',
        description: 'Emergency services near parks and recreation areas',
        location: 'Parkside',
        image: 'https://example.com/ambulance20.jpg'
    },
    {
        id: 'e62e426b-e85f-4e55-a6be-a85a146a24f1',
        title: 'Industrial Area Ambulance',
        description: 'Emergency services for industrial areas',
        location: 'Industrial Zone',
        image: 'https://example.com/ambulance21.jpg'
    },
    {
        id: '825f1262-219c-4934-88b9-01567f8062a5',
        title: 'Beachside Medical Response',
        description: 'Emergency services for beachside areas',
        location: 'Beachside Town',
        image: 'https://example.com/ambulance22.jpg'
    },
    {
        id: 'f6c60e85-e5ee-4fa1-8516-a99501343503',
        title: 'University Health Ambulance',
        description: 'Ambulance services for university campuses',
        location: 'University Town',
        image: 'https://example.com/ambulance23.jpg'
    },
    {
        id: 'f44539a2-ff0c-4914-bca7-86d4cbc993c7',
        title: 'Historic District Ambulance',
        description: 'Emergency services in historic districts',
        location: 'Historic Town',
        image: 'https://example.com/ambulance24.jpg'
    },
    {
        id: 'a038fa24-2159-482c-9adf-016aae858fd1',
        title: 'Marketplace Ambulance Services',
        description: 'Emergency services in market areas',
        location: 'Market City',
        image: 'https://example.com/ambulance25.jpg'
    },
    {
        id: '1ed11cf7-e5ff-412c-9d98-699c94cd3fc9',
        title: 'Skyscraper Rescue Squad',
        description: 'Specialized rescue for skyscraper incidents',
        location: 'Sky City',
        image: 'https://example.com/ambulance26.jpg'
    },
    {
        id: '5a9848dc-f8c0-4f16-bd08-5e080ea35311',
        title: 'Bay Area Ambulance Services',
        description: 'Emergency services for bay areas',
        location: 'Bay Town',
        image: 'https://example.com/ambulance27.jpg'
    },
    {
        id: '47803780-c63a-416c-a315-9f8f5b2992fa',
        title: 'Greenfield Medical Transport',
        description: 'Ambulance services in agricultural areas',
        location: 'Greenfield',
        image: 'https://example.com/ambulance28.jpg'
    },
    {
        id: '24c8d023-cce1-40b6-bff8-8772cf261738',
        title: 'Urban Fringe Ambulance',
        description: 'Emergency services on the urban fringe',
        location: 'Fringe City',
        image: 'https://example.com/ambulance29.jpg'
    },
    {
        id: 'c11eb629-11a5-4f7f-8c9c-c4469293e349',
        title: 'City Gate Ambulance',
        description: 'Emergency services at city gates',
        location: 'City Gate',
        image: 'https://example.com/ambulance30.jpg'
    }
]

class AmbulanceStore extends InMemoryStore<Ambulance> {
    constructor(ambulances: Ambulance[]) {
        super(ambulances);
    }
}

export const ambulanceStore = new AmbulanceStore(ambulances);