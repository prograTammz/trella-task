export interface Address {
    order: number;
    key: string;
    latitude: number;
    longitude: number;
    name: string;
}

export interface Shipment {
    key: string;
    numberOfBids: number;
    vehicleType: string;
    commodity: string;
    price: number;
    addresses: Address[];
}

export interface Location{
    latitude: number;
    longitude: number;
}