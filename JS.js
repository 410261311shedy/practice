變數
var可以是全域、也可以是以函式作為範圍
var 可以重複宣告
var name = 10;
"name"字母,美元符號$,下畫線_,和數字組成
其中數字不能開頭
var username = "iwen";
var people_zhangsan = "張三"
    $zhangsan
    _zhangsan
    $_zhangsan
    
let 與 const 則是區塊作為範圍 
每個let宣告的都是獨立的就算名稱一樣
var則是會共用同一個
let 可以重新賦值 const 不行
let 
const 

打印
console.log(name);

重新賦值
name = 30

js引入到文件中

1.嵌入到HTML中
<body>
    <script>
        var age = 20
    </script>
</body>

2.引入本地獨立js文件(較常使用)
<body>
    <script type="text/javascript" src="./name.js">   </script>
</body>

3.引入網路來源檔案(常用(e.g.:jquery函式庫))
<body>
    <script src="http://......js">   </script>
</body>
注释与输出方式
註釋
    |
    |_單行註釋
     //單行註釋
    |
    |_多行註釋
     /*這是
       多行
       註釋
     */
    
输出方式
        |
        |__彈出框
        alert("我是彈出框");
        |
        |_页面输出
        document.write("我是輸出到頁面");//不像標題比較像<p>
        |
        |_控制台输出
        console.log();


數據類型type 6個 es6 8個 //!常見面試題
    數值
    字符串
    布林值
    null
    對象（object)
    undefined
原始類型(基礎類型)
    數值 //數值/數字類型
        var age = 20;
    字符串 //被雙引號或單引號包住的值
        var name1 = "iwen";
        var name2 = "上學堂";
    布林值 //0 和 1 false 0 true 1
        var flag = true;
        var flags = false
合成類型(複合類型)
    對象(Object)
        var user = {
            name:"上學堂",
            age:20,
            learn:true
            jobs:{

            }
        }
    undefined/null
    //var hello = null or undefined 當宣告變數未給值 大多時候是undefined

typeof運算符
    判斷數據類型(判斷基本數據類型使用)

    var age = 20;
    var name = "iwen";
    var flag = true;
    var user = {};

    console.log(typeof age); //number 
    console,log(typeof name); //string
    console.log(typeof flag); //boolean
    console.log(typeof user); //object
    console.log(typeof []); //object

    console.log(typeof null ); //object
    console.log(typeof undefined); //undefined

    //null一班代表object "沒有"
    //undefined代表數值 "沒有"
    //基本上不會用 typeof 來判斷null和undefined

算術運算符
        加法運算符
            +
            console.log(num1 + num2);
        減法運算符
            -   
            console.log(num1 - num2);
        乘法運算符
            *
            console.log(num1*num2);
        除法運算符
            /
            num1 / num2
        餘數運算符
            %
            num1 % num2
            13 % 5 //3
        自增和自減運算符
            var x = 1;
            var y = 1;
            console.log(++x) // 2
            console.log(--y) // 0
        // !!放在變量之後會先返回變量操作前的值 再進行自增/自減
        // !!放在變量之前會先進行自增/自減操作 再返回變量操作後的值
        // num++ ++num
            var num4 = 10;
            console.log(++num4); // 11
            console.log(num4++); // 印出10但值已變11

            var x = 5; 
            var y = 5;
            console.log(x++ + --y);
            //          5       4
            //ans:9
//一元運算符 自增自減只有一個值做運算 ++x --y
//二元運算符 num1 + num2 兩個數值

賦值運算符
    等號 =
    //將 1 賦值給變量 x
    var x = 1;
    //將變量 y 的值賦值給變量 x
    var x = y;
    // += 號
        x += y == x = x + y;

    // -= 號
        x -= y == x = x - y;

    // *= 號
        x *= y == x = x * y;

    // /= 號
        x /= y == x = x / y;

    // %= 號
        x %= y == x = x % y;

