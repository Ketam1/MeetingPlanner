import MeetingsRepository from 'repositories/meetingsRepository';

const repository = new MeetingsRepository();

const getMeetings = async ( data ) => repository.getMeetings(data);

const saveMeeting = async (data) => repository.saveMeeting(data);

const deleteMeetings = async (data) => repository.deleteMeetings(data);

const createMeeting = async (data) => repository.createMeeting(data);

export default {
  getMeetings,
  saveMeeting,
  deleteMeetings,
  createMeeting
};
