import axios from 'axios';

export default class LocationsRepository {
  constructor({ routePrefix = "https://localhost:7205", routeVersion = 'v1', routeContext = 'locations' } = {}) {
    this.url = `${routePrefix}/api/${routeVersion}/${routeContext}/`;
  }

  getLocations = async () => axios.get(`${this.url}getAll`);

}
