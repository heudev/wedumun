// Type definitions for WEDUMUN events

export interface Committee {
    name: string;
    topic: string;
    chair: string;
}

export interface ScheduleEvent {
    time: string;
    activity: string;
}

export interface ScheduleDay {
    day: string;
    date: string;
    events: ScheduleEvent[];
}

export interface Event {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    date: string;
    endDate: string;
    location: string;
    image: string;
    registrationOpen: boolean;
    expectedDelegates: number;
    detailsLink?: string;
    registrationLink?: string;
    committees: Committee[];
    schedule: ScheduleDay[];
}

export interface PastEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    participants: number;
    countries: number;
    image: string;
}

export interface EventsData {
    events: Event[];
    pastEvents: PastEvent[];
}
