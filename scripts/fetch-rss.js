const Parser = require('rss-parser');
const fs = require('fs');
const parser = new Parser();

(async () => {
  try {
    // 1. 抓取 BBC RSS 
    const feed = await parser.parseURL('http://feeds.bbci.co.uk/news/education/rss.xml');
    const articles = feed.items.slice(0, 2);
    
    if (!fs.existsSync('reading')) fs.mkdirSync('reading');

    let newLinks = ""; // 存放生成的链接列表

    // 2. 生成每一篇文章的 MD 文件
    for (const item of articles) {
      const safeTitle = item.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().substring(0, 50);
      const date = new Date(item.pubDate).toISOString().split('T')[0];
      const fileName = `reading/${date}-bbc-${safeTitle}.md`;
      
      const content = `---
title: "${item.title}"
date: ${date}
source: BBC News
---
# ${item.title}
**Original Link:** [Read on BBC](${item.link})

${item.contentSnippet || item.content || ""}
`;
      
      fs.writeFileSync(fileName, content);
      newLinks += `  * [${date} - ${item.title}](./${fileName})\n`;
    }

    // 3. 关键：把链接插入 reading.md 的锚点位置
    const indexFilePath = 'reading.md';
    if (fs.existsSync(indexFilePath)) {
      let indexContent = fs.readFileSync(indexFilePath, 'utf8');
      
      const startTag = '';
      const endTag = '';

      // 如果能在 reading.md 里找到这两个暗号
      if (indexContent.includes(startTag) && indexContent.includes(endTag)) {
        const parts = indexContent.split(startTag);
        const secondPart = parts[1].split(endTag);
        
        // 拼装：前半部分 + 开始暗号 + 新链接 + 结束暗号 + 后半部分
        const newContent = parts[0] + startTag + "\n" + newLinks + endTag + secondPart[1];
        
        fs.writeFileSync(indexFilePath, newContent);
        console.log('Successfully nested links in reading.md!');
      } else {
        console.log('Missing anchor tags in reading.md. Please add them first!');
      }
    }
  } catch (error) {
    console.error('Error details:', error);
    process.exit(1);
  }
})();
