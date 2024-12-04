export interface Event {
  slug: string;
  title: string;
  ingress: string;
  description?: string;
  start: Date
  end: Date
  price?: string;
  audience: Audience;
  location: string;
  registrationUrl?: string;
  organizers: Organizer[];
  schedule: Item[];
}

export enum Audience {
  OpenForAll = 'Åpen for alle interesserte',
  PublicSector = 'For ansatte i offentlig sektor',
  InviteOnly = 'For inviterte deltakere',
}

export enum Status {
  Upcoming = 'upcoming',
  Past = 'past',
  Current = 'current',
}

export interface Organizer {
  name: string;
  org?: string;
  url?: string;
}

export interface Item {
  title: string;
  speaker?: string;
  description?: string;
  time: string;
  type: ItemType;
}

export enum ItemType {
  Break = 'Pause',
  Info = 'Informasjon',
  Panel = 'Panel',
  Registration = 'Registrering',
  Talk = 'Presentation',
  Workshop = 'Workshop',
}
