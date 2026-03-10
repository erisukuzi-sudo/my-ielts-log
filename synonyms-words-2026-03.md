<div align="center">
  <h1 style="color: #FF69B4; border-bottom: 2px solid #FFB6C1; padding-bottom: 10px;">
    🔄 IELTS Synonym Upgrades
  </h1>
</div>

<style>
  .floating-widget {
    position: fixed;
    bottom: 30px;
    right: 20px;
    background-color: #ffffff;
    border: 1px solid #eaecef;
    border-radius: 12px;
    padding: 10px 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .floating-widget a {
    text-decoration: none;
    color: #0969da;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
</style>

<div class="floating-widget">
  <a href="#">⬆️ 顶部 (Top)</a>
<a href="vocabulary">⬅️ 目录 (Index)</a>
 <a href="index.html">🏠 主页 (Home)</a> 
</div>

<div align="center" style="margin-bottom: 20px;">
  <input type="text" id="searchInput" onkeyup="searchTable()" placeholder="🔍 搜索中文或英文单词 (Search...)" style="padding: 10px; width: 80%; border-radius: 20px; border: 2px solid #FFB6C1; outline: none;">
</div>

<script>
function searchTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.querySelector("table");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    if (td) {
      txtValue = (td[0].textContent || td[0].innerText) + 
                 (td[1].textContent || td[1].innerText) + 
                 (td[2].textContent || td[2].innerText);
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
</script>

| 核心含义 (Meaning) | 你的基础表达 (Your Foundation) | 💎 高阶替换 (Advanced Synonyms) |
| :--- | :--- | :--- |
| **解决（问题）** | solve | **resolve / address / tackle** |
| **改善 / 提高** | improve | **enhance / elevate / ameliorate** |
| **导致 / 引起** | lead to | **result in / give rise to / trigger** |
| **促进 / 推动** | facilitate | **promote / boost / propel** |
| **阻碍 / 妨碍** | hamper | **hinder / impede / obstruct** |
| **应对 / 处理（危机）** | tackle | **cope with / combat / grapple with** |
| **减轻 / 缓解（压力）** | alleviate | **mitigate / relieve / ease** |
| **恶化 / 加剧** | degrade | **deteriorate / aggravate / exacerbate** |
| **保护** | protect | **safeguard / preserve / shield** |
| **破坏 / 毁坏** | destroy | **devastate / ruin / undermine** |
| **鼓励 / 激励** | encourage | **motivate / stimulate / inspire** |
| **限制 / 约束** | limit | **restrict / constrain / confine** |
| **依赖 / 依靠** | depend on | **rely on / be contingent upon / rest on** |
| **忽视 / 视而不见** | neglect | **ignore / overlook / turn a blind eye to** |
| **培养（技能/品质）** | nurture | **cultivate / foster / develop** |
| **优先考虑** | prioritize | **give priority to / attach importance to / put... first** |
| **投资于...** | invest in | **allocate funds to / pour money into / finance** |
| **引起了广泛关注** | arouse huge publicity | **draw widespread attention / spark public debate / capture the headlines** |
| **优势 / 好处** | advantage | **merit / upside / competitive edge** |
| **劣势 / 缺点** | disadvantage | **drawback / downside / shortcoming** |
| **影响 / 冲击** | impact / influence | **repercussions / implications / profound effect** |
| **责任 / 义务** | responsibility | **obligation / duty / accountability** |
| **意识（如：环保意识）** | awareness | **consciousness / realization / cognitive grasp** |
| **资源（如：自然资源）** | resource | **assets / reserves / provisions** |
| **多样性** | diversity | **multiplicity / heterogeneity / a rich array of** |
| **创新** | innovation | **ingenuity / breakthrough / novelty** |
| **效率** | efficiency | **productivity / efficacy / proficiency** |
| **稳定 / 稳定性** | stability | **steadiness / equilibrium / consistency** |
| **平等 / 公平** | equality | **parity / impartiality / egalitarianism** |
| **现象** | phenomenon | **occurrence / manifestation / prevailing trend** |
| **趋势** | trend / tendency | **inclination / propensity / trajectory** |
| **竞争** | compete | **rivalry / contend / vie for** |
| **合作** | collaborate | **cooperate / join forces / work in partnership** |
| **挑战** | challenge | **hurdle / obstacle / demanding task** |
| **机会 / 契机** | chance | **prospect / golden opportunity / stepping stone** |

