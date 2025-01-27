export const BannerText = [
  {
    id: 1,
    text: "Plan Your Trip, Book Your Ticket",
  },
  {
    id: 2,
    text: "Book Now, Travel soon",
  },
  {
    id: 3,
    text: "Travel Smart, travel easy",
  },
  {
    id: 4,
    text: "Hit the road with us",
  },
  {
    id: 5,
    text: "Travel Anywhere, Anytime",
  },
  {
    id: 6,
    text: "Where are you traveling to?",
  },
  {
    id: 7,
    text: "Explore new destinations, effortlessly",
  },
];

export const ContactInfo = [
  {
    id: 1,
    title: "E-mail",
    icon: "gmail.png",
    email: "vipjeountransport@gmail.com",
  },
  {
    id: 2,
    title: "Phone Number",
    icon: "call.png",
    phone: "+233 24 526 4999",
  },
  {
    id: 3,
    title: "Address",
    icon: "location.png",
    address: "Accra - Ghana",
  },
];

[
  {
    city: "Accra",
    Terminal: "Circle",
  },
  {
    city: "Kumasi",
    Terminal: "Asafo",
  },
  {
    city: "Bolga",
    Terminal: "Bolga Station",
  },
  {
    city: "Navrongo",
    Terminal: "Navrongo Vip Station",
  },
  {
    city: "Accra",
    Terminal: "Circle",
  },
  {
    city: "Accra",
    Terminal: "Circle",
  },
  {
    city: "Accra",
    Terminal: "Circle",
  },
];

[
  {
    id: 1,
    city: "Accra",
    terminal: "Circle",
    routes: [
      {
        from: "Accra",
        to: "kumasi",
        type: "scheduled",
        schedule: [
          {
            date: "friday 25th jan 2025",
            time: "08:30PM",
          },
        ],
        price: 150,
        seats: 34,
        Arrival: "8:00PM",
      },
    ],
  },
];

// model Route {
//   id        String        @id @default(auto()) @map("_id") @db.ObjectId
//   city      String
//   terminal  String
//   routes    RouteDetails[]

//   createdAt DateTime      @default(now())
//   updatedAt DateTime      @updatedAt
// }

// model RouteDetails {
//   id       String      @id @default(auto()) @map("_id") @db.ObjectId
//   from     String
//   to       String
//   type     String      // e.g., "scheduled"
//   schedule Schedule[]
//   price    Float
//   seats    Int
//   arrival  String      // Arrival time (string for simplicity)

//   route    Route       @relation(fields: [routeId], references: [id], onDelete: Cascade)
//   routeId  String
// }

// model Schedule {
//   id    String   @id @default(auto()) @map("_id") @db.ObjectId
//   date  String   // Use ISO 8601 format for consistency (e.g., "2025-01-25")
//   time  String   // Use a consistent format (e.g., "20:30" or "08:30PM")

//   routeDetails RouteDetails @relation(fields: [routeDetailsId], references: [id], onDelete: Cascade)
//   routeDetailsId String
// }

// now let's create a create a form using antd so that we can upload the data to the endpoint

export const cities = [
  {
    name: "Accra",
    terminals: [
      {
        name: "Circle Terminal",
        routes: [
          {
            from: "Accra",
            to: "Kumasi",
            type: "scheduled",
            date: "Wednesday",
            schedule: [
              {
                time: "08:30:00",
                seats: 34,
                price: 150,
                arrival: "2024-10-27 20:00:00",
              },
              {
                time: "08:30:00",
                seats: 34,
                price: 150,
                arrival: "2024-10-27 20:00:00",
              },
            ],
          },
        ],
      },
    ],
  },
];


