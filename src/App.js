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
  const [correct, setCorrect] = useState({name: "", status: "", newPart: "", oldPart: "", description: ""});
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [newPart, setNewPart] = useState("");
  const [oldPart, setOldPart] = useState("");
  const [description, setDescription] = useState("");
  const [swalProps, setSwalProps] = useState({});

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
            trigger: 2
          },
          {
            id: 2,
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
            component: <Review />,
            asMessage: true
          }
          
          // Laptop
          // {
          //   id: 3,
          //   message: "Bạn có thể mô tả những thông tin cơ bản của thiết bị(Tên, hãng, ...)?",
          //   trigger: "311"
          // },
          // {
          //   id: "311",
          //   user: true,
          //   validator: (value) => {
          //     setCorrect({
          //       ...correct,
          //       name: value
          //     });
          //     return true;
          //   },
          //   trigger: "31"
          // },
          // {
          //   id: "31",
          //   message: "Tình trạng laptop của bạn hiện tại đang có vấn đề như thế nào?",
          //   trigger: "322"
          // },
          // {
          //   id: "322",
          //   user: true,
          //   validator: (value) => {
          //     setCorrect({
          //       ...correct,
          //       status: value
          //     });
          //     return true;
          //   },
          //   trigger: "32"
          // },
          // {
          //   id: "32",
          //   message: "Bạn muốn thay thế mới những bộ phần nào luôn không?",
          //   trigger: "333"
          // },
          // {
          //   id: "333",
          //   user: true,
          //   validator: (value) => {
          //     let arrayValue = value.split(', ');
          //     setNewPart(value);
          //     return true;
          //   },
          //   trigger: "33"
          // },
          // {
          //   id: "33",
          //   message: "Ngoài những bộ phận được thay thế mới, những bộ phận nào bạn cảm thẩy sử dụng không như bình thường?",
          //   trigger: "344"
          // },
          // {
          //   id: "344",
          //   user: true,
          //   validator: (value) => {
          //     setCorrect({
          //       ...correct,
          //       oldPart: value
          //     });
          //     return true;
          //   },
          //   trigger: "34"
          // },
          // {
          //   id: "34",
          //   message: "Bạn hãy mô tả những lỗi mà bạn gặp vừa qua với các bộ phận đang cần sửa chữa!",
          //   trigger: "355"
          // },
          // {
          //   id: "355",
          //   user: true,
          //   validator: (value) => {
          //     setCorrect({
          //       ...correct,
          //       description: value
          //     });
          //     return true;
          //   },
          //   trigger: "36"
          // },
          // {
          //   id: "36",
          //   message: ({ previousValue, steps }) => '{previousValue} {steps}'
          //   // message: `Theo như thông tin bạn đã cung cấp, thì thiết bị của bạn đang hỏng và không sử dụng được nữa đó là {}`
          // }
        
        ]}
      />

    </ThemeProvider>
  );
}

export default App;
