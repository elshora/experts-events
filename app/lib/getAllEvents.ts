import axios from "axios";

const getAllEvents = async () => {
  try {
    const res = await axios.get("https://experts-events.vercel.app/api/events");
    return res.data?.events;
  } catch (error) {
    console.log(error);
  }
};

export default getAllEvents;
