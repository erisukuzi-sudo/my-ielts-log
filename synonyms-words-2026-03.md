<div align="center">
  <h1 style="color: #FF69B4; border-bottom: 2px solid #FFB6C1; padding-bottom: 10px;">
    🔄 IELTS Synonym Upgrades
  </h1>
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

