import {EntityMananger} from "./manager"
import { Booking, NewBookingInput, BookingStatus,UpdateBookingInput } from "./Booking";
import { ResourceType, Resource } from "./Resource";
import{createBooking, updateBookingStatus,filterResourcesByType,calculateTotalBookingHours,generateBookingSummary}from "./Service"
const NewManager = new EntityMananger<Resource>;
NewManager.add({id:1 ,name :"Main AI Lab", type: ResourceType.LECTURE_HALL,isAvailable: true  })
NewManager.add({id:2 ,name :"Hall 1", type: ResourceType.PROJECTOR,isAvailable: false  })
NewManager.add({id:3 ,name :"Class 7", type: ResourceType.LAB,isAvailable: true  })

const booking1 :NewBookingInput= {
    userEmail :"alaa@gmail.com",
    durationInHours : 2,
    resourceId :1

}
const b1 = createBooking(booking1)
const booking2 :NewBookingInput= {
    userEmail :"alaa@yahoo.com",
    durationInHours : 2.8,
    resourceId :2
}
const b2 =createBooking(booking2)
let bookingsList: Booking[] = [];
bookingsList.push(b1)
bookingsList.push(b2)

const updateToApproved:UpdateBookingInput= {
    status:BookingStatus.APPROVED
}
bookingsList = bookingsList.map(b => 
    b.bookingId === b1.bookingId ? updateBookingStatus(bookingsList, b1.bookingId, updateToApproved) : b
);

const updateToCANCELLED :UpdateBookingInput= {
    status:BookingStatus.CANCELLED
}
bookingsList = bookingsList.map(b => 
    b.bookingId === b2.bookingId ? updateBookingStatus(bookingsList, b2.bookingId, updateToCANCELLED) : b
);


const totalHours = calculateTotalBookingHours(bookingsList);
console.log(`[REPORT] Total Cumulative Hours for Approved Bookings: ${totalHours} hours.`);
const allResources = NewManager.Getall();
const summaryReport = generateBookingSummary(bookingsList, allResources);

console.log(`\n[REPORT] Booking Summary:`);
summaryReport.forEach(item => {
    console.log(`- Booking ID: ${item.booking_ID} | User: ${item.user_email} | Resource Name: ${item.Resource_name}`);
});