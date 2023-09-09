import axios from "axios";

// exports.NotifyLine = async (token, message) => {
//   try {
//     const response = await axios({
//       method: "POST",
//       url: "https://notify-api.line.me/api/notify",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization: "Bearer " + token,
//       },
//       data: "message=" + message,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
// export async function NotifyLine(message) {
//   try {
//     const response = await axios({
//       method: "POST",
//       url: "https://notify-api.line.me/api/notify",
//       headers: {
//         // "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization: "Bearer yC4bEk0p9j3blq7Fd9QvyoF2unCmveNumJHPIgNg4wL",
//       },

//       data: "message=" + message,
//     });
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }
// export async function NotifyLine(text) {
//   try {
//     const apiUrl = "https://notify-api.line.me/api/notify";

//     const message = text;

//     const headers = {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: "Bearer yC4bEk0p9j3blq7Fd9QvyoF2unCmveNumJHPIgNg4wL",
//       //   "Access-Control-Allow-Origin": "*",
//     };

//     const data = new URLSearchParams();
//     data.append("message", message);

//     const response = await axios.post(apiUrl, data, { headers });

//     console.log("Line Notify Response:", response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

const postData = {
  message: "Hello, LINE Notify!", // Your message here
};

const sendLineNotify = async () => {
  try {
    const response = await axios.post("/api/Notify.service", postData);
    // console.log("LINE Notify Response:", response.data);
  } catch (error) {
    // console.error("Error sending LINE Notify:", error);
  }
};
