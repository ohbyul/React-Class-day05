import React, { useRef, useState } from 'react';


/* Ref.........onChange 이벤트.. */
const Test1 = () => {
    const idRef = useRef(null);
    
    const [userid , setUserid] = useState('');
    const [ userpw , setUserpw] = useState('');

    const changeInput1 = (e) => {
        setUserid(e.target.value)
    }
    
    const changeInput2 = (e) => {
        const {value} = e.target;
        setUserpw(value)
    }
    const onReset = () => {
        setUserid('')
        setUserpw('')
        idRef.current.focus()
    }
    return (
        <div>
            <input type = "text" onChange={changeInput1} value = {userid} ref ={idRef}/>
            <input type = "text" onChange={changeInput2} value = {userpw}/>
            {/* 상태값을 연결을 해줘야 인풋박스글자도 지워짐 */}
            <button onClick = {onReset}>초기회</button>
            <hr />

            <h2>아아디 : {userid}</h2>
            <h2>비밀번호 : {userpw}</h2>
        </div>
    );
};

export default Test1;