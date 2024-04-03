export const appointments = [
    {
        title: "Install New Database",
        startDate: new Date("2021-05-23T08:45:00.000Z"),
        endDate: new Date("2021-05-23T09:45:00.000Z")
    }, {
        title: "Create New Online Marketing Strategy",
        startDate: new Date("2021-05-24T09:00:00.000Z"),
        endDate: new Date("2021-05-24T11:00:00.000Z")
    }, {
        title: "Upgrade Personal Computers",
        startDate: new Date("2021-05-25T10:15:00.000Z"),
        endDate: new Date("2021-05-25T13:30:00.000Z")
    }, {
        title: "Customer Workshop",
        startDate: new Date("2021-05-26T08:00:00.000Z"),
        endDate: new Date("2021-05-26T10:00:00.000Z"),
        dayLong: true,
        recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
    }, {
        title: "Prepare Development Plan",
        startDate: new Date("2021-05-27T08:00:00.000Z"),
        endDate: new Date("2021-05-27T10:30:00.000Z")
    }, {
        title: "Testing",
        startDate: new Date("2021-05-23T09:00:00.000Z"),
        endDate: new Date("2021-05-23T10:00:00.000Z"),
        recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
    }, {
        title: "Meeting of Instructors",
        startDate: new Date("2021-05-24T10:00:00.000Z"),
        endDate: new Date("2021-05-24T11:15:00.000Z"),
        recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
    }, {
        title: "Recruiting students",
        startDate: new Date("2021-05-25T08:00:00.000Z"),
        endDate: new Date("2021-05-25T09:00:00.000Z"),
        recurrence: "FREQ=YEARLY",
    }, {
        title: "Monthly Planning",
        startDate: new Date("2024-05-26T09:30:00.000Z"),
        endDate: new Date("2024-05-26T10:45:00.000Z"),
        recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
    }, {
        title: "Open Day",
        startDate: new Date("2021-05-27T09:30:00.000Z"),
        endDate: new Date("2021-05-27T19:00:00.000Z"),
    },
    {
        text: "Meeting",
        startDate: new Date(2021, 4, 25, 10, 0),
        endDate: new Date(2021, 4, 25, 12, 0),
        place: "Seminar Hall", // Add place information
      },
      {
        text: "Conference",
        startDate: new Date(2021, 4, 26, 14, 0),
        endDate: new Date(2021, 4, 26, 16, 0),
        place: "BJ Hall", // Add place information
      },
      {
        text: "Presentation",
        startDate: new Date(2021, 4, 27, 9, 0),
        endDate: new Date(2021, 4, 27, 11, 0),
        place: "Lobby", // Add place information
      }
];