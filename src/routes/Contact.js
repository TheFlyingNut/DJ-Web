<<<<<<< HEAD
=======
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"; 
import 'devextreme/dist/css/dx.light.css';
import './Contact.css';

>>>>>>> 5980a391df5db28c79bc3990c9acad409bcd71bf
import { useState } from 'react';
import { Scheduler } from 'devextreme-react/scheduler';
import { appointments } from './data.js';
import { View, Editing } from 'devextreme-react/scheduler';
import Navbar from "../components/Navbar";
import './Contact.css';

function Contact() {
<<<<<<< HEAD
  const [currentDate, setCurrentDate] = useState(new Date(2021, 4, 25));
  const [selectedDate, setSelectedDate] = useState(null);
=======
  const [currentDate, setCurrentDate] = useState(new Date());
>>>>>>> 5980a391df5db28c79bc3990c9acad409bcd71bf
  const [currentEventDescription, setCurrentEventDescription] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');

  const handlePropertyChange = (e) => {
    if (e.name === 'currentDate') {
      setCurrentDate(e.value);
      setSelectedDate(null); // Clear selected date when date changes
      setCurrentEventDescription(null);
    }
  };

  const handleCellClick = (e) => {
    setSelectedDate(e.cellData.startDate); // Set selected date when cell clicked
  };

  const handleEventClick = (e) => {
    setCurrentEventDescription(e.appointmentData.description); // Set description when event clicked
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.value); // Set selected location
  };

  const filteredAppointments = appointments.filter(appointment => 
    selectedDate && new Date(appointment.startDate).toLocaleDateString() === selectedDate.toLocaleDateString()
  );

  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <div className="scheduler-container">
        <div className="scheduler">
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
            onCellClick={handleCellClick} // Handle day selection
            onAppointmentClick={handleEventClick}
          >
            <View type="day" startDayHour={10} endDayHour={22} />
            <View type="week" startDayHour={10} endDayHour={22} />
            <View type="month" />
            <Editing allowDragging={false} />
            <Editing allowTimeZoneEditing={true} />
          </Scheduler>
        </div>
        {selectedDate && (
          <div className="description-sidebar">
            <div className="description">
              <button className="close-btn" onClick={() => setSelectedDate(null)}>Close</button>
              <h3>Events on {selectedDate.toLocaleDateString()}:</h3>
              {filteredAppointments.map(appointment => (
                <div key={appointment.id}>
                  <p>{appointment.title}</p>
                  <p>{appointment.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="location-dropdown">
        <label>Select Location:</label>
        <select value={selectedLocation} onChange={handleLocationChange}>
          <option value="">Select</option>
          <option value="Seminar Hall">Seminar Hall</option>
          <option value="3rd Floor Lobby">3rd Floor Lobby</option>
          <option value="BJ Hall">BJ Hall</option>
        </select>
      </div>
=======
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
>>>>>>> 5980a391df5db28c79bc3990c9acad409bcd71bf
    </>
  );
}

export default Contact;
