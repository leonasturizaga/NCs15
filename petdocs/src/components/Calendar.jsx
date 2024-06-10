import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './css/Calendar.css';
const localizer = momentLocalizer(moment);

const CalendarComponent = ({ nick }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/events/`)
      .then(response => response.json())
      .then(data => {
        const formattedEvents = data.map(event => ({
          id: event.id,
          title: `${event.title} - ${event.pet_name}`,
          start: new Date(event.startdate),
          end: new Date(event.enddate),
          description: event.description,
        }));
        setEvents(formattedEvents);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, [nick]);

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: '#f9944e',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block'
    };
    return {
      style: style
    };
  };

  const EventComponent = ({ event }) => (
    <span>
      <strong>{event.title}</strong>
      {event.description && ':  ' + event.description}
    </span>
  );

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: EventComponent
        }}
      />
    </div>
  );
};

export default CalendarComponent;
