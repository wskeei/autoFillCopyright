// 你要填写的内容
const autofillContent = "四核intel i5 CPU，16GB内存，512固态硬盘，10Mbps网络带宽";

// 查找目标 textarea 元素
function autofillTextarea() {
    // 通过 class 名和标签定位
    const textarea = document.querySelector('.fillin_info .hd-text-area.large textarea.large');
    if (textarea) {
        textarea.value = autofillContent;
        // 触发 input/input 事件，确保页面监听能感知变化
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
        console.log('未找到目标 textarea 元素');
    }
}

// 等待页面加载完毕后执行
document.addEventListener('DOMContentLoaded', autofillTextarea);
setTimeout(autofillTextarea, 1000); // 延迟执行，防止页面异步渲染
