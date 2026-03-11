const Parser = require('rss-parser');
const fs = require('fs');
const parser = new Parser();

(async () => {
  // 替换为 BBC 教育频道的 RSS 源，高度契合雅思高频话题
  const feed = await parser.parseURL('http://feeds.bbci.co.uk/news/education/rss.xml');
  
  // 每天抓取最新的 2 篇文章
  const articles = feed.items.slice(0, 2);
  
  // 确保 reading 文件夹存在
  if (!fs.existsSync('reading')) fs.mkdirSync('reading');

  articles.forEach(item => {
    // 处理标题作为安全的文件名
    const safeTitle = item.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().substring(0, 50);
    const date = new Date(item.pubDate).toISOString().split('T')[0];
    const fileName = `reading/${date}-bbc-${safeTitle}.md`;
    
    // Markdown 模板：专为雅思阅读训练设计
    const content = `---
title: "${item.title}"
date: ${date}
source: BBC News
tags: [Reading, Education, IELTS]
---

# ${item.title}

**🔗 Original Article:** [Click to read on BBC](${item.link})

> **🎯 Skimming Practice (泛读训练):** > *Read the abstract below quickly to identify the core subject.*

${item.contentSnippet || item.content || "No abstract provided."}

---
### 📝 Vocabulary Bank (生词本)
*Write down new words, guess their meanings from the context, and then check the dictionary.*
- 
- 
- 

### 🧠 Summary (段落大意提取)
*Summarize the main idea in one English sentence:*
> 
`;
    
    fs.writeFileSync(fileName, content);
    console.log(`Successfully fetched from BBC: ${fileName}`);
  });
})();
