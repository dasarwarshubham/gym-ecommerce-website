const blogsData = [
  {
    id: 1,
    title: "Getting Started with Home Workouts",
    excerpt: "Learn how to kickstart your home workout routine.",
    content: "This blog post will guide you through setting up...",
    image: "https://dummyimage.com/400x400/ededed/000000",
  },
  {
    id: 2,
    title: "The Benefits of Cardio Exercise",
    excerpt: "Discover the numerous advantages of cardio workouts.",
    content: "Cardiovascular exercises are essential for maintaining...",
    image: "https://dummyimage.com/400x400/ededed/000000",
  },
  {
    id: 3,
    title: "Strength Training 101",
    excerpt: "A comprehensive guide to getting stronger through weightlifting.",
    content:
      "Strength training is a crucial component of a well-rounded fitness routine...",
    image: "https://dummyimage.com/400x400/ededed/000000",
  },
  {
    id: 4,
    title: "Nutrition Essentials for Fitness",
    excerpt: "Learn about the right foods to fuel your workouts.",
    content:
      "Proper nutrition plays a vital role in achieving your fitness goals...",
    image: "https://dummyimage.com/400x400/ededed/000000",
  },
  {
    id: 5,
    title: "Effective Stretching Techniques",
    excerpt:
      "Improve your flexibility and prevent injuries with these stretches.",
    content: "Incorporating regular stretching exercises into your routine...",
    image: "https://dummyimage.com/400x400/ededed/000000",
  },
  {
    id: 6,
    title: "Mindfulness in Exercise",
    excerpt: "Explore the benefits of mindful movement during workouts.",
    content: "Mindfulness involves being fully present during your exercise...",
    image: "https://dummyimage.com/400x400/ededed/000000",
  },
  // Add more blog entries
];

function simulateNetworkRequest(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const getBlogsList = async () => {
  try {
    // const response = await axios.get(`${api_route}/blogs/`);
    const response = await simulateNetworkRequest(1000).then(() => {
      return blogsData;
    });
    return response;
  } catch (error) {
    // const errorMsg = error.message
    const errorMsg = "Sorry, Page Not Found";
    throw new Error(errorMsg);
  }
};

export const getBlogDetailsWithId = async (id) => {
  try {
    // const response = await axios.get(`${api_route}/blogs/${id}/`);
    const response = await simulateNetworkRequest(1000).then(() => {
      return blogsData.find((blog) => blog.id === parseInt(id));
    });
    if (response) {
      return response;
    } else {
      throw new Error("Blog Not Found");
    }
    return response;
  } catch (error) {
    const errorMsg = "Sorry, Page Not Found";
    throw new Error(errorMsg);
  }
};
