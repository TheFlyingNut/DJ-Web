import { useState } from 'react';
import { Scheduler } from 'devextreme-react/scheduler';
import { appointments } from './data.js';
import { View, Editing } from 'devextreme-react/scheduler';
import Navbar from "../components/Navbar";
import './Contact.css';

function Contact() {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 4, 25));
  const [selectedDate, setSelectedDate] = useState(null);
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
    </>
  );
}

export default Contact;
