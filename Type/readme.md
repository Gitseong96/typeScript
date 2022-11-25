# Type Script pratice

## 기본타입

1.  Number
    정수,음수,소수,실수, 1 , 1.5 -10 , 모든 숫자
    ```
    const num :number = 1
    ```
    <br >
2.  String
    `` , "" , '' 모든 텍스트
    ```
    const str : string = "giseong"
    ```
3.  boolean
    true , false
    ```
    const happy : boolean = "true"
    ```
4.  object 객체

    ```
    const data :{
        num : number;
        str : string;
    } ={
        num = 1,
        str = "Giseong"
    }
    ```

5.  Array 배열
    타입을 유연하게 또는 제한적으로 지정이 가능하다

6.  Tuple 튜플
    길이와 타입이 고정된 배열 (타입 길이 구조 설정된 )

7.  Enum 열거형
    열거 목록
    전역 상수 의 개념

8.  Any
    모든 종류의 타입

9.  조합 유니온타입
    결합 하여서 더 많은 타입을 모델링 할수 있다.

```function combine(input1:  number | string ,input2:  number | string ){

   return  input1 + input2
}

```

10. 리터널 타입
    문자열과 숫자 , 두 가지 리터럴 타입이 있고 사용시 정확한 값을 지정할 수 있다.

11. Never 타입
    절대 발생할 수 없는 타입. , 값을 가질수 없는 타입

12. void 타입
    함수가 유요한 값을 반환하지 않는 타입
    ```
    function add( n1 : number , n2:number2):void{
        console.log(n1+n2)
    }
    ```

## 별첨

1. 타입 추론

```
const age : number = 29;
//타입을 명시적으로 할당하기 때문에 타입추론에 의존하지 않는다
```

2. 중첩 객체

```
const data:{
age:number;
name : string;
hobby : string[];
details:{
    title : string;
    content : string;
}
} ={
age :27,
name : "Gisong",
hobby :["game", "sleep"],

details :{
    title: " aaaa",
    content:"dad"
}
}

```

3. any
   무분별한 any 사용은 타입스크립트의 장점을 활용을 방해한다 "추론방해"
