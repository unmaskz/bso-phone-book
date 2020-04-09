export interface Props {
    data: Letter[];
}

export interface Letter {
    [key: string]: any;
}

export interface Contact {
    id: string;
    name: string;
    jobTitle: string;
    location: string;
    department: string;
    extension: string;
    DDI: string;
    email?: string;
}

export interface Contacts {
    [key:string]: Contact[];
}