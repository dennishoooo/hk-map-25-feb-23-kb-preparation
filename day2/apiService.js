console.log("hiiiii");
const url = "https://data.etabus.gov.hk/v1/transport/kmb";

let apiService = {
  getStops: async () => {
    let response = await fetch(url + "/stop");
    let result = await response.json();
    let stops = result.data;
    return stops;
  },
  getRoutes: async () => {
    let response = await fetch(url + "/route/");

    let result = await response.json();
    let buses = result.data;
    return buses;
  },
  getBusDetail: async (route, direction, service_type) => {
    let response = await fetch(
      url + `/route-stop/${route}/${direction}/${service_type}`
    );
    let result = await response.json();
    return result.data;
  },
};
