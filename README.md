# React-Class-day05

### src/sample 
- 경동 사이트 copycat
---

### Test1.js
- onChang
- Ref 

### Test2.js
-  useRef : 사용법/수업용
```
useRef()는 실제 DOM노드를 참조할때 사용한다 (남용하지 말자)
참고 대상의 변경이 필요할 경우 .current 속성을 사용한다.

사용범위
- 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
- 애니메이션을 직접적으로 실행시킬 때.
- 서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

형식
const nameRef = useRaf(null)
const nameRef = useRaf(숫자초기값) - 값을 유지할수 있다.

nameRef.current ++
nameRef.current.style.xxx = 값
nameRef.current.focus()

<요소 ref = {nameRef} />

**
useRef()를 실제 DOM을 조작한 경우 컴포넌트는 다시 그려지지 않는다.
함수 컴포넌트 내부에서 특정 값을 지속 적으로 참조할 때 사용한다.
***

useState()와 달리 useRef()는 현재 (current) 값이 변경되어도
컴포넌트가 다시 렌더링 되지 않아 성능을 최적화 할수 있음
 - 불필요한 렌더링을 방지할수 있음
```

### Test3.js
- ref 사용한 select

### Test4.js
- select 폼 
- onChange 이벤트 / useState 사용

### Test5.js
- checkBox *

