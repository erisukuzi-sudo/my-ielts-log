<h2 style="color: #FF69B4;">↔️ 易混辨析 (Confusing Words)</h2>
<div id="fav-confusing">加载中...</div>

<h2 style="color: #FF69B4;">🔄 同义替换 (Synonyms)</h2>
<div id="fav-synonyms">加载中...</div>

<h2 style="color: #FF69B4;">🆕 核心生词 (New Vocabulary)</h2>
<div id="fav-new">加载中...</div>

<script>
  window.addEventListener('load', function() {
    var favs = JSON.parse(localStorage.getItem('erica_favorites')) || {};
    var types = ['confusing', 'synonyms', 'new'];
    
    types.forEach(function(type) {
      var container = document.getElementById('fav-' + type);
      var html = '<table><thead><tr><th>No.</th><th>Vocabulary</th><th>Example</th></tr></thead><tbody>';
      var count = 0;

      for (var id in favs) {
        if (favs[id].type === type) {
          html += '<tr><td>' + id.split('_')[1] + '</td><td>' + favs[id].col2 + '</td><td>' + favs[id].col3 + '</td></tr>';
          count++;
        }
      }
      
      if (count === 0) {
        container.innerHTML = '<p style="color:gray;">该板块暂无收藏内容</p>';
      } else {
        container.innerHTML = html + '</tbody></table>';
      }
    });
  });
</script>

<div align="center" style="margin-top: 40px; margin-bottom: 20px; padding-top: 20px; border-top: 1px dashed #FFB6C1;">
  <button onclick="exportFavs()" style="background:#FF69B4; color:white; border:none; padding:10px 20px; border-radius:20px; cursor:pointer; font-weight:bold; box-shadow: 0 4px 6px rgba(255,105,180,0.3);">📤 生成同步码 (Export)</button>
  <button onclick="importFavs()" style="background:#DB7093; color:white; border:none; padding:10px 20px; border-radius:20px; cursor:pointer; margin-left:15px; font-weight:bold; box-shadow: 0 4px 6px rgba(219,112,147,0.3);">📥 粘贴同步码 (Import)</button>
</div>

<script>
// 导出功能：把红心打包成同步码
function exportFavs() {
  var data = localStorage.getItem('erica_favorites');
  if (!data || data === '{}') {
    alert("目前没有任何收藏记录哦！快去前面的词汇列表里点亮 🤍 吧！");
    return;
  }
  // 加密打包
  var code = btoa(unescape(encodeURIComponent(data)));
  prompt("这是你的专属同步码，请全选复制，并发送给你的另一台设备：", code);
}

// 导入功能：把同步码解包成红心
function importFavs() {
  var code = prompt("请粘贴来自另一台设备的同步码：");
  if (code) {
    try {
      var decodedData = decodeURIComponent(escape(atob(code)));
      localStorage.setItem('erica_favorites', decodedData);
      alert("🎉 同步大成功！正在为你刷新专属收藏夹...");
      location.reload();
    } catch (e) {
      alert("❌ 同步码格式似乎有点问题，请检查是否复制完整哦。");
    }
  }
}
</script>
