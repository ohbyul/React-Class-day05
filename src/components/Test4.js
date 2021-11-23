import React, { useState } from 'react';

const Test4 = () => {
    const [color ,setColor] = useState('tomato');
    const [ text , setText] = useState('');
    const onSelect = () => {
        setColor( text );
    }
    const changeColor = (e) => {
        const {value} = e.target;
        // setColor(value);
        setText(value);
    }
    return (
        <div>
            <h2 style = {{color : color}}>color 변경하기</h2>
            <select onChange = {changeColor}>
                <option value="red"> red </option>
                <option value="green"> green </option>
                <option value="blue"> blue </option>
                <option value="pink"> pink </option>
                <option value="lime"> lime </option>
            </select>         
            <button onClick = {onSelect}>선택</button>
        </div>
    );
};

export default Test4;