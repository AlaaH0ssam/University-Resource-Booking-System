 export enum BookingStatus { PENDING="PENDING",
     APPROVED="APPROVED", CANCELLED="CANCELLED"}

export interface Booking{
    bookingId :number;
    resourceId :number;
    userEmail :string;
    durationInHours :number;
    status :BookingStatus;
    createdAt :Date;
}
//omit system generated fields
export type NewBookingInput =Omit<Booking, 'bookingId'|'createdAt'>
//all data to be optional
export type UpdateBookingInput= Partial<Booking>