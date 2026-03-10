# 📖 IELTS Vocabulary Strategies

Welcome to the vocabulary module! Please select a category below to continue your study:

<div align="center" style="margin-bottom: 20px;">
  <input type="text" id="searchInput" onkeyup="searchTable()" placeholder="🔍 输入单词搜索 (Search for words...)" style="padding: 10px; width: 80%; border-radius: 20px; border: 2px solid #FFB6C1; outline: none;">
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
      // 同时搜索“组别”、“单词”和“例句”列
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

* [📝 生词积累 (New Vocabulary Acquisition)](new-words.md)
* [⚠️ 易错易混 (Confusing Words)](confusing-words.md)
* [🔄 同义替换 (Synonym Replacements)](synonyms.md)
