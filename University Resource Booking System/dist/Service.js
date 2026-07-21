"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBookingSummary = exports.filterResourcesByType = exports.calculateTotalBookingHours = exports.updateBookingStatus = exports.createBooking = void 0;
const Booking_1 = require("./Booking");
const createBooking = (input) => {
    const id = Math.random();
    const initial_status = Booking_1.BookingStatus.PENDING;
    const Today = new Date();
    const Nbooking = {
        ...input,
        bookingId: id,
        status: initial_status,
        createdAt: Today
    };
    return Nbooking;
};
exports.createBooking = createBooking;
const updateBookingStatus = (bookings, id, update) => {
    let updatedBooking;
    const Mod_Booking = bookings.map(x => {
        if (x.bookingId === id) {
            const Modified = { ...x, ...update };
            updatedBooking = Modified;
            return updatedBooking;
        }
        return x;
    });
    if (!updatedBooking) {
        throw new Error(`Booking with ID ${id} not found.`);
    }
    return updatedBooking;
};
exports.updateBookingStatus = updateBookingStatus;
const calculateTotalBookingHours = (bookings) => {
    const TotalHours = bookings.reduce((acc, bookings) => {
        if (bookings.status === Booking_1.BookingStatus.APPROVED) {
            return acc + bookings.durationInHours;
        }
        return acc;
    }, 0);
    return TotalHours;
};
exports.calculateTotalBookingHours = calculateTotalBookingHours;
const filterResourcesByType = (resources, type) => {
    const match = resources.filter(x => x.type === type);
    return match;
};
exports.filterResourcesByType = filterResourcesByType;
const generateBookingSummary = (bookings, resources) => {
    const ReportObj = bookings.map(x => {
        const res = resources.find(a => a.id === x.resourceId);
        return {
            booking_ID: x.bookingId,
            user_email: x.userEmail,
            Resource_name: res ? res.name : "Unknown Resource"
        };
    });
    return ReportObj;
};
exports.generateBookingSummary = generateBookingSummary;
//# sourceMappingURL=Service.js.map