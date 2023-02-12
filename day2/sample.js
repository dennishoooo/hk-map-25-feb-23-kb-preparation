// api reference: https://data.gov.hk/tc-data/dataset/hk-td-tis_21-etakmb

let busesContainer = document.querySelector("#buses-container");

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
    busesContainer.appendChild(busDiv);
  }
}

main();
