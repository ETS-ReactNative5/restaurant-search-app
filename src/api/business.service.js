import { REACT_APP_API_LIMIT } from "@env";
import API from "./yelp";
class BusinessService {
  entity = `/businesses`;

  async getAll(term, location) {
    const fetchResponse = await API.get(`${this.entity}/search`, {
      params: {
        limit: REACT_APP_API_LIMIT,
        term,
        location,
      },
    });
    const { businesses } = fetchResponse.data;
    return businesses;
  }

  async get(id) {
    const fetchResponse = await API.get(`${this.entity}/${id}`);
    const { data } = fetchResponse;
    return data;
  }
}

export default new BusinessService();
