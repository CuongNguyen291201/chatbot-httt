import './App.css';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider, useTheme } from 'styled-components';
import { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';
import Review from './components/Review';

const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial",
  headerBgColor: "#1976d2",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#fff",
  botFontColor: "black",
  userBubbleColor: "#1976d2",
  userFontColor: "#fff"
};


function App() {
  const [phone, setPhone] = useState({
    "vo": 1,
    "camera": 1,
    "screen": 1,
    "pin": 1
  });

  let checkLaptop = {
    'man hinh': 1,
    'pin': 1,
    'ssd': 1,
    'ram': 1,
    'quat': 1
  }

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Hệ thống tư vấn đồ điện tử"
        steps={[
          {
            id: 1,
            message: "Thiết bị điện tử của bạn đang sử dụng là gì?",
            trigger: "name"
          },
          {
            id: "name",
            options: [
              { value: "laptop", label: "Laptop", trigger: 3 },
              { value: "phone", label: "Điện thoại", trigger: 3 },
              { value: "camera", label: "Máy ảnh", trigger: 3 },
              { value: "tv", label: "TV", trigger: 3 },
              { value: "tablet", label: "Máy tính bảng", trigger: 3 }
            ]
          },
          {
            id: 3,
            message: "Bạn hãy mô tả thông tin cơ bản của thiết bị?",
            trigger: "description"
          },
          {
            id: "description",
            user: true,
            trigger: "31"
          },
          {
            id: "31",
            message: "Thiết bị của bạn có những vấn đề gì?",
            trigger: "error"
          },
          {
            id: "error",
            user: true,
            trigger: "32"
          },
          {
            id: "32",
            message: "Bạn muốn thay thế mới những bộ phận nào?",
            trigger: "newPart"
          },
          {
            id: "newPart",
            user: true,
            trigger: "33"
          },
          {
            id: "33",
            message: "Ngoài những bộ phận được thay mới, khi sử dụng bạn thấy những bộ phận nào không trong tình trạng tốt nhất?",
            trigger: "oldPart"
          },
          {
            id: "oldPart",
            user: true,
            trigger: "34"
          },
          {
            id: "34",
            component: <Review />,
            asMessage: true
          }
          
        ]}
      />

    </ThemeProvider>
  );
}

export default App;
