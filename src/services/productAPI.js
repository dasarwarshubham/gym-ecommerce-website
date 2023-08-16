const productsData = [
  {
    id: 1,
    name: "Treadmill",
    description:
      "A motorized running machine that allows you to walk, jog, or run indoors.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Cardio",
    price: "999",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: "Stationary Bike",
    description:
      "An exercise bike that provides a low-impact cardiovascular workout.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Cardio",
    price: "599",
    rating: 4.2,
    reviews: 90,
  },
  {
    id: 3,
    name: "Rowing Machine",
    description:
      "Simulates the action of rowing and offers a full-body workout.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Cardio",
    price: "799",
    rating: 4.7,
    reviews: 150,
  },
  {
    id: 4,
    name: "Elliptical Trainer",
    description:
      "Combines the motions of running, stair climbing, and cross-country skiing for a low-impact workout.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Cardio",
    price: "699",
    rating: 4.4,
    reviews: 105,
  },
  {
    id: 5,
    name: "Adjustable Dumbbells",
    description:
      "Dumbbells with adjustable weight settings, allowing you to perform a variety of strength exercises.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "249",
    rating: 4.8,
    reviews: 200,
  },
  {
    id: 6,
    name: "Resistance Bands",
    description:
      "Elastic bands of varying resistance levels used for strength training exercises.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "29",
    rating: 4.6,
    reviews: 180,
  },
  {
    id: 7,
    name: "Kettlebells",
    description:
      "Cast iron weights with a handle, used for full-body workouts and strength training.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "39",
    rating: 4.3,
    reviews: 140,
  },
  {
    id: 8,
    name: "Yoga Mat",
    description:
      "A cushioned mat for practicing yoga, stretching, and bodyweight exercises.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Flexibility",
    price: "19",
    rating: 4.7,
    reviews: 160,
  },
  {
    id: 9,
    name: "Stability Ball",
    description:
      "A large inflatable ball used for balance, stability, and core exercises.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Core",
    price: "25",
    rating: 4.5,
    reviews: 150,
  },
  {
    id: 10,
    name: "Jump Rope",
    description:
      "A simple but effective cardio tool for high-intensity interval training (HIIT).",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Cardio",
    price: "12",
    rating: 4.4,
    reviews: 130,
  },
  {
    id: 11,
    name: "Pull-Up Bar",
    description:
      "A bar that attaches to a doorway for performing pull-ups and chin-ups.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "34",
    rating: 4.5,
    reviews: 140,
  },
  {
    id: 12,
    name: "Push-Up Handles",
    description:
      "Elevated handles for performing push-ups with better form and reduced wrist strain.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "18",
    rating: 4.3,
    reviews: 120,
  },
  {
    id: 13,
    name: "Ab Roller",
    description:
      "A device designed to target the abdominal muscles through rolling motions.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Core",
    price: "29",
    rating: 4.6,
    reviews: 150,
  },
  {
    id: 14,
    name: "Foam Roller",
    description:
      "Used for self-myofascial release, improving flexibility, and reducing muscle tension.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Recovery",
    price: "22",
    rating: 4.7,
    reviews: 160,
  },
  {
    id: 15,
    name: "Adjustable Weight Bench",
    description:
      "A versatile bench for various strength exercises with adjustable incline and decline settings.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "129",
    rating: 4.5,
    reviews: 130,
  },
  {
    id: 16,
    name: "Medicine Ball",
    description:
      "Weighted ball used for dynamic strength exercises, plyometrics, and functional training.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "32",
    rating: 4.4,
    reviews: 120,
  },
  {
    id: 17,
    name: "Mini Trampoline",
    description:
      "A small trampoline used for low-impact cardio and aerobic exercises.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Cardio",
    price: "55",
    rating: 4.2,
    reviews: 100,
  },
  {
    id: 18,
    name: "Punching Bag",
    description:
      "A bag used for boxing workouts, improving cardio, and relieving stress.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Cardio",
    price: "89",
    rating: 4.6,
    reviews: 130,
  },
  {
    id: 19,
    name: "Suspension Trainer (e.g., TRX)",
    description:
      "A portable training tool that uses bodyweight for strength and stability exercises.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "69",
    rating: 4.4,
    reviews: 110,
  },
  {
    id: 20,
    name: "Stepper Machine",
    description:
      "A compact cardio machine that simulates stair climbing for lower body workouts.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Cardio",
    price: "79",
    rating: 4.3,
    reviews: 100,
  },
  {
    id: 21,
    name: "Balance Board",
    description:
      "A board that challenges balance and stability, enhancing core strength and coordination.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Core",
    price: "35",
    rating: 4.5,
    reviews: 110,
  },
  {
    id: 22,
    name: "Battle Ropes",
    description:
      "Heavy ropes used for high-intensity, full-body workouts that improve strength and endurance.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "59",
    rating: 4.7,
    reviews: 140,
  },
  {
    id: 23,
    name: "Ankle Weights",
    description:
      "Weights worn around the ankles for adding resistance to leg and lower body exercises.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "25",
    rating: 4.2,
    reviews: 90,
  },
  {
    id: 24,
    name: "Adjustable Ankle and Wrist Weights",
    description:
      "Weights that can be worn on the ankles or wrists to add resistance to workouts.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "28",
    rating: 4.3,
    reviews: 100,
  },
  {
    id: 25,
    name: "Power Tower",
    description:
      "A multi-functional exercise station for pull-ups, dips, push-ups, and other bodyweight exercises.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "149",
    rating: 4.6,
    reviews: 120,
  },
  {
    id: 26,
    name: "Hand Grippers",
    description: "Devices used to improve grip strength and forearm muscles.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "14",
    rating: 4.1,
    reviews: 80,
  },
  {
    id: 27,
    name: "Doorway Pull-Up Bar",
    description:
      "A bar that fits into a doorway for pull-ups and chin-ups at home.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "26",
    rating: 4.5,
    reviews: 100,
  },
  {
    id: 28,
    name: "Core Sliders",
    description:
      "Discs that slide on various surfaces for challenging core and bodyweight exercises.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Core",
    price: "19",
    rating: 4.3,
    reviews: 90,
  },
  {
    id: 29,
    name: "Resistance Loop Bands",
    description:
      "Elastic bands used for strength and mobility exercises, suitable for various fitness levels.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "15",
    rating: 4.4,
    reviews: 95,
  },
  {
    id: 30,
    name: "Resistance Tubes",
    description:
      "Tubes with handles for resistance training and targeting specific muscle groups.",
    image: "https://dummyimage.com/400x400/ededed/000000",
    type: "Strength",
    price: "22",
    rating: 4.2,
    reviews: 85,
  },
];

function simulateNetworkRequest(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const getProductList = async () => {
  try {
    // const response = await axios.get(`${api_route}/products/`);
    const response = await simulateNetworkRequest(1000).then(() => {
      return productsData;
    });
    return response;
  } catch (error) {
    // const errorMsg = error.message
    const errorMsg = "Sorry, Page Not Found";
    throw new Error(errorMsg);
  }
};

export const getProductDetailsWithId = async (id) => {
  try {
    // const response = await axios.get(`${api_route}/products/${id}/`);
    const response = await simulateNetworkRequest(1000).then(() => {
      return productsData.find((product) => product.id === parseInt(id));
    });
    if (response) {
      return response;
    } else {
      throw new Error("Equipment Not Found");
    }
  } catch (error) {
    const errorMsg = "Sorry, Page Not Found";
    throw new Error(errorMsg);
  }
};
