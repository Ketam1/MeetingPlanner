import axios from 'axios';
import { API_URL } from 'common/helpers/api';

export default class LocationsRepository {
  constructor({ routePrefix = API_URL, routeVersion = 'v1', routeContext = 'locations' } = {}) {
    this.url = `${routePrefix}/api/${routeVersion}/${routeContext}/`;
  }

  getMeetings = async () => axios.get(`${this.url}allInfo`);

}
