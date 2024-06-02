export const Places = [
  {
    id: 1,
    from: "Accra",
    Terminal: "circle VIP",
    price: 340.0,
  },
  {
    id: 2,
    from: "Kumasi",
  },
  {
    id: 3,
    from: "Bolga",
  },
  {
    id: 4,
    from: "Bawku",
  },
  {
    id: 5,
    from: "Navrongo",
  },
  {
    id: 6,
    from: "Tamale",
  },
  {
    id: 7,
    from: "Takoradi",
  },
  {
    id: 8,
    from: "Cape Coast",
  },
  {
    id: 9,
    from: "Wa",
  },
  {
    id: 10,
    from: "Tarkwa",
  },
  {
    id: 11,
    from: "Accra",
  },
  {
    id: 12,
    from: "Accra",
  },
  {
    id: 13,
    from: "Accra",
  },
  {
    id: 14,
    from: "Accra",
  },
  {
    id: 15,
    from: "Accra",
  },
  {
    id: 16,
    from: "Accra",
  },
  {
    id: 17,
    from: "Accra",
  },
  {
    id: 18,
    from: "Accra",
  },
  {
    id: 19,
    from: "Accra",
  },
  {
    id: 20,
    from: "Accra",
  },
  {
    id: 21,
    from: "Accra",
  },
  {
    id: 22,
    from: "Bunkprugu",
  },
  {
    id: 23,
    from: "Sefwei",
  },
  {
    id: 24,
    from: "Ejisu",
  },
];

export const Regions = [
  {
    id: 1,
    location: "kumasi",
    routes: [
      {
        id: 1,
        from: "Kumasi",
        to: "Takoradi",
        type: "Scheduled",
        price: 350,
        schedule: "Saturday",
        ticket: ""
      },
    ],
    terminal: [
      {
        Station: "circle VIP",
      }
    ]
  },
  {
    id: 2,
    location: "Accra",
    routes: [
      {
        id: 1,
        from: "Accra",
        to: "Takoradi",
        type: "Scheduled",
        price: 350,
        schedule: "Saturday",
        ticket: ""
      },
    ],
  },
  {
    id: 1,
    location: "Takoradi",
    routes: [
      {
        id: 1,
        from: "Takoradi",
        to: "Accra",
        type: "Scheduled",
        price: 350,
        schedule: "Saturday",
      },
    ],
  },
];
