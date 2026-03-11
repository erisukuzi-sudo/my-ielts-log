    const indexFilePath = 'reading.md';
    if (fs.existsSync(indexFilePath)) {
      let indexContent = fs.readFileSync(indexFilePath, 'utf8');
      
      // 定义插入的起始和结束标记
      const startTag = '';
      const endTag = '';

      if (indexContent.includes(startTag) && indexContent.includes(endTag)) {
        const parts = indexContent.split(startTag);
        const secondPart = parts[1].split(endTag);
        
        // 重新组装内容，把新链接放在两个标记之间
        const newContent = parts[0] + startTag + "\n" + newLinks + "\n" + endTag + secondPart[1];
        
        fs.writeFileSync(indexFilePath, newContent);
        console.log('Successfully nested links in reading.md');
      }
    }
