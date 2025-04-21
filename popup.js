document.getElementById('autofill-btn').addEventListener('click', async () => {
  // 向当前活动页面发送消息，触发自动填写
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // 填写内容
      const autofillContent = "四核intel i5 CPU，16GB内存，512固态硬盘，10Mbps网络带宽";
      const textarea = document.querySelector('.fillin_info .hd-text-area.large textarea.large');
      if (textarea) {
        textarea.value = autofillContent;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.dispatchEvent(new Event('change', { bubbles: true }));
      } else {
        alert('未找到目标 textarea 元素');
      }
    }
  });
});
