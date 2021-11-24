import React, { useState } from "react";
import Scheduler from "react-mui-scheduler";
import moment from "moment";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router";

export default function EventSchedular({ data, ...props }) {
  const navigate = useNavigate();
  console.log(data, "in events");
  let newEvents = data.appointments.map((event) => {
    return {
      id: event.id,
      label: event.title,
      groupLabel: event.title,
      user: event.physicianName,
      color:
        event.status === "scheduled"
          ? "#3498eb"
          : event.status === "completed"
          ? "#0af59b"
          : event.status === "pending"
          ? "#ebcc34"
          : "#f54e6a",
      startHour: event.scheduleTime,
      endHour: event.scheduleTime,
      date: moment(event.scheduleDate).format("YYYY-MM-DD"),
      createdAt: moment(event.createdAt).format("YYYY-MM-DD"),
      createdBy: event.patientName,
    };
  });

  console.log("new Events", newEvents);

  function ColorBadge() {
    return (
      <Stack spacing={2} direction="row">
        <Badge badgeContent={4} color="secondary"></Badge>
        <Badge badgeContent={4} color="success"></Badge>
      </Stack>
    );
  }

  const [state, setState] = useState({
    options: {
      transitionMode: "zoom", // or fade
      startWeekOn: "Mon", // or Sun
      defaultMode: "month", // or week | day | timeline
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540,
    },
    alertProps: {
      open: true,
      color: "info", // info | success | warning | error
      severity: "info", // info | success | warning | error
      message: "Patient Appointments",
      showActionButton: true,
      showNotification: true,
      delay: 1500,
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true,
    },
  });

  const events = [
    {
      id: "event-1",
      label: "Medical consultation",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "04:00 AM",
      endHour: "05:00 AM",
      date: "2021-09-28",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-6",
      label: "akram consultation",
      groupLabel: "Dr Vikki",
      user: "Dr Vikki",
      color: "#f28f6a",
      startHour: "06:00 AM",
      endHour: "07:00 AM",
      date: "2021-09-28",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-2",
      label: "Medical consultation",
      groupLabel: "Dr Claire Brown",
      user: "Dr Claire Brown",
      color: "#099ce5",
      startHour: "09:00 AM",
      endHour: "10:00 AM",
      date: "2021-09-29",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-3",
      label: "Medical consultation",
      groupLabel: "Dr Menlendez Hary",
      user: "Dr Menlendez Hary",
      color: "#263686",
      startHour: "13 PM",
      endHour: "14 PM",
      date: "2021-09-30",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-4",
      label: "Consultation prénatale",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "08:00 AM",
      endHour: "09:00 AM",
      date: "2021-10-01",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
  ];

  const handleCellClick = (event, row, day) => {
    // Do something...

    console.log("Cell Click", day);
  };

  const handleEventClick = (event, item) => {
    // Do something...
    console.log("event Click", item);
    //navigate(item.id);
    navigate(`${item.id}`);
  };

  const handleEventsChange = (item) => {
    // Do something...
    console.log("events change", item);
  };

  const handleAlertCloseButtonClicked = (item) => {
    // Do something...
  };

  return (
    <>
      <Scheduler
        events={newEvents}
        options={state?.options}
        alertProps={state?.alertProps}
        toolbarProps={state?.toolbarProps}
        onEventsChange={handleEventsChange}
        onCellClick={handleCellClick}
        onTaskClick={handleEventClick}
        onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
      />
    </>
  );
}
