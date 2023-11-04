import axios from "axios";

const getAllEvents = async (query: any) => {
  try {
    const res = await axios.get(
      `https://experts-events.vercel.app/api/events?period=${query}`
    );
    return res.data?.events;
  } catch (error) {
    console.log(error);
  }
};

export default getAllEvents;
