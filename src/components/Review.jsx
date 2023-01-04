import React, { useEffect, useState } from 'react'

const Review = (props) => {
    const [info, setInfo] = useState({ description: "", error: "", newPart: "" });
    
    useEffect(() => {
        const { steps } = props;
        const { description, error, newPart } = steps;
        setInfo({ description, error, newPart });
    }, [props])

    const { description, error, newPart } = info;

    return (
        <div>
            Bộ phận thay mới là: {newPart.value}
        </div>
    )
}

export default Review