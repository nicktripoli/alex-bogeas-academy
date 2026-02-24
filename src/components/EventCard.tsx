import { cn } from "@/lib/utils";
import { Calendar, MapPin, Users } from "lucide-react";
import NeonButton from "./NeonButton";
import { Link } from "react-router-dom";

interface EventProps {
  id: string;
  title: string;
  date: string;
  location: string;
  seatsRemaining: number;
  totalSeats: number;
  price: number;
  image: string;
  isSoldOut?: boolean;
}

const EventCard = ({ event }: { event: EventProps }) => {
  const isSoldOut = event.seatsRemaining === 0 || event.isSoldOut;

  return (
    <div className="group relative bg-card border border-white/5 overflow-hidden hover:border-accent/50 transition-all duration-500 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
        />
        {isSoldOut && (
          <div className="absolute top-4 right-4 z-20 bg-destructive text-white px-4 py-1 text-xs font-bold uppercase tracking-widest border border-destructive">
            Sold Out
          </div>
        )}
        {!isSoldOut && event.seatsRemaining < 10 && (
          <div className="absolute top-4 right-4 z-20 bg-accent/90 text-black px-4 py-1 text-xs font-bold uppercase tracking-widest animate-pulse">
            Only {event.seatsRemaining} Seats Left
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow relative z-20">
        <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
          <Calendar className="w-3 h-3" />
          <span>{event.date}</span>
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {event.title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
          <MapPin className="w-4 h-4 text-accent" />
          <span>{event.location}</span>
        </div>

        <div className="mt-auto border-t border-white/10 pt-6 flex flex-col gap-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{event.totalSeats - event.seatsRemaining} / {event.totalSeats} Booked</span>
            </div>
            <span className="text-xl font-bold text-white">€{event.price}</span>
          </div>

          <Link to={`/seminars/${event.id}`} className="w-full">
            <NeonButton variant="outline" fullWidth disabled={isSoldOut}>
              {isSoldOut ? "Join Waitlist" : "Reserve Seat"}
            </NeonButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
