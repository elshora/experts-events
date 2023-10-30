import axios from "axios";

const getEvent = async (id: string) => {
  try {
    const res = await axios.get(
      `https://experts-events.vercel.app/api/events/${id}`
    );
    return res.data?.event;
  } catch (error) {
    console.log(error);
  }
};

export default getEvent;