比較運算符
    var x = 1;
    var y = 2;
    // < 號 小於
    console.log("x < y") // true
    // > 號 大於
    console.log("x > y") // false
    // <=號 小於等於
    // >=號 大於等於
    // == 號 相等
    // === 嚴格相等號 (type要一致)比數值也比型別
    var num3 = 10
    var num4 = "10"

    console.log(num3 == num4); //true
    console.log(num3 === num4) //false 面試題
    // != 號 不相等
    // !== 號 嚴格不相等
    console.log(num3 != num4); //false
    console.log(num3 !== num4) //true 面試題

布林運算符
//對於非布林值 取反運算符會將其轉為布林值 
// 以下6個值取返後為true 其他皆false : undefined ,null ,false ,0 ,NaN ,空字符串("")
// 取反 !
    !true  //false
    !false // true
    var flag = false;
    console.log(!flag); //true
// && 條件皆達成
    console.log(100>10 && 100>20 && 100<30); //true
// || 一邊達成即可
    console.log(true || false || false); //true

條件語句if
// if 若true --> 執行

//結構
if(布林值){
    語句;
}

var num1 = 10;
var num2 = 20;
if(num1 > num2)/*表達式*/{
    console.log("表達式正確")
} 

if(20){} //true !20 = false 不可放 = +=之類 只可放比較運算符


//if...else 若if不對 則執行else
if(m === 3){
    //滿足條件時執行
}else{
    //不滿足條件時執行
}

if(m === 0){
    //滿足條件時執行
}else if(m === 2){
    //滿足條件時執行
}else if(m === 1){
    //滿足條件時執行
}else{
    //皆不滿足條件時執行
}

//if...else嵌套
var eat = true;
var food = "豬肉頓粉條";
if(eat){
    if(food == "雙椒魚頭"){
        console.log("雙椒魚頭");
    }else{
        console.log("豬肉頓粉條");
    }
}else {
    console.log("不吃了"); 
}

條件語句switch 

例子:
    switch(fruit){
        case "banana":
            //...
            break;
        case "apple":
            //...
            break;
        //...
        default:
            //...
    }
//case語句中break不可以少 否則在執行後會繼續條件判斷繼續輸出
例子:
    var x = 2;

    switch (x) {
        case 1:
            console.log('x等于1');
        case 2:
            console.log('x等于2');
        case 3:
            console.log('x等于3');
        default:
            console.log('x 等于其他值');
    }
    //x等于2
    //x等於3
    //x等于其他值

三元運算符 //視為if...else...的簡寫行事
(條件) ? 表達式1 : 表達式2
例子:
    var num = 11;
    if(num % 2 === 0){
        console.log("偶數");
    }else{
        console.log("奇數");
    }//奇數

    //三目運算符 注意空格不可省略
    num % 2 === 0 ? console.log("偶數") : console.log("奇數");
    //更簡化 注意空格不可省略
    var result = num % 2 === 0 ? "偶數" : "奇數";
    console.log(result);

循環語句for
結構:    
    for(初始化表達式; 條件; 迭代因子){
        //語句
    }
例子:
    //需求: 從1打印到100
    for(var i = 0;i<=100;i++){
//初始表達式     布林表達式  迭代因子
        console.log(i);
    }
    //宣告一個x變數，輸出所有小於他的值
    var x = 10;
    for(var i =0;i<x;i++){
        console.log(i);
    }
    //for的表達式可以省略任何一個，也可以全部省略
    var x = 10;
    var i =0;
    for(;i<x;i++){//!!!分號絕對不能刪除
        console.log(i);
    }
    var x = 10;
    var i =0;
    for(;i<x;){//!!!分號絕對不能刪除
        console.log(i);
        i++;
    }
    //全刪除會導致死循環
    for( ; ; ){
        console.log('Hello World');
    }
    //真正在寫code時不會去動這些
