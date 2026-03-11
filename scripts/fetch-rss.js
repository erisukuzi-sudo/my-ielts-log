const Parser = require('rss-parser');
const fs = require('fs');
const parser = new Parser();

(async () => {
  try {
    const feed = await parser.parseURL('http://feeds.bbci.co.uk/news/education/rss.xml');
    const articles = feed.items.slice(0, 2);
    
    if (!fs.existsSync('reading')) fs.mkdirSync('reading');

    // 1. 读取旧的索引内容，如果不存在则创建
    const libraryPath = 'reading/index.md';
    let libraryContent = fs.existsSync(libraryPath) 
        ? fs.readFileSync(libraryPath, 'utf8') 
        : "# 🌍 Extensive Reading Library\n\nWelcome to your daily BBC archive.\n\n";

    let newLinks = "";

    // 2. 处理每一篇文章
    for (const item of articles) {
      const safeTitle = item.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().substring(0, 50);
      const date = new Date(item.pubDate).toISOString().split('T')[0];
      const fileName = `${date}-bbc-${safeTitle}.md`;
      const filePath = `reading/${fileName}`;
      
      const content = `---\ntitle: "${item.title}"\ndate: ${date}\n---\n# ${item.title}\n\n[Original Article](${item.link})\n\n${item.contentSnippet || ""}`;
      
      fs.writeFileSync(filePath, content);

      // 检查这篇文章是否已经在索引里了，避免重复添加
      if (!libraryContent.includes(fileName)) {
        newLinks += `* [${date} - ${item.title}](./${fileName})\n`;
      }
    }

    // 3. 将新文章链接追加到索引页的顶部（在标题之后插入）
    const headerEnd = libraryContent.indexOf('\n\n') + 2;
    const updatedLibrary = libraryContent.slice(0, headerEnd) + newLinks + libraryContent.slice(headerEnd);
    
    fs.writeFileSync(libraryPath, updatedLibrary);
    console.log('Library index updated successfully!');

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
