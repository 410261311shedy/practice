變數
var name = 10;
"name"字母,美元符號$,下畫線_,和數字組成
其中數字不能開頭
var username = "iwen";
var people_zhangsan = "張三"
    $zhangsan
    _zhangsan
    $_zhangsan

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

    





