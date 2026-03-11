const Parser = require('rss-parser');
const fs = require('fs');
const parser = new Parser();

// 1. 定义你感兴趣的多个频道
const feeds = [
  { name: 'Science', url: 'http://feeds.bbci.co.uk/news/science_and_environment/rss.xml' },
  { name: 'Technology', url: 'http://feeds.bbci.co.uk/news/technology/rss.xml' },
  { name: 'Education', url: 'http://feeds.bbci.co.uk/news/education/rss.xml' },
  { name: 'Arts', url: 'http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml' }
];

(async () => {
  try {
    if (!fs.existsSync('reading')) fs.mkdirSync('reading');

    const libraryPath = 'reading/index.md';
    let libraryContent = fs.existsSync(libraryPath) 
        ? fs.readFileSync(libraryPath, 'utf8') 
        : "# 🌍 Extensive Reading Library\n\nWelcome to your daily BBC archive.\n\n";

    let newLinks = "";

    // 2. 从每个频道里各抓取 1 篇最新的文章
    for (const feedInfo of feeds) {
      const feed = await parser.parseURL(feedInfo.url);
      const item = feed.items[0]; // 只取每个频道最热的那一篇
      
      const safeTitle = item.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().substring(0, 50);
      const date = new Date(item.pubDate).toISOString().split('T')[0];
      const fileName = `${date}-${feedInfo.name}-${safeTitle}.md`;
      const filePath = `reading/${fileName}`;
      
      const content = `---\ntitle: "${item.title}"\ndate: ${date}\ncategory: ${feedInfo.name}\n---\n# ${item.title}\n\n**Category:** ${feedInfo.name}\n\n[Original Article](${item.link})\n\n${item.contentSnippet || ""}`;
      
      fs.writeFileSync(filePath, content);

      if (!libraryContent.includes(fileName)) {
        newLinks += `* [${date} - [${feedInfo.name}] ${item.title}](./${fileName})\n`;
      }
    }

    // 3. 将新文章列表插入到欢迎语之后
    const headerEnd = libraryContent.indexOf('\n\n') + 2;
    const updatedLibrary = libraryContent.slice(0, headerEnd) + newLinks + libraryContent.slice(headerEnd);
    
    fs.writeFileSync(libraryPath, updatedLibrary);
    console.log('Diversified library updated successfully!');

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