for循環語句實操
//循環輸出1000以內的奇數
for(var i = 0;i<1000;i++){
    if( i % 2 == 1 ){
        console.log(i);
    }
}
//輸出99乘法表
for(var i = 1;i <= 9;i++){
    for(var o = 1;o <= 9; o++){
        var sum = i*o;
        console.log( i + "+" + o + "=" + sum);//每一次的console.log會自動換下一行
    } 
}
//打印出99乘法表
for(var i = 1;i <= 9;i++){
    document.write("<br/>");//html的換行
    for(var o = 1;o <= i; o++){
        var sum = i*o;
        document.write(i + "+" + o + "=" + sum + "  " ); //document.write可以寫在將輸出寫在頁面上 但不會自動換行
    } 
}
循環語句while
    while(條件){
        語句;
    }
舉例:
    var i = 1;
    while(i<=100){
        console.log(i);
        i++;
    }
    while(true){ //無限循環
        語句;
    }

跳出語句
break語句和continue語句  
舉例:
break範例
//輸出i到5就結束 就跳出循環
    for(var i = 1;i<100;i++){
        if(i == 5){
            break;//跳出循環
        }
        console.log(i);
    }
continue範例
//不輸出5 直接進行下一個動作
    for(var i = 1;i<100;i++){
        if(i == 5){
            continue;//編譯到這就跑回去while
        }
        console.log(i);
    }

字符串 //字符串事由0個或多個排在一起字符 放在單引號或雙引號中

範例:
    var str1 = "itbaizhan,'百戰程序原'";
    var str2 = '上學堂,"sxt"';
    //字符串嵌套單雙引號不可用一樣的
    //e.g.: var str3 = "itbaizhan"程序原""
    
//要在單引號字符串的內部,使用單引號,
//就必須在內部的單引號錢加上反斜槓 
//舉例:\'
'Did she say \'Hello\'?'
//Did she say Hello?
"Did she say \"Hello\"?"
//Did she say Hello?

//!字符串默認時只能一行 若要換行 需要在換行時加上 \
舉例:
    錯:
        var str6 = "不能雙引號中嵌套雙引號,
        或著單引號中嵌套單引號";
    對:
       var str6 = "不能雙引號中嵌套雙引號,\
        或著單引號 \
        中嵌套單引號";
1.//.length屬性 .length
    length屬性返回字符串的長度，該屬性也是無法改變的
    var str7 = "1234567";
    console.log("str7.length");

字符串的功能charAt()  
2.//.charAt返回指定位置的字符 參數是從"0"開始編號的 

舉例:
    var s = new String('fuck');

    s.charAt(1);//"u"
    s.charAt(s.length - 1)//""
    
    //印出最後一個字符
    var str = "abcd"
    console.log(str.charAt(3));//位置有關都是從0開始

    // ""空字符 該位置沒有東西
    console.log(str.charAt(-2));
    console.log(str.charAt(12));

3.//結合字符串 .concat()
  //用於連接兩個字符串,返回一個新的字符串，不改變原字串

  舉例:
    var s1 = '1234';
    var s2 = '5678';
    
    var s3 = s1.concat(s2);
    console.log(s1.concat(s2)); //12345678
    console.log(s3); //12345678
    console.log(s1); //1234

    //結合多個字符串
    var result1 = s1.concat(s2,s3);
    console.log(result);//1234567812345678

    //若參數不是字符串 會先將其轉為字符串再連接
    var num = 1;
    var result2 = s1.concat(s1,s2,num);//123456781
    
    //簡易方法 做字符串相加還可以用 +
    console.log(s1 + s2 + num);//123456781

    例外: 
        var one = 1;
        var two = 2;
        var three = '3';

        console.log(''.concat(one,two,three));//123
        console.log(one + two + three);//33
        //+號遇到字符串才會轉成字串 前兩項若是num會相加
    //concat() vs + :concat遇到所有類型直接合併成字符串
    // + 遇到數字類型直接做運算，遇到字符串相連結

取出子字符串並取回substring
//從原字符串取出子字符串並return不改變原字符串。
//第一個參數表示子字符串的開始位置 第二個表示結束位置(返回結果不報含該位置)
舉例:
    var name = "abcdefg";
    console.log(name.substring(2,4));//cd
