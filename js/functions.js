const isMeetingWithinWorkingHours = (startWorkDay, endWorkDay, startMeeting, meetingDuration) => {
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startWorkMinutes = timeToMinutes(startWorkDay);
  const endWorkMinutes = timeToMinutes(endWorkDay);
  const startMeetingMinutes = timeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + meetingDuration;

  return startMeetingMinutes >= startWorkMinutes && endMeetingMinutes <= endWorkMinutes;
};

export { isMeetingWithinWorkingHours };
