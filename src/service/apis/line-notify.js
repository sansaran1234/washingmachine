// import axios from "axios";

// export const sendLineNotifyMessage = async (req, res) => {
//   // console.log(req);
//   try {
//     const { method, body } = req;

//     const response = await axios.post(
//       "https://notify-api.line.me/api/notify",
//       body,
//       {
//         headers: {
//           "Access-Control-Allow-Credentials": true,
//           Authorization: "Bearer yC4bEk0p9j3blq7Fd9QvyoF2unCmveNumJHPIgNg4wL",
//           "Content-Type": "application/x-www-form-urlencoded",
//           "Access-Control-Allow-Origin": "*",
//         },
//       }
//     );
//     // console.log(response);
//     // res.status(response.status).json(response.data);
//   } catch (error) {
//     // console.log(error);
//     res
//       .status(error.response.status || 500)
//       .json(error.response.data || "Internal Server Error");
//   }
// };

// const express = require('express');
// const axios = require('axios');

// const app = express();
// const port = 3000; // กำหนดพอร์ตของเซิร์ฟเวอร์

// // กำหนดหัวข้อความ CORS สำหรับโดเมนของคุณ
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // อนุญาตให้ทุกโดเมนสามารถเข้าถึงได้ (หากเป็นการพัฒนา)
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// app.use(express.json());

// app.post('/send-notification', async (req, res) => {
//   const text = 'ข้อความที่คุณต้องการส่งไปยัง Line Notify';
//   const accessToken = 'YOUR_ACCESS_TOKEN'; // แทน YOUR_ACCESS_TOKEN ด้วย Access Token ของคุณ

//   try {
//     const response = await axios.post('https://notify-api.line.me/api/notify', `message=${text}`, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': `Bearer ${accessToken}`,
//       },
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'เกิดข้อผิดพลาดในการส่งข้อความ' });
//   }
// });

// app.listen(port, () => {
//   console.log(`เซิร์ฟเวอร์พร็อกซีกำลังทำงานบนพอร์ต ${port}`);
// });
