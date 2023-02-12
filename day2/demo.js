let data = [
  {
    route: "1",
    driver: { name: "chan tai man" },

    stops: [
      { name: "a", region: "hk" },
      { name: "b", region: "kln" },
      { name: "c", region: "nt" },
    ],
  },
  {
    route: "2",
    driver: { name: "chan tai man" },

    stops: [
      { name: "a", region: "hk" },
      { name: "b", region: "kln" },
      { name: "c", region: "nt" },
    ],
  },
  {
    route: "3",
    driver: { name: "chan tai man" },
    stops: [
      { name: "a", region: "hk" },
      { name: "b", region: "kln" },
      { name: "c", region: "nt" },
    ],
  },
];
for (let bus of data) {
  for (let key in bus) {
    if (typeof bus[key] === "object" && Array.isArray(bus[key])) {
      for (let item of bus[key]) {
        console.log(`${key}-name: ${item.name}`);
      }
      continue;
    }
    if (typeof bus[key] === "object") {
      for (let key2 in bus[key]) {
        console.log(`${key}-name: ${bus[key][key2]}`);
      }
      continue;
    }
    console.log(`${key} : ${bus[key]}`);
  }
}
