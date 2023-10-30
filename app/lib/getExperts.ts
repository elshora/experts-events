import axios from "axios";

const getExperts = async () => {
  try {
    const res = await axios.get(
      "https://experts-events.vercel.app/api/experts"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getExperts;
