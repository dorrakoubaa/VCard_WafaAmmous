export interface Bio {
    name: string;
    title: string;
    description: string;
    background: string;
}

export interface Service {
    title: string;
    description: string;
    icon?: string; // Optional property for an icon
}

export interface PortfolioItem {
    title: string;
    description: string;
    imageUrl: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    address?: string; // Optional property for an address
}

export interface Data {
    bio: Bio;
    services: Service[];
    portfolio: PortfolioItem[];
    contact: ContactInfo;
}