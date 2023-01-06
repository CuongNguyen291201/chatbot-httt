import React, { useEffect, useState } from 'react'

const Review = (props) => {
    const [info, setInfo] = useState({ name: "", description: "", error: "", newPart: "", oldPart: "" });
    let desc = {
        "tv": ""
    };
    let result = "";
    useEffect(() => {
        const { steps } = props;
        const { name, description, error, newPart, oldPart } = steps;
        setInfo({ name, description, error, newPart, oldPart });
    }, [props])

    // const { name, description, error, newPart, oldPart } = info;

    const handleResult = (_info) => {

        let resultNewPart = "";
        let resultOldPart = "";

        if (_info.name.value === "laptop") {
            let newPart = _info.newPart.value.split(',');
            let oldPart = _info.oldPart.value.split(','); 
            newPart.map(item => {
                if (["man hinh", "ram", "o cung"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Laptop có độ hư hỏng cao, không hoạt động như bình thường, chúng tôi đề xuất bạn nên đến cửa hàng sửa chữa gần nhất để sửa và thay thế";
                    return;        
                } else if (["quat"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Laptop vẫn hoạt động được như bình thường nhưng do quạt không được hoạt động nên máy nhanh nóng và hiệu năng của máy không cao, bạn nên có thiết bị tản nhiệt hoặc sửa lại quạt của laptop";
                    return;
                } else if (["pin"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Laptop do sử dụng nhiều lên theo thời gian pin sẽ không còn tốt như ban đầu, do có thể vừa sạc vừa sử dụng được nên chúng tôi khuyên bạn kiểm tra pin trong 1 ngày sớm nhất"
                    return;
                }
            })
        } else if (_info.name.value === "phone") {
            let newPart = _info.newPart.value.split(',');
            let oldPart = _info.oldPart.value.split(','); 
            newPart.map(item => {
                if (["man hinh"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Điện thoại có độ hư hỏng cao, không hoạt động như bình thường, bạn nên đi thay màn hình để có thể sử dụng được";
                    return;        
                } else if (["camera"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Điện thoại vẫn hoạt động được như bình thường khi sử dụng tính năng liên quan tới chụp hình, quay phim thì sẽ không làm được. Nếu bạn không sử dụng đến camera thì cũng không cần quá lo lắng vì những phần khác vấn sử dụng được bình thường";
                    return;
                } else if (["vo", "pin"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Điện thoại do sử dụng nhiều lên theo thời gian pin sẽ không còn tốt như ban đầu, vỏ có thể bị va đập nên không còn đẹp, nếu bạn không quan tâm tới ngoại hình của máy thì vỏ máy không cần thay thế bạn chỉ cần đeo ốp điện thoại"
                    return;
                }
            })
        } else if (_info.name.value === "camera") {
            let newPart = _info.newPart.value.split(',');
            let oldPart = _info.oldPart.value.split(','); 
            newPart.map(item => {
                if (["man hinh", "lens"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Máy ảnh có độ hư hỏng cao, không hoạt động như bình thường. Do lens hay màn hình là những bộ phận thu và hiển thị hình ảnh nên cần phải sửa chữa nhanh chóng để máy có thể sử dụng bình thường";
                    return;        
                } else if (["dau doc the"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Máy ảnh được thông báo thiếu thẻ nhớ để lưu trữ ảnh, nếu bạn chưa có thì hãy mua ngay nhé";
                    return;
                } else if (["pin"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Máy ảnh do sử dụng nhiều lên theo thời gian pin sẽ không còn tốt như ban đầu, bạn nên thay pin mới"
                    return;
                }
            })
        } else if (_info.name.value === "tv") {
            let newPart = _info.newPart.value.split(',');
            let oldPart = _info.oldPart.value.split(',');
            newPart.map(item => {
                if (["man hinh", "nguon"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "TV có độ hư hỏng cao, không hoạt động như bình thường. Màn hình tv là bộ phận quan trọng của tv, vậy nên bạn hãy quyết định thay chúng đi nhé";
                    return;        
                } else if (["loa"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Tv do sử dụng nhiều lên theo thời gian loa sẽ không còn tốt như ban đầu, nếu có loa ngoài bạn có thể kết nối"
                    return;
                }
            })

            oldPart.map(item => {
                if (["man hinh", "nguon", "loa"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultOldPart += "TV của bạn cần bảo dưỡng để sử dụng ổn định hơn";
                    return;        
                }
            })
        } else if (_info.name.value === "tablet") {
            let newPart = _info.newPart.value.split(',');
            let oldPart = _info.oldPart.value.split(','); 
            newPart.map(item => {
                if (["man hinh"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Máy tính bảng có độ hư hỏng cao, không hoạt động như bình thường";
                    return;        
                } else if (["camera"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Máy tính bảng vẫn hoạt động được như bình thường khi sử dụng tính năng liên quan tới chụp hình, quay phim thì sẽ không làm được";
                    return;
                } else if (["vo", "pin"].includes(item.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
                    resultNewPart += "Máy tính bảng do sử dụng nhiều lên theo thời gian pin sẽ không còn tốt như ban đầu, vỏ có thể bị va đập nên không còn đẹp"
                    return;
                }
            })
        }

        let result = {
            resultNewPart,
        }

        return result;
    }

    return (
        <>
            <div>
                {handleResult(info).resultNewPart}
            </div>
        </>
    )
}

export default Review