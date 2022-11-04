import axios from 'axios';

export default class MeetingsRepository {
  constructor({ routePrefix = "https://localhost:7205", routeVersion = 'v1', routeContext = 'meetings' } = {}) {
    this.url = `${routePrefix}/api/${routeVersion}/${routeContext}/`;
  }

  getMeetings = async (data) => axios.post(
    `${this.url}query`,
    data
  );

  saveMeeting = async (data) => axios.post(
    `${this.url}edit`,
    data
  );

  createMeeting = async (data) => axios.post(
    `${this.url}add`,
    data
  );

  deleteMeetings = async (data) => axios.post(
    `${this.url}delete`,
    data
  );s
}
