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

<div style="display: flex; flex-direction: column; align-items: center; gap: 15px; margin-top: 40px; margin-bottom: 20px; padding-top: 20px; border-top: 1px dashed #FFB6C1;">
  <button onclick="exportFavs()" style="background:#FF69B4; color:white; border:none; padding:12px 20px; border-radius:20px; cursor:pointer; font-weight:bold; box-shadow: 0 4px 6px rgba(255,105,180,0.3); width: 220px;">📤 生成同步码 (Export)</button>
  <button onclick="importFavs()" style="background:#DB7093; color:white; border:none; padding:12px 20px; border-radius:20px; cursor:pointer; font-weight:bold; box-shadow: 0 4px 6px rgba(219,112,147,0.3); width: 220px;">📥 粘贴同步码 (Import)</button>
</div>



<div style="position: fixed; bottom: 30px; right: 20px; background-color: #FF69B4; border-radius: 30px; padding: 15px 10px; display: flex; flex-direction: column; gap: 18px; box-shadow: 0 6px 16px rgba(255,105,180,0.4); z-index: 999;">

  <span onclick="window.location.href='./'" style="font-size: 22px; cursor: pointer; text-align: center; display: block; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));" title="回到主页">🏠</span>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.5.0/lz-string.min.js"></script>

<script>
// 呼出导出界面
window.exportFavs = function() {
  var data = localStorage.getItem('erica_favorites');
  if (!data || data === '{}') { alert("暂无收藏记录！"); return; }
  
  document.getElementById('sync-title').innerText = "📤 请全选并复制以下所有代码";
  
  // 【✨ 瘦身魔法】：一键压缩数据，体积大幅缩减！
  var compressedCode = LZString.compressToBase64(data);
  document.getElementById('sync-text').value = compressedCode;
  
  document.getElementById('sync-text').readOnly = true;
  document.getElementById('sync-btn-action').style.display = 'none';
  document.getElementById('sync-modal').style.display = 'block';
};

// 呼出导入界面
window.importFavs = function() {
  document.getElementById('sync-title').innerText = "📥 请在下方粘贴同步码";
  document.getElementById('sync-text').value = "";
  document.getElementById('sync-text').readOnly = false;
  document.getElementById('sync-btn-action').style.display = 'block';
  document.getElementById('sync-btn-action').innerText = "确认恢复数据";
  
  document.getElementById('sync-btn-action').onclick = function() {
    var code = document.getElementById('sync-text').value.trim();
    if (!code) return;
    
    try {
      // 【✨ 解开魔法】：把短小精悍的压缩包还原成庞大的单词数据
      var decompressedData = LZString.decompressFromBase64(code);
      
      // 如果解压出来是空的，说明代码不完整
      if (!decompressedData) throw new Error("解压失败"); 
      
      var importedFavs = JSON.parse(decompressedData);
      
      // 自动修复旧数据的分类标签
      for (var key in importedFavs) {
        if (!importedFavs[key].type) importedFavs[key].type = 'confusing';
      }
      
<div style="display: flex; flex-direction: column; align-items: center; gap: 15px; margin-top: 40px; margin-bottom: 20px; padding-top: 20px; border-top: 1px dashed #FFB6C1;">
  <button onclick="exportFavs()" style="background:#FF69B4; color:white; border:none; padding:12px 20px; border-radius:20px; cursor:pointer; font-weight:bold; width: 220px; box-shadow: 0 4px 6px rgba(255,105,180,0.3);">📤 生成同步码 (Export)</button>
  <button onclick="importFavs()" style="background:#DB7093; color:white; border:none; padding:12px 20px; border-radius:20px; cursor:pointer; font-weight:bold; width: 220px; box-shadow: 0 4px 6px rgba(219,112,147,0.3);">📥 粘贴同步码 (Import)</button>
</div>

<div id="sync-modal" style="display:none; position:fixed; top:15%; left:5%; width:90%; background:#FFF0F5; padding:20px; border-radius:15px; box-shadow:0 10px 30px rgba(255,105,180,0.5); z-index:9999; box-sizing:border-box; border: 2px solid #FFB6C1;">
  <h3 id="sync-title" style="color:#C71585; margin-top:0; text-align:center;">同步控制台</h3>
  <textarea id="sync-text" style="width:100%; height:180px; border:1px solid #FFB6C1; border-radius:10px; padding:10px; font-family:monospace; margin-bottom:15px; font-size:12px;" placeholder="在这里粘贴你的代码..."></textarea>
  <div style="display:flex; gap:10px; justify-content:center;">
    <button id="sync-btn-action" style="background:#FF69B4; color:white; border:none; padding:10px 20px; border-radius:10px; font-weight:bold; cursor:pointer;">执行</button>
    <button onclick="document.getElementById('sync-modal').style.display='none'" style="background:#A9A9A9; color:white; border:none; padding:10px 20px; border-radius:10px; font-weight:bold; cursor:pointer;">关闭</button>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.5.0/lz-string.min.js"></script>
<script>
window.exportFavs = function() {
  var data = localStorage.getItem('erica_favorites');
  if (!data || data === '{}') { alert("暂无收藏记录！"); return; }
  document.getElementById('sync-title').innerText = "📤 请全选并复制以下所有代码";
  var compressedCode = LZString.compressToBase64(data);
  document.getElementById('sync-text').value = compressedCode;
  document.getElementById('sync-text').readOnly = true;
  document.getElementById('sync-btn-action').style.display = 'none';
  document.getElementById('sync-modal').style.display = 'block';
};

window.importFavs = function() {
  document.getElementById('sync-title').innerText = "📥 请在下方粘贴同步码";
  document.getElementById('sync-text').value = "";
  document.getElementById('sync-text').readOnly = false;
  document.getElementById('sync-btn-action').style.display = 'block';
  document.getElementById('sync-btn-action').innerText = "确认恢复数据";
  document.getElementById('sync-btn-action').onclick = function() {
    var code = document.getElementById('sync-text').value.trim();
    if (!code) return;
    try {
      var decompressedData = LZString.decompressFromBase64(code);
      if (!decompressedData) throw new Error("解压失败"); 
      var importedFavs = JSON.parse(decompressedData);
      for (var key in importedFavs) {
        if (!importedFavs[key].type) importedFavs[key].type = 'confusing';
      }
      localStorage.setItem('erica_favorites', JSON.stringify(importedFavs));
      alert("完美同步！数据已成功解压并恢复。");
      location.reload();
    } catch(e) {
      alert("代码校验失败！请确保复制了完整的字符串。");
    }
  };
  document.getElementById('sync-modal').style.display = 'block';
};
</script>

<div style="position: fixed; bottom: 30px; right: 20px; background-color: #FF69B4; border-radius: 30px; padding: 15px 10px; display: flex; flex-direction: column; gap: 18px; box-shadow: 0 6px 16px rgba(255,105,180,0.4); z-index: 999;">
  <span onclick="window.location.href='./'" style="font-size: 22px; cursor: pointer; text-align: center; display: block; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));" title="回到主页">🏠</span>
  <span onclick="window.location.href='vocabulary'" style="font-size: 22px; cursor: pointer; text-align: center; display: block; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));" title="回到词汇目录">📖</span>
  <span onclick="window.scrollTo({top: 0, behavior: 'smooth'})" style="font-size: 22px; cursor: pointer; text-align: center; display: block; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));" title="回到顶部">⬆️</span>
</div>



    
