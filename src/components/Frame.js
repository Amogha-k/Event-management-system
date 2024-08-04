import React, { useState } from "react";
import "./FrameStyle.css";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Frame = () => {
  const [eventType, setEventType] = useState("");
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="frame">
      <div className="group">
        <div className="div">
          <div className="div-2">
            <div className="text-wrapper">Looking for</div>
            <select
              className="select-instance"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              <option value="">Choose event type</option>
              <option value="option1">OPTION 1</option>
              <option value="option2">OPTION 2</option>
            </select>
          </div>
          <div className="div-2">
            <div className="text-wrapper">Mode</div>
            <select
              className="select-instance"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Choose event Mode</option>
              <option value="location1">OFFLINE</option>
              <option value="location2">ONLINE</option>
            </select>
          </div>
          <div className="div-2">
            <div className="text-wrapper">When</div>
            <DatePicker
              className="select-instance"
              selected={selectedDate}
              onChange={handleDateChange}
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy "
              placeholderText="Choose date "
              showTimeSelect={false}
              isClearable
            />
          </div>
        </div>
      </div>
      <button className="button-instance" type="submit">
        <FaSearch />
      </button>
    </div>
  );
};
