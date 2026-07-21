"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./manager");
const Booking_1 = require("./Booking");
const Resource_1 = require("./Resource");
const Service_1 = require("./Service");
const NewManager = new manager_1.EntityMananger;
NewManager.add({ id: 1, name: "Main AI Lab", type: Resource_1.ResourceType.LECTURE_HALL, isAvailable: true });
NewManager.add({ id: 2, name: "Hall 1", type: Resource_1.ResourceType.PROJECTOR, isAvailable: false });
NewManager.add({ id: 3, name: "Class 7", type: Resource_1.ResourceType.LAB, isAvailable: true });
const booking1 = {
    userEmail: "alaa@gmail.com",
    durationInHours: 2,
    resourceId: 1
};
const b1 = (0, Service_1.createBooking)(booking1);
const booking2 = {
    userEmail: "alaa@yahoo.com",
    durationInHours: 2.8,
    resourceId: 2
};
const b2 = (0, Service_1.createBooking)(booking2);
let bookingsList = [];
bookingsList.push(b1);
bookingsList.push(b2);
const updateToApproved = {
    status: Booking_1.BookingStatus.APPROVED
};
bookingsList = bookingsList.map(b => b.bookingId === b1.bookingId ? (0, Service_1.updateBookingStatus)(bookingsList, b1.bookingId, updateToApproved) : b);
const updateToCANCELLED = {
    status: Booking_1.BookingStatus.CANCELLED
};
bookingsList = bookingsList.map(b => b.bookingId === b2.bookingId ? (0, Service_1.updateBookingStatus)(bookingsList, b2.bookingId, updateToCANCELLED) : b);
const totalHours = (0, Service_1.calculateTotalBookingHours)(bookingsList);
console.log(`[REPORT] Total Cumulative Hours for Approved Bookings: ${totalHours} hours.`);
const allResources = NewManager.Getall();
const summaryReport = (0, Service_1.generateBookingSummary)(bookingsList, allResources);
console.log(`\n[REPORT] Booking Summary:`);
summaryReport.forEach(item => {
    console.log(`- Booking ID: ${item.booking_ID} | User: ${item.user_email} | Resource Name: ${item.Resource_name}`);
});
//# sourceMappingURL=index.js.map