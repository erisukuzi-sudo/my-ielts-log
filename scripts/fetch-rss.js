const Parser = require('rss-parser');
const fs = require('fs');
const parser = new Parser();

(async () => {
  const feed = await parser.parseURL('http://feeds.bbci.co.uk/news/education/rss.xml');
  const articles = feed.items.slice(0, 2);
  
  if (!fs.existsSync('reading')) fs.mkdirSync('reading');

  let newLinks = `\n### 🆕 Daily Scraped Articles\n`; // 准备添加到 reading.md 的新链接部分

  articles.forEach(item => {
    const safeTitle = item.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().substring(0, 50);
    const date = new Date(item.pubDate).toISOString().split('T')[0];
    const fileName = `reading/${date}-bbc-${safeTitle}.md`;
    
    const content = `---
title: "${item.title}"
date: ${date}
source: BBC News
tags: [Reading, Education, IELTS]
---

# ${item.title}

**🔗 Original Article:** [Click to read on BBC](${item.link})

> **🎯 Skimming Practice (泛读训练):** Read the abstract below quickly to identify the core subject.

${item.contentSnippet || item.content || "No abstract provided."}

---
### 📝 Vocabulary Bank (生词本)
- 
- 

### 🧠 Summary (段落大意提取)
> 
`;
    
    fs.writeFileSync(fileName, content);
    console.log(`Successfully fetched from BBC: ${fileName}`);

    // 将新生成的文件链接记录下来
    newLinks += `* [${date} - ${item.title}](./${fileName})\n`;
  });

  // --- 关键更新：自动修改 reading.md ---
  const indexFilePath = 'reading.md';
  if (fs.existsSync(indexFilePath)) {
    let indexContent = fs.readFileSync(indexFilePath, 'utf8');
    
    // 为了防止每次运行都无限叠加同一个标题，我们做个简单的替换
    // 将新生成的文章链接，追加到泛读板块链接的下方
    const insertPoint = '* 🌍 [泛读积累 (Extensive Reading: Daily News)](./reading/)';
    
    if (indexContent.includes(insertPoint)) {
        // 先移除之前可能存在的 "### 🆕 Daily Scraped Articles" 及其后面的内容，保持页面整洁（这里用一个简单的切分逻辑）
        if(indexContent.includes('### 🆕 Daily Scraped Articles')) {
             indexContent = indexContent.split('### 🆕 Daily Scraped Articles')[0].trim();
        }
        
        indexContent = indexContent.replace(insertPoint, insertPoint + '\n' + newLinks);
        fs.writeFileSync(indexFilePath, indexContent);
        console.log('Successfully updated reading.md with new links.');
    } else {
        console.log('Insert point not found in reading.md. Please check the file format.');
    }
  } else {
      console.log('reading.md not found. Cannot update links.');
  }

})();
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
