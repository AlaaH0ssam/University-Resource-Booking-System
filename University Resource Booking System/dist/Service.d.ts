import { Booking, NewBookingInput, UpdateBookingInput } from "./Booking";
import { ResourceType, Resource } from "./Resource";
export declare const createBooking: (input: NewBookingInput) => Booking;
export declare const updateBookingStatus: (bookings: Booking[], id: number, update: UpdateBookingInput) => Booking;
export declare const calculateTotalBookingHours: (bookings: Booking[]) => number;
export declare const filterResourcesByType: (resources: Resource[], type: ResourceType) => Resource[];
export declare const generateBookingSummary: (bookings: Booking[], resources: Resource[]) => any[];
//# sourceMappingURL=Service.d.ts.map