// api reference: https://data.gov.hk/tc-data/dataset/hk-td-tis_21-etakmb

let busesContainer = document.querySelector("#buses-container");
let stopsContainer = document.querySelector("#stops-container");

async function getBusDetail(route, direction, service_type) {
  let url = `https://data.etabus.gov.hk/v1/transport/kmb/route-stop/${route}/${direction}/${service_type}`;
  console.log(url);
  let response = await fetch(url);
  console.log(response);
  let result = await response.json();
  console.log(result);
  return result.data;
}

async function main() {
  let response = await fetch(
    "https://data.etabus.gov.hk/v1/transport/kmb/route/"
  );
  console.log(response);

  let result = await response.json();
  let buses = result.data;
  console.log(buses);
  for (let bus of buses) {
    let busDiv = document.createElement("li");
    busDiv.textContent = `${bus.route}: ${bus.dest_tc}`;
    busDiv.addEventListener("click", async () => {
      console.log(bus);
      let direction = bus.bound === "I" ? "inbound" : "outbound";
      let stops = await getBusDetail(bus.route, direction, bus.service_type);
      console.log(stops);
      stopsContainer.innerHTML = "";
      for (let stop of stops) {
        let stopDiv = document.createElement("li");
        stopDiv.textContent = `${stop.stop}`;
        stopsContainer.appendChild(stopDiv);
      }
    });
    busesContainer.appendChild(busDiv);
  }
}
// fetch  https://data.etabus.gov.hk/v1/transport/kmb/route-stop/{route}/{direction}/{service_type}
main();

getBusDetail("1", "outbound", "1");
