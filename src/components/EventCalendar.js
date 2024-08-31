import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

// You'll also need to import the CSS file in your main app file:
// import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const SchedulingCalendar = () => {
    const [events, setEvents] = useState([]);

    const handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name');
        if (title) {
            setEvents([...events, { start, end, title }]);
        }
    };

    return (
        <div className="h-[600px]">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelect}
            />
        </div>
    );
};

export default SchedulingCalendar;