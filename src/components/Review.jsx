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

    const { name, description, error, newPart, oldPart } = info;

    if (name === "laptop") {

    } else if (name === "phone") {
        
    } else if (name === "camera") {

    } else if (name === "tv") {
        if (["man hinh", "nguon"].includes(newPart.value)) {
            desc["tv"] += "hong"
        } else if (oldPart.value === "loa") {
            desc["tv"] += " loa kém"
        }
    } else if (name === "tablet") {

    }

    return (
        <div>
            Bộ phận thay mới là: {newPart.value}, {oldPart.value} trong thiết bị {name.value}, {desc["tv"]}
        </div>
    )
}

export default Review