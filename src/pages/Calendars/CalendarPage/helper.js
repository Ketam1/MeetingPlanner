export const formatMeetings = (meetings) => {
  return meetings.map(meeting => {
    return {
        id: meeting.meetingId,
        title: meeting.title,
        start: meeting.startDate,
        end: meeting.endDate,
        extendedProps: {
          meetingId: meeting.meetingId,
          title: meeting.title,
          startDate: meeting.startDate,
          endDate: meeting.endDate,
          responsibleName: meeting.responsibleName,
          coffeeQuantity: meeting.coffeeQuantity ? meeting.coffeeQuantity : 0,
          description: meeting.description
        }   
    }
  })
}