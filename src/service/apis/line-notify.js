import axios from "axios";

export const sendLineNotifyMessage = async (req, res) => {
  // console.log(req);
  try {
    const { method, body } = req;

    const response = await axios.post(
      "https://notify-api.line.me/api/notify",
      body,
      {
        headers: {
          "Access-Control-Allow-Credentials": true,
          Authorization: "Bearer yC4bEk0p9j3blq7Fd9QvyoF2unCmveNumJHPIgNg4wL",
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log(response);
    // res.status(response.status).json(response.data);
  } catch (error) {
    // console.log(error);
    res
      .status(error.response.status || 500)
      .json(error.response.data || "Internal Server Error");
  }
};
