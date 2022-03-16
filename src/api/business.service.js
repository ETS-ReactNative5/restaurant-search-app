import API from "./yelp";
import Config from "react-native-config";

class BusinessService {
  entity = `/businesses`;

  async searchBusiness() {
    const fetchResponse = await API.get(`${this.entity}/search`, {
      params: {
        limit: 50,
        term: "pizza",
        location: "san jose",
      },
    });
    const { businesses } = fetchResponse.data;
    return businesses;
  }
}

export default new BusinessService();
