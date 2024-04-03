import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"; 
import 'devextreme/dist/css/dx.light.css';
import './Contact.css';

import { useState } from 'react';
import { Scheduler } from 'devextreme-react/scheduler';
import { appointments } from './data.js';
import { View, Editing } from 'devextreme-react/scheduler';

function Contact() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentEventDescription, setCurrentEventDescription] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');

  const handlePropertyChange = (e) => {
    if (e.name === 'currentDate') {
      setCurrentDate(e.value);
      setCurrentDate(null); // Clear selected date when date changes
      setCurrentEventDescription(null);
    }
  };

  const handleCellClick = (e) => {
    setCurrentDate(e.cellData.startDate); // Set selected date when cell clicked
  };

  const handleEventClick = (e) => {
    setCurrentEventDescription(e.appointmentData.description); // Set description when event clicked
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.value); // Set selected location
  };

  const filteredAppointments = appointments.filter(appointment => 
    currentDate && new Date(appointment.startDate).toLocaleDateString() === currentDate.toLocaleDateString()
  );

  return (
    <>
      <Navbar></Navbar>
      <h2 className="bich">All the events, at your fingertips!</h2>
      <Scheduler
        id="scheduler"
        dataSource={appointments}
        textExpr="title"
        allDayExpr="dayLong"
        recurrenceRuleExpr="recurrence"
        currentDate={currentDate}
        onOptionChanged={handlePropertyChange}
        defaultCurrentView="week"
        timeZone="Asia/Kolkata"
        adaptivityEnabled={true}
        onAppointmentClick={handleEventClick} // Add event click handler
      >
        <View type="day" startDayHour={10} endDayHour={22} />
        <View type="week" startDayHour={10} endDayHour={22} />
        <View type="month" />
        <Editing allowDragging={false} />
      </Scheduler>
      {currentEventDescription && <div>Description: {currentEventDescription}</div>}
    </>
  );
}

export default Contact;
