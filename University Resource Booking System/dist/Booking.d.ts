export declare enum BookingStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    CANCELLED = "CANCELLED"
}
export interface Booking {
    bookingId: number;
    resourceId: number;
    userEmail: string;
    durationInHours: number;
    status: BookingStatus;
    createdAt: Date;
}
export type NewBookingInput = Omit<Booking, 'bookingId' | 'createdAt' | 'status'>;
export type UpdateBookingInput = Partial<Booking>;
//# sourceMappingURL=Booking.d.ts.map