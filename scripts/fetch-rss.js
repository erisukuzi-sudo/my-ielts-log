const Parser = require('rss-parser');
const fs = require('fs');
const parser = new Parser();

(async () => {
  try {
    const feed = await parser.parseURL('http://feeds.bbci.co.uk/news/education/rss.xml');
    const articles = feed.items.slice(0, 2);
    
    if (!fs.existsSync('reading')) fs.mkdirSync('reading');

    let newLinks = `\n### 🆕 Daily Scraped Articles\n`;

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

> **🎯 Skimming Practice:** Read the abstract below.

${item.contentSnippet || item.content || "No abstract provided."}
`;
      
      fs.writeFileSync(fileName, content);
      newLinks += `* [${date} - ${item.title}](./${fileName})\n`;
    });

    const indexFilePath = 'reading.md';
    if (fs.existsSync(indexFilePath)) {
        let indexContent = fs.readFileSync(indexFilePath, 'utf8');
        // 只要文件包含 'reading' 文件夹的链接，我们就尝试更新
        if (indexContent.includes('./reading/')) {
            if(indexContent.includes('### 🆕 Daily Scraped Articles')) {
                 indexContent = indexContent.split('### 🆕 Daily Scraped Articles')[0].trim();
            }
            fs.writeFileSync(indexFilePath, indexContent + '\n' + newLinks);
            console.log('Successfully updated reading.md');
        }
    }
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1); // 这样能看到具体的报错信息
  }
})();
