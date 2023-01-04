export const steps = [
    {
        id: 1,
        message: "Thiết bị điện tử của bạn đang sử dụng là gì?",
        trigger: 2
    },
    {
        id: 2,
        options: [
            { value: "laptop", label: "Laptop", trigger: 3 },
            { value: "phone", label: "Điện thoại", trigger: 4 },
            { value: "camera", label: "Máy ảnh", trigger: 5 },
            { value: "tv", label: "TV", trigger: 6 },
            { value: "tablet", label: "Máy tính bảng", trigger: 7 }
        ]
    },
    // Laptop
    {
        id: 3,
        message: "Bạn có thể mô tả những thông tin cơ bản của (Tên, hãng, màn hình, chip, ...)?",
        trigger: "31"
    },
    {
        id: "31",
        message: "Tình trạng laptop của bạn hiện tại đang có vấn đề như thế nào?",
        trigger: "32"
    },
    {
        id: "32",
        message: "Bạn muốn thay thế mới những bộ phần nào và sửa chữa những bộ phần nào?",
        trigger: "33"
    },
    {
        id: "33",
        message: "Ngoài những bộ phận được thay thế mới, bạn miêu tả tình trạng của các bộ phận đang hỏng ra sao?",
        trigger: "34"
    },



    // Phone
    {
        id: 4,
        message: "Bạn có thể mô tả những thông tin cơ bản của điện thoại bạn đang sử dụng?",
        trigger: "41"
    },
    {
        id: "41",
        message: "Tình trạng điện thoại của bạn hiện tại đang bị ra sao?",
        trigger: "42"
    },
    {
        id: "42",
        message: "Bạn có muốn thay thế mới các bộ phận nào luôn không?",
        trigger: "43"
    },
    {
        id: "43",
        message: "Bạn có thể mô tả chi tiết những bộ phận đang hỏng và muốn sửa chữa?",
        trigger: "44"
    },


    // TV
    
];
