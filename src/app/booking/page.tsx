import DateReserve from "@/components/DateReserve";
import Button from "@mui/material/Button";

export default function BookingPage() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-bold">Venue Booking</h1>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Date, Contact Information and Venue</div>
                <DateReserve />
            </div>

            <Button
                type="submit"
                name="Book Venue"
                variant="contained"
            >
                Book Venue
            </Button>


        </main>

    );
}