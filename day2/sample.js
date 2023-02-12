// api reference: https://data.gov.hk/tc-data/dataset/hk-td-tis_21-etakmb

let busesContainer = document.querySelector("#buses-container");
let stopsContainer = document.querySelector("#stops-container");

async function main() {
  let allStops = await apiService.getStops();
  let buses = await apiService.getRoutes();
  await showBuses(buses, allStops);
}

async function showBuses(buses, allStops) {
  for (let bus of buses) {
    let busDiv = document.createElement("li");
    busDiv.textContent = `${bus.route}: ${bus.dest_tc}`;
    busDiv.addEventListener("click", async () => {
      console.log(bus);
      let direction = bus.bound === "I" ? "inbound" : "outbound";
      let stops = await apiService.getBusDetail(
        bus.route,
        direction,
        bus.service_type
      );
      showStops(stops, allStops);
    });
    busesContainer.appendChild(busDiv);
  }
}

function showStops(stops, allStops) {
  stopsContainer.innerHTML = "";
  for (let stop of stops) {
    let stopDiv = document.createElement("li");
    let foundStop = allStops.find((s) => s.stop === stop.stop);
    stopDiv.textContent = `${foundStop.name_tc}`;
    stopsContainer.appendChild(stopDiv);
  }
}
// fetch  https://data.etabus.gov.hk/v1/transport/kmb/route-stop/{route}/{direction}/{service_type}
main();
