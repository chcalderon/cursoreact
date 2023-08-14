import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { CalendarEnvent, CalendarModal, Navbar } from '../';
import { getMessagesES, localizer } from '../../helpers';
import { useUiStore } from '../../hooks';



const events = [{
    title: 'Dia del peeko',
    notes: 'Hay que comprar la torta',
    start: new Date(),
    end: addHours( new Date(),2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Christian'
    }
}]



export const CalendarPage = () => {

    const { openDateModal } = useUiStore()

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week' );


    const eventStyleGetter = ( event, start, end, isSelected ) => {
        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '1px',
            opacity: 0.8,
            color: 'white'
        }

        return {
            style
        }
    }

    const onDoubleClick = ( event ) => {
        console.log({doubleClick: event});
        openDateModal();
    }
    const onSelect = ( event ) => {
        console.log({click: event});
    }
    const onViewChanged = ( event ) => {
        // console.log({event});
        if (lastView !== event) {
            setLastView({event});
            localStorage.setItem('lastView', event);
        }
    }

    return (
        <>
            <Navbar />
            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 80px)' }}
                messages={ getMessagesES() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEnvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <CalendarModal />
        </>
    )
}
