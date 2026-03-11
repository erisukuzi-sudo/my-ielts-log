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

  <span onclick="window.location.href='README.md'" style="font-size: 22px; cursor: pointer; text-align: center; display: block; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));" title="回到主页">🏠</span>

  <span onclick="window.location.href='vocabulary.md'" style="font-size: 22px; cursor: pointer; text-align: center; display: block; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));" title="回到词汇目录">📖</span>

  <span onclick="window.scrollTo({top: 0, behavior: 'smooth'})" style="font-size: 22px; cursor: pointer; text-align: center; display: block; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));" title="回到顶部">⬆️</span>

</div>
    