//若省略第二個參數 輸出值到原字符串結束
    console.log(name.substring(2));//cdefg
//若第一個參數大於第二個參數 會自動調換位置
    console.log(name.substring(4,2));
   ==> console.log(name.substring(2,4));
//若參數是負數 會自動轉換成0
    console.log(name.substring(-2));
   ==> console.log(name.substring(0));

    console.log(name.substring(-2,3));
   ==> console.log(name.substring(0,3));
//.substr
    //從原字符串取出子字符串並return不改變原字符串。
    //第一個參數是子字符串的開始位置(從0計算)
    //第二個參數是子字符串的長度
    //若跳過第二
    舉例:

        var name = "itbaizhan";
        var result = name.substr(2,5);//baizh
    //若第一個參數是負數，表示"倒數計算的字符位置"
    //第二個參數是負數會轉換成0

//這裡開始是軍營內的 回去整理
字符串方法indexOf()
//用於確認一個字符串是否存在在另一字符串內
//若有 回傳該字符串第一個位置（從0開始算）
//若無 回傳-1
範例：
用法一：.indexOf('')
'hello world'.indexOf('o');//4
'hello world'.indexOf('ela');//-1
'hello world'.indexOf('h');//0
用法二：.indexOf('',num)
//從num位置開始向後的匹配(包含該位置）
範例：
var str = "wednesday";
//有找到
console.log(str.indexOf('e',1));//1
console.log(str.indexOf('e',4));//4
//未找到
console.log(str.indexOf('e',5);//-1

實例：//此方法通常用於判斷句子中有沒有符合字串
var str = "我不喜歡你"；
if(str.indexOf('喜歡') > -1)｛
   console.log('他有說喜歡')；
｝else{
   console.log('他沒有說喜歡你')；
}
實際使用：//查找array中有沒有字串
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1

字符串方法trim() 
//去除前後空格 制表符\t,\v（tab鍵）,換行符\n,和回車符\r（將鼠標移動到當前行首）
//返回一個新的字符串 不改變原字符串
範例：
' hello world '.trim();//hello world
var name = ' hookers yeahhh\r\n ';
var result = name.trim();
console.log(result);//hookers yeahhh

ES6擴張內容 trimEnd() trimStart()
範例：
' hello world '.trimStart();//"hello world "
' hello world '.trimEnd();//" hello world"

字符串方法split()
//按照給定規則分割字符串儲存到陣列內
var arrays = 'Boys|Girls|Diva'.split('|')
console.log(arrays)//['Boys', 'Girls', 'Diva']
var arrays = 'Boys|Girls|Diva'.split('|')
arrays.forEach(element =>
   console.log(element)); //Boys\n Girls\n Diva\
//若分割規則是空字符串'' 則將每個char分割
'a|b|c'.split('')//['a','|','b','|','c']
//若規則是空的（）則回傳原字符串
'a|b|c'.split()//['a|b|c']
//想獲得多少長度 可用.split('',數量)
'a|b|c'.split('',2)//['a','|']
'a|b|c'.split('',0)//[]

陣列：
//可先賦值
var arr = ['a','b','c']
//也可先宣告後賦值 
//任何類型都可以出現在陣列中 無限制
var arr = []
arr[0] = 'a'
arr[1] = 2
arr[2] = false
arr[3] = [1,2,'3']
//直接印出全部包含［］跟''
console.log(arr) //[ 'a', 2, false, [ 1, 2, '3']]
//多維陣列：陣列裡面放陣列 兩層就是二維 以此類推
var arr = [[1,2],[3,4]]//二維陣列
//印出陣列呼叫時 值為位置
console.log(arr[0][1])//2
console.log(arr[1][1])//4
//length讀取陣列長度
//後有（）是方法 沒有是屬性
console.log(arr.length)//2
//陣列超印 超出陣列位置 輸出undefined
console.log(arr[2])//undefined

遍歷陣列
範例：
var arr = ["a","b","c"]

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

var arr2 = [[1,2], [3,4]]
for(var i=0;i<arr2;i++){
    console.log(arr2[i])
}//[1,2] \n[3,4]
arr.forEach(element => console.log(element))
//[1,2] \n[3,4]
arr.forEach(element => console.log(element[0]))
//1 \n 3
arr.forEach(element => console.log(element[1]))
//2 \n 4
arr.forEach(element => console.log(element[0],elemnent[1]))
//1 2\n 3 4
//
var i = 0
while(i<arr.length){
    console.log(arr[i])
    i++
}

//特殊用法for...in
for(var i in arr){
    console.log(arr[i])
}

陣列方法Array.isArray()
//判斷一個內容是否為陣列
//回傳true false 補足typeOf功能的不足
//typeOf無法判斷是否為陣列 只會印出object

範例：
var arr2 = [[1,2], [3,4]]
var num = 2
console.log(Array.isArray(arr2))//true
console.log(Arrau.isArray(num))//false

陣列方法.push()/.pop()
push()方法
//在陣列的末端添加一個或著多個元素
//並return新返回陣列的長度
//會改變原陣列
範例：
var arr = []
arr.push("上學堂");
//arr[0] = '上學堂'
var myLength = arr.push("大家好","world",100,true);
console.log(arr);//['上學堂','大家好','world',100,true]
console.log(myLength);//5

pop()方法
//刪除陣列的最後一個元素，並返回該元素
//會改變陣列！
var arr1 = [100,200,300,400];
var a = arr1.pop();//400
arr1.pop();//300
console.log(a);//400
console.log(arr1)//[100,200]

陣列方法 shift()/unshift()
shift()
//用於刪除陣列的第一個元素並返回該元素
//會改變陣列
arr = ["a","b","c"];
arr.shift();//'a'
var a = arr.shift();//'b'
console.log(a);//'b'
console.log(arr)//['c']
常用用法：清空陣列
範例：
對空陣列shift()會回傳undefined
var arr = [100,200,300,400]
//當陣列被shift完後會變成undefined
//對undefined取bool會得false所以跳出陣列
while(var item = arr.shift()){
         console.log(item)
    }//100,200,300,400
console.log(arr);//[]

unshift()
//在陣列開頭第一個位置加入新元素
//並返回新陣列長度
//可接受一至多個元素
var arr = [100,200,300,400];
var a = arr.unshift("你好","我是")；
console.log(a);//6
console.log(arr);//［"你好","我是",100,200,300,400]

陣列方法join()
//以指定參數作為分隔符號
//將所有陣列成員連接成一個字符串返回
範例：
var arr = [1,2,3,4,5];
//若不輸入參數則已「,」默認分割
arr.join();//1,2,3,4,5
arr.join("");//12345
arr.join(" ");//1 2 3 4 5
arr.join("|");//1|2|3|4|5
arr.join(" | ");//1 | 2 | 3| 4 | 5
//若陣列內為null,undefined或空位 會被轉成空字符串
[undefined,null].join('#');//'#'
['a',,'b'].join('-');//'a--b'

//陣列的join配合字串的split可以實現陣列和字串的互換
var arr1 = ["hello","world"];
var result = arr1.join(" ");
console.log(result);//hello world
console.log(result.split(" ");//['hello','world']

陣列方法concat()
//用於多個陣列的合併，將新陣列的成員添加到原陣列的後面
//返回"一個""新陣列"，原陣列不變
範例:
var arr1 = ["你好","你好2"];
var arr2 = ["不好","不好2"];
var arr3 = ["嘿嘿","嘿嘿2"];

console.log(arr1.concat(arr2,arr3));//["你好","你好2","不好","不好2","嘿嘿","嘿嘿2"]
console.log(arr1);//["你好","你好2"]//不改變原陣列
//除了用陣列作為參數，也能用其他型別的值作為參數，添加到目標陣列尾部
var arr4= ["10"];
console.log(arr4.concat(20,30,40));//['10',20,30,40]
//最常應用(上滑加載,合併數據)ig fb等等程式滑動
範例:
[1,2,3].concat(4,5,6,[7,8,9]);
//返回[1,2,3,4,5,6,7,8,9]//因只能返回一個一維陣列

陣列方法reverse()
//顛倒陣列排序原素，返回改變後的陣列
//會改變原陣列
var a = ["a","b","c"];
a.reverse();
console.log(a);//['c','b','a']
範例:
//helloworld字串:反轉顯示dlrowolleh
//字串轉陣列split 陣列翻轉 陣列轉字串join
var str = "helloworld";
var myArr = str.split("");//["h","e","l","l","o","w","o","r","l","d"]
myArr.reverse();//['d', 'l', 'r', 'o','w', 'o', 'l', 'l','e', 'h']
console.log(myArr.join(""));//dlrowolleh
簡化:
var str = "hello";
str.split("").reverse().join("");//olleh

陣列方法 indexOf()
//查找該元素在陣列中"第一次"出現的位置
//若無返回-1
範例:
var arr =[10,20,30,10];
arr.indexOf(10);//0
arr.indexOf(60);//-1

用法判斷存在與否
//不存在才會是-1
if(arr.indexOf(30) > -1){
    console.log("存在");
}else {
    console.log("不存在");
}
//第二種方式:放入第二個參數，表示開始搜索的位置
arr.indexOf(10);//0
arr.indexOf(10,1);//3

陣列方法arr.map()

const numbers = [1,2,3] ;
//講陣列內的每個元素換成新的形式
const double = number.map(num => num*2);
//[2,4,6]
console.log(double);//[2,4,6]

!!!!函式 function!!!!
//可反覆調用的//當被呼叫時才執行//可先被呼叫再創建該函式(不常用)
//使用時機當，當code內有重複被使用的一段code時
//將它寫成函式
範例:
function 名稱(參數){
    執行code
} 

function add(x,y){
    console.log(x+y);
}
add(1,2);//3
//可設定返回值
function add(x,y){
    return x+y;
    //return後不可coding//return後的東西不會執行
}
var result = add(10,20);
console.log(result);//30

!!!Object!!!!!!
//object 是鍵值對(key-value)一種無序的複合數據集合
範例:
var user = {
    name: 'Shedy',
    age: '13',
    jobs: ["a","b"],
    flag: true
};
//object屬性讀取方式
user.name;//Shedy
user.jobs[0];//a

遍歷jobs
for(var i in user.jobs){
    console.log(user.jobs[i]);
}


//object的每一個鍵名又稱屬性"(property)"
//可以是任何數據類型，若一個屬性的值為函式，該屬性稱方法
//可像函數依樣調用
var user = {
    getName: function(){
        console.log("Shedy");
    }
};
user.getName();//Shedy
//若屬性還是一個對象
//稱為鏈式引用
var user = {
    name: 'Shedy',
    age: '13',
    jobs: ["a","b"],
    flag: true,
    container:{
        texture:"smooth",
        component:"flesh"
    }
};
//鏈式引用
console.log(user.container.texture);//smooth

Math功能
//Math.abs()取參數絕對值
Math.abs(-1)//1;

//Math.max返回參數中最大的值 若參數為空返回-infinity
//Math.min返回最小的值 若參數為空返回infinity
Math.max(2,1,-5)//2
Math.min(2,1,-5)//-5

//Math.floor(),Math.ceil()
//math.floor方法返回小於參數值的最大整數
Math.floor(3.2)//3
Math.floor(-3.2)//4

//Math.ceil方法返回大於參數值的最小整數
Math.floor(3.2)//4
Math.floor(-3.2)//-3

//Math.random返回0-1之間的一個假隨機數
Math.random()//0.23123141231

取範圍間的隨機數
假設10-20之間的
function getRandomarbitary(min,max){
    return Math.random()*(max-min)+min;
}
若要之中的整數 向下取整或是向上取整都行
console.log(Math.floor(getRandomarbitary(10,20)));







 
