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
  const [currentDate, setCurrentDate] = useState(new Date(2021, 4, 25));
  const [currentEventDescription, setCurrentEventDescription] = useState(null);

  const handlePropertyChange = (e) => {
    if (e.name === 'currentDate') {
      setCurrentDate(e.value);
    }
  };

  const handleEventClick = (e) => {
    setCurrentEventDescription(e.appointmentData.description); // Assuming the event data has a 'description' field
  };

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
        timeZone="Europe/Berlin"
        adaptivityEnabled={true}
        onAppointmentClick={handleEventClick} // Add event click handler
      >
        <View type="day" startDayHour={10} endDayHour={22} />
        <View type="week" startDayHour={10} endDayHour={22} />
        <View type="month" />
        <Editing allowDragging={false} />
        <Editing allowTimeZoneEditing={true} />
      </Scheduler>
      {currentEventDescription && <div>Description: {currentEventDescription}</div>}
    </>
  );
}

export default Contact;