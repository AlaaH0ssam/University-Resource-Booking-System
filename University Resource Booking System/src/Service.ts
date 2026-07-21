import { Booking, NewBookingInput, BookingStatus,UpdateBookingInput } from "./Booking";
import { ResourceType, Resource } from "./Resource";

export const  createBooking= (input:NewBookingInput ): Booking => {
    const id = Math.random();
    const initial_status = BookingStatus.PENDING;
    const Today = new Date();

    const Nbooking: Booking={
        ...input,
        bookingId : id,
        status:initial_status,
        createdAt:Today

    }
    return Nbooking;
}


export const  updateBookingStatus= (bookings: Booking[], id: number, update: UpdateBookingInput): Booking => {
   
   let updatedBooking: Booking | undefined;
    const Mod_Booking = bookings.map(x=> 
        {
            if (x.bookingId=== id){
                const Modified = {...x , ...update};

        updatedBooking = Modified;
        return updatedBooking;
    }
        return x;
        });
        if (!updatedBooking) {
            throw new Error(`Booking with ID ${id} not found.`);
        }

        return updatedBooking;
}

export const calculateTotalBookingHours=(bookings: Booking[]): number=> {
   const TotalHours =  bookings.reduce((acc,bookings)=> {
    if (bookings.status === BookingStatus.APPROVED) {
            return acc + bookings.durationInHours; 
        }
            return acc; 
    }, 0);
   return TotalHours;

}

export const filterResourcesByType=(resources: Resource[], type: ResourceType): Resource[] => {
    const match = resources.filter(x=> x.type === type);
    return match;
}

export const generateBookingSummary=(bookings: Booking[], resources: Resource[]): any[] => {
    const ReportObj = bookings.map(x=>
    {
        const res = resources.find(a=> a.id === x.resourceId);
 return{
        booking_ID: x.bookingId,
        user_email: x.userEmail,
        Resource_name: res ? res.name : "Unknown Resource"    };
    }
    );

return ReportObj;
}
