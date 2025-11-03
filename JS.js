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
var則是會用同一個
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
    對象
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









