State Hooks
//To remember” information like user input
useState declares a state variable that you can update directly.
// 數字類型的狀態
const [count, setCount] = useState(0);           // ✅ 數字 0
const [price, setPrice] = useState(99.9);        // ✅ 小數
const [quantity, setQuantity] = useState(1);     // ✅ 整數

// 其他類型的狀態
const [name, setName] = useState('');            // ✅ 字串
const [todos, setTodos] = useState([]);          // ✅ 陣列
const [user, setUser] = useState(null);          // ✅ null
const [isLoading, setIsLoading] = useState(false); // ✅ 布林值
const [formData, setFormData] = useState({});    // ✅ 物件
e.g.:
function ImageGallery() {
   const[index, setIndex] = useState(0)
}
const[index, setIndex] = useState(0)
//Declares a state variable called index,
//and it's setter function setIndex,
//initializing the state with a value of 0
useState(0) 
//React Hook that creates state with initial value 0
const[index, setIndex] = useState(0)
//Array destructuring that assigns
//index = current state value
//setIndex = function to update the satate value

Context Hooks
//Context lets a component receive information from 
//distant parents without passing it as props
e.g: 
//your app’s top-level component can pass the current UI theme 
//to all components below, no matter how deep.
useContext
e.g:
function Button() {
    const theme = useContext(ThemeContext);
}

Ref Hooks
//Refs let a component hold some information 
//that isn’t used for rendering
//Refs allow components to store information
//that doesn't affect the visual rendering
//Refs is a React feature for persisting data across "re-render"
//Store values that persist between renders
//Changes to refs don't trigger component re-render
//和State 相比 states 改變會觸法重新渲染而 ref改變不會
//State資料改變，元件重新渲染，使用者看到更新後的畫面
//Ref資料改變，遠見不會重新渲染，畫面保持不變
//簡而言之，當需要元件像「私人筆記」一樣的東西
//用來記錄不會影響畫面的資訊時，就可使用Refs
//declares a ref. You can hold any value in it, 
//but most often it’s used to hold a DOM node.
當瀏覽器載入 HTML 程式碼時，它會建立一個樹狀結構來表示頁面，這個結構就是 DOM（文件物件模型）。
而這個結構中的每一個部分都是一個 DOM 節點
DOM（文件物件模型）：

· 將 HTML 文件結構化成一個由物件組成的樹
· 讓 JavaScript 可以操作網頁的內容、結構和樣式
DOM 節點的類型包括：

· 元素節點 - <div>, <p>, <button>, <input> 等 HTML 標籤
· 文字節點 - 元素內的文字內容
· 屬性節點 - 元素的屬性（如 class, id 等）

範例： React中的Ref與DOM 節點
const inputRef = useRef(null);

// 將 ref 連接到 DOM 節點
const inputRef = useRef(null);

//將ref連接到Dom節點
<input ref={inputRef} />

//之後就可以操作這個DOM節點
inputRef.current.focus();//讓輸入框獲得焦點

why?
1. 直接操作 - 需要直接控制 DOM 元素時
   · 聚焦輸入框 (input.focus())
   · 控制影片播放 (video.play())
   · 測量元素尺寸 (div.getBoundingClientRect())
2. 避免重新渲染 - 這些操作不需要更新元件狀態
3. 跳過 React 的聲明式抽象 - 處理需要命令式程式碼的情況

所以當說 "hold a DOM node" 時，意思就是 儲存對實際網頁中某個元素的參考，讓你可以直接操作它。

Effect Hooks
//Effects let a component connect to and synchronize with external systems. 
//Effect Hooks 讓你在函數元件中管理生命週期行為，處理渲染之外的操作，並在適當的時候進行清理。
指發生在元件渲染結果之外的操作，例如：

· 資料獲取 - 從 API 取得資料
· 手動操作 DOM - 直接修改網頁元素
· 訂閱事件 - 設定計時器、監聽視窗大小變化
· 清理工作 - 清除計時器、取消訂閱
用法：
useEffect
import { useEffect } from 'react';

// 基本用法
useEffect(() => {
  // effect程式碼在這裡執行
  console.log('元件渲染後執行');
  
  // 可選的清理函數
  return () => {
    console.log('清理工作');
  };
}, [dependency]); // 陣列
使用的三種情況：
// 1. 每次渲染後都執行
useEffect(() => {
  // 每次更新都執行
});

// 2. 只在 初次渲染 mount 時執行一次
useEffect(() => {
  // 只在元件初次渲染後執行
}, []);

// 3.dependencies變化時執行
useEffect(() => {
  // 當 count 變化時執行 count 就是dependency
}, [count]);

常見使用範例：
// 1. 資料獲取
useEffect(() => {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => setData(data));
}, []);

// 2. 訂閱事件
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  
  return () => window.removeEventListener('resize', handleResize);
}, []);

// 3. 計時器
useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);
  
  return () => clearInterval(timer);
}, []);
useLayoutEffect
與 useEffect 類似，但在瀏覽器繪製畫面前同步執行。
useLayoutEffect(() => {
  // 在這裡的操作會阻塞瀏覽器繪製
  // 適合需要同步測量 DOM 的場景
}, []);
useInsertionEffect

Arrow Function =>
範例：
// 傳統函數寫法
function(a) { return a + 1; }

// 箭頭函數寫法
(a) => a + 1

// 在 React 中的應用
const handleClick = () => {
  console.log('按鈕被點擊');
};

// 事件處理函數
onClick={(e) => handleClick(e)}
原句：
onClick={function(e)｛return handleClick(e);}}
更簡潔
onClick={function(e)｛handleClick(e);}}
範例：
onClick={handleClick}                    // 最推薦
// 或者
onClick={(e) => handleClick(e)}         // 次推薦
// 或者  
onClick={function(e) { handleClick(e); }} // 可接受

.current(useRef屬性）
範例:
const inputRef = useRef(null);

// 使用 .current 來訪問 ref 的當前值
console.log(inputRef.current); // 獲取當前值
inputRef.current = newValue;   // 設置新值

// 實際應用 - 操作 DOM 元素
inputRef.current.focus();      // 讓輸入框獲得焦點
inputRef.current.value = 'hello'; // 設置輸入框的值

.focus()(DOM方法）
// 讓指定的輸入框獲得焦點（游標閃爍在輸入框內）
inputRef.current.focus();

// 這是一個瀏覽器內建的 DOM 方法，不是 React 特有的

.map()在react中的應用
//在react中渲染列表
{todos.map(todo => (
   <div key={todo.id}>{todo.text}</div>
   ))}
