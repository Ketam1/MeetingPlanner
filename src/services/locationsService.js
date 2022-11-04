import LocationsRepository from 'repositories/LocationsRepository';

const repository = new LocationsRepository();

const getLocations = async ( data ) => repository.getLocations(data);

export default {
  getLocations,
};
