<div style="background-color: #FFF0F5; padding: 10px 15px; border-radius: 8px; font-size: 14px; margin-bottom: 20px;">
  🏠 <a href="README.md" style="color: #FF69B4; text-decoration: none; font-weight: bold;">Home (主页)</a> 
  <span style="color: #FFB6C1; margin: 0 8px;">/</span> 
  📖 <a href="vocabulary.md" style="color: #FF69B4; text-decoration: none; font-weight: bold;">Vocabulary (词汇目录)</a> 
  <span style="color: #FFB6C1; margin: 0 8px;">/</span> 
  💖 <span style="color: #C71585; font-weight: bold;">My Favorites (专属收藏夹)</span>
</div>

<div align="center">
  <h1 style="color: #FF69B4; border-bottom: 2px solid #FFB6C1; padding-bottom: 10px;">
    💖 Erica's Favorites
  </h1>
  <p style="color: #C71585; font-style: italic;">
    "Consolidate your knowledge, elevate your score."
  </p>
</div>

<div id="favorites-container" style="margin-top: 30px;">
  <p style="text-align:center; color: #C71585;">Loading your favorite vocabulary...</p>
</div>

<script>
  window.addEventListener('load', function() {
    var favs = JSON.parse(localStorage.getItem('erica_favorites')) || {};
    var container = document.getElementById('favorites-container');
    var keys = Object.keys(favs);
    
    if (keys.length === 0) {
      container.innerHTML = '<p style="text-align:center; color: #C71585; margin-top: 50px; font-size: 16px;">目前还没有收藏任何内容哦！<br>快去前面的词汇列表里点亮 🤍 吧！</p>';
      return;
    }

    // 将收藏的单词按编号从小到大排序
    keys.sort(function(a, b) { return parseInt(a) - parseInt(b); });

    // 动态生成表格
    var html = '<table>';
    html += '<thead><tr><th>No. (编号)</th><th>Vocabulary (单词与释义)</th><th>Example (雅思高分例句)</th></tr></thead><tbody>';
    
    for (var i = 0; i < keys.length; i++) {
      var id = keys[i];
      var item = favs[id];
      html += '<tr>';
      html += '<td style="font-weight: bold; text-align: center;">**' + id + '**</td>';
      html += '<td>' + item.col2 + '</td>';
      html += '<td>' + item.col3 + '</td>';
      html += '</tr>';
    }
    html += '</tbody></table>';
    container.innerHTML = html;
  });
// 在页面顶部添加同步按钮的 HTML
var syncDiv = document.createElement('div');
syncDiv.style = "text-align: center; margin-bottom: 20px;";
syncDiv.innerHTML = `
  <button onclick="exportFavs()" style="background:#FF69B4; color:white; border:none; padding:8px 15px; border-radius:15px; cursor:pointer;">📤 生成同步码</button>
  <button onclick="importFavs()" style="background:#DB7093; color:white; border:none; padding:8px 15px; border-radius:15px; cursor:pointer; margin-left:10px;">📥 粘贴同步码</button>
`;
document.getElementById('favorites-container').prepend(syncDiv);

// 导出功能：把红心变成一串密文
window.exportFavs = function() {
  var data = localStorage.getItem('erica_favorites');
  if (!data || data === '{}') {
    alert("目前没有收藏任何单词哦！");
    return;
  }
  // 使用 Base64 简单加密，方便传输
  var code = btoa(unescape(encodeURIComponent(data)));
  prompt("这是你的专属同步码，请复制并发送给你的平板：", code);
};

// 导入功能：把密文变回红心
window.importFavs = function() {
  var code = prompt("请粘贴来自手机的同步码：");
  if (code) {
    try {
      var decodedData = decodeURIComponent(escape(atob(code)));
      localStorage.setItem('erica_favorites', decodedData);
      alert("🎉 同步成功！正在刷新页面...");
      location.reload();
    } catch (e) {
      alert("❌ 同步码格式错误，请检查是否复制完整。");
    }
  }
};
</script>
