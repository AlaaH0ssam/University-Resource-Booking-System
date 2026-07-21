enum BookingStatus { PENDING="PENDING",
     APPROVED="APPROVED", CANCELLED="CANCELLED"}

interface Booking{
    bookingId :number;
    resourceId :number;
    userEmail :string;
    durationInHours :number;
    status :BookingStatus;
    createdAt :Date;
}
type NewBookingInput =Omit<Booking, 'bookingId'|'createdAt'|'status'>
type UpdateBookingInput= Partial<Booking>