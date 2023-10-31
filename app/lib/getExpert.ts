import axios from "axios";

const getExert = async (id: string) => {
  try {
    const res = await axios.get(
      `https://experts-events.vercel.app/api/experts/${id}`
    );
    return res.data?.expert;
  } catch (error) {
    console.log(error);
  }
};

export default getExert;
