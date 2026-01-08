document.getElementById('autofill-btn').addEventListener('click', async () => {
  // 向当前活动页面发送消息，触发自动填写
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // 表单内容
      const autofillContent1 = "四核intel i5 CPU，16GB内存，512固态硬盘，10Mbps网络带宽";
      const autofillContent2 = "服务端内存2G以上，硬盘空间不低于40G； 客户端4G及以上内存，硬盘空间16G及以上";
      const autofillContent3 = "Windows 10操作系统";
      const autofillContent4 = "开发环境：node.js16.17.1，Vue3 开发工具：VsCode";
      const autofillContent5 = "Windows 10操作系统";
      const autofillContent6 = "nginx-1.24.5，MySQL5.0及以上版本";
      // 获取所有匹配的 textarea
      const textareas = document.querySelectorAll('.fillin_info .hd-text-area.large textarea.large');
      if (textareas.length >= 6) {
        textareas[0].value = autofillContent1;
        textareas[0].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[0].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[1].value = autofillContent2;
        textareas[1].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[1].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[2].value = autofillContent3;
        textareas[2].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[2].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[3].value = autofillContent4;
        textareas[3].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[3].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[4].value = autofillContent5;
        textareas[4].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[4].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[5].value = autofillContent6;
        textareas[5].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[5].dispatchEvent(new Event('change', { bubbles: true }));
      } else if (textareas.length === 5) {
        textareas[0].value = autofillContent1;
        textareas[0].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[0].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[1].value = autofillContent2;
        textareas[1].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[1].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[2].value = autofillContent3;
        textareas[2].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[2].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[3].value = autofillContent4;
        textareas[3].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[3].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[4].value = autofillContent5;
        textareas[4].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[4].dispatchEvent(new Event('change', { bubbles: true }));
        alert('只找到五个表单，第六个未填写');
      } else if (textareas.length === 4) {
        textareas[0].value = autofillContent1;
        textareas[0].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[0].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[1].value = autofillContent2;
        textareas[1].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[1].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[2].value = autofillContent3;
        textareas[2].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[2].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[3].value = autofillContent4;
        textareas[3].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[3].dispatchEvent(new Event('change', { bubbles: true }));
        alert('只找到四个表单，第五、第六个未填写');
      } else if (textareas.length === 3) {
        textareas[0].value = autofillContent1;
        textareas[0].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[0].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[1].value = autofillContent2;
        textareas[1].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[1].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[2].value = autofillContent3;
        textareas[2].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[2].dispatchEvent(new Event('change', { bubbles: true }));
        alert('只找到三个表单，第四、第五、第六个未填写');
      } else if (textareas.length === 2) {
        textareas[0].value = autofillContent1;
        textareas[0].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[0].dispatchEvent(new Event('change', { bubbles: true }));
        textareas[1].value = autofillContent2;
        textareas[1].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[1].dispatchEvent(new Event('change', { bubbles: true }));
        alert('只找到两个表单，第三、第四、第五、第六个未填写');
      } else if (textareas.length === 1) {
        textareas[0].value = autofillContent1;
        textareas[0].dispatchEvent(new Event('input', { bubbles: true }));
        textareas[0].dispatchEvent(new Event('change', { bubbles: true }));
        alert('只找到一个表单，第二、第三、第四、第五、第六个未填写');
      } else {
        alert('未找到目标 textarea 元素');
      }

      // 选择 JavaScript、HTML、SQL 复选框（修正版）
      const checkboxValues = ["JavaScript", "HTML", "SQL"];
      const labels = document.querySelectorAll('label.hd-checkbox-button');
      labels.forEach(label => {
        const input = label.querySelector('input[type="checkbox"]');
        const span = label.querySelector('span.checkbox-inner');
        if (!input || !span) return;
        const labelText = span.childNodes[0].textContent.trim();
        if (checkboxValues.includes(labelText)) {
          if (!input.checked) input.click();
        } else {
          if (input.checked) input.click(); // 可选：取消其他已选
        }
      });

      // 填写随机数到指定 input 框
      const inputBox = document.querySelector('.input-content.large input[type="text"]');
      if (inputBox) {
        const randomNum = Math.floor(Math.random() * (10000 - 7000 + 1)) + 7000;
        inputBox.value = randomNum;
        inputBox.dispatchEvent(new Event('input', { bubbles: true }));
        inputBox.dispatchEvent(new Event('change', { bubbles: true }));
      }

      // 填写100字textarea内容
      const textarea100 = document.querySelector('.hd-text-area.large textarea.large[maxlength="100"]');
      if (textarea100) {
        textarea100.value = "本系统具有简单性、面向对象、健壮性、平台独立与可移植性特点。";
        textarea100.dispatchEvent(new Event('input', { bubbles: true }));
        textarea100.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  });
});
