import API from "./yelp";
import { REACT_APP_API_LIMIT } from "@env";
class BusinessService {
  entity = `/businesses`;

  async searchBusiness(term, location) {
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
}

export default new BusinessService();
