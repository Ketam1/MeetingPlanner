import LocationsRepository from 'repositories/locationsRepository';

const repository = new LocationsRepository();

const getLocations = async () => repository.getLocations();

export default {
  getLocations,
};
