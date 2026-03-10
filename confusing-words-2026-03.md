<div align="center">
  <h1 style="color: #FF69B4; border-bottom: 2px solid #FFB6C1; padding-bottom: 10px;">
    📦 IELTS Confusing Words 
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


| 组别 | 易混淆单词及释义 (Vocabulary & Meaning) | 雅思高分例句与场景 (IELTS Example & Context) |
| :---: | :--- | :--- |
| **01** | **radical** (adj. 根本的 / 激进的; n. 激进分子)<br>**racial** (adj. 种族的)<br>**rational** (adj. 合理的 / 理性的) | To achieve **racial** equality, society needs a **rational** debate rather than **radical** reforms that might cause further division. |
| **02** | **magnificent** (adj. 宏伟的 / 壮丽的)<br>**significant** (adj. 重大的 / 显著的 / 重要的) | While the museum's **magnificent** architecture attracts tourists, its **significant** contribution to historical preservation is what truly matters. |
| **03** | **journalist** (n. 记者)<br>**journey** (n. 旅程; v. 旅行) | An investigative **journalist** often embarks on a dangerous **journey** to uncover the truth behind political corruption. |
| **04** | **magnify** (v. 放大 / 夸大)<br>**signify** (v. 表示 / 意味着) | The economic crisis tends to **magnify** existing social inequalities, which may **signify** a need for urgent policy changes. |
| **05** | **objective** (adj. 客观的; n. 目标)<br>**subjective** (adj. 主观的) | Scientific research must remain **objective**, although the interpretation of data can sometimes be influenced by **subjective** bias. |
| **06** | **latter** (adj. / n. 后者的 / 后半期的)<br>**later** (adv. 后来 / 稍后; adj. 更晚的) | Both urban expansion and rural development are essential; however, the **latter** is often neglected until **later** stages of national planning. |
| **07** | **qualify** (v. 使具备资格 / 限制)<br>**quantify** (v. 量化 / 确定数量)<br>**quality** (n. 质量 / 品质; adj. 优质的) | It is difficult to **quantify** the **quality** of life, but having a stable job is one factor that helps individuals **qualify** for social security benefits. |
| **08** | **ceremony** (n. 仪式 / 典礼)<br>**cemetery** (n. 墓地 / 公墓) | A solemn memorial **ceremony** was held at the national **cemetery** to honor those who fought for their country. |
| **09** | **aboard** (adv. / prep. 在船、机、车上)<br>**abroad** (adv. 在国外 / 到海外) | Passengers **aboard** the international flight were excited about their opportunities to study and work **abroad**. |
| **10** | **board** (n. 木板 / 董事会 / 膳食; v. 登机/船)<br>**broad** (adj. 宽阔的 / 广泛的) | The school **board** decided to implement a **broad** curriculum that covers both arts and sciences. |
| **11** | **deed** (n. 行为 / 契约)<br>**deem** (v. 认为 / 视作) | Many people **deem** volunteering to be a noble **deed** that fosters a sense of community responsibility. |
| **12** | **abolish** (v. 废止 / 废除)<br>**polish** (v. 抛光 / 擦亮 / 润色; n. 光泽) | The government plans to **abolish** outdated trade barriers to **polish** its image as a leader in free trade.<br>*(场景:政府政策与国际贸易)* |
| **13** | **stretch** (v. / n. 拉长 / 延伸 / 伸展)<br>**sketch** (n. 素描 / 梗概; v. 概述) | Before developers **stretch** the city limits further, they must provide a detailed **sketch** of the proposed infrastructure. |
| **14** | **scratch** (v. / n. 抓 / 挠 / 划痕)<br>**snatch** (v. / n. 夺取 / 一把抓起) | In the competitive job market, some candidates have to start from **scratch**, while others **snatch** every opportunity to advance their careers. |
| **15** | **delay** (v. / n. 延误 / 推迟)<br>**defy** (v. 违抗 / 蔑视)<br>**decay** (v. / n. 腐烂 / 衰退)<br>**relay** (v. 传递 / 转发; n. 接力)<br>**rely** (v. 依靠 / 依赖) | Although scientists **rely** on modern technology to **relay** urgent warnings about environmental **decay**, governments often **delay** taking action and **defy** international climate agreements.<br>*(场景:环境保护与政府决策)* |
| **16** | **figure** (n. 数字 / 人物 / 图形; v. 计算)<br>**feature** (n. 特征 / 特色; v. 以...为特色) | A key **feature** of the new economic report is that the unemployment **figure** has reached an unprecedented low. |
| **17** | **fit** (adj. 适合的; v. 合适; n. 合身)<br>**kit** (n. 成套工具 / 装备)<br>**wit** (n. 机智 / 风趣 / 智力)<br>**wet** (adj. 潮湿的; v. 弄湿) | When trying to survive in a **wet** rainforest environment, one must rely on their **wit** to make the best use of the survival **kit** and find protective clothing that can **fit** the extreme conditions. |
| **18** | **field** (n. 田野 / 领域 / 场地)<br>**yield** (v. 出产 / 屈服; n. 产量) | Recent advancements in the agricultural **field** have enabled crops to **yield** more grain without requiring additional land. |
| **19** | **incentive** (n. 激励 / 动机)<br>**intensive** (adj. 密集的 / 强化的) | An **intensive** training program alone is not enough; companies must also provide a financial **incentive** to retain their top talent. |
| **20** | **update** (v. / n. 更新 / 最新消息)<br>**upgrade** (v. / n. 升级 / 提升) | To **update** the city's outdated transportation network, the local council has decided to significantly **upgrade** the entire railway system. |
| **21** | **accept** (v. 接受 / 认可)<br>**concept** (n. 概念 / 观念)<br>**except** (prep. / conj. 除...之外) | Most scientists **accept** the core **concept** of climate change, **except** for a few skeptics who continue to demand more empirical evidence. |
| **22** | **defend** (v. 防御 / 辩护)<br>**offend** (v. 冒犯 / 触犯)<br>**depend** (v. 取决于 / 依赖)<br>**expend** (v. 花费 / 耗尽) | How effectively a nation can **defend** its borders will largely **depend** on how much of its budget it is willing to **expend** on advanced military technology, though overly aggressive policies might **offend** neighboring countries. |
| **23** | **embarrass** (v. 使尴尬 / 使局促不安)<br>**embrace** (v. / n. 拥抱 / 欣然接受) | Rather than allowing past failures to **embarrass** them, successful individuals tend to **embrace** challenges as valuable opportunities for personal growth. |
| **24** | **fierce** (adj. 激烈的 / 凶猛的)<br>**pierce** (v. 刺入 / 穿透) | The eagle, known for its **fierce** nature, possesses sharp talons that can easily **pierce** the skin of its prey. |
| **25** | **elite** (n. 精英; adj. 精英的)<br>**elicit** (v. 引出 / 诱出)<br>**exile** (n. / v. 流放 / 充军) | The decision to **exile** the controversial leader failed to **elicit** fear among the public; instead, it strengthened the resolve of the intellectual **elite**. |
| **26** | **behave** (v. 表现 / 运转)<br>**behalf** (n. 代表 / 利益) | The lawyer, speaking on **behalf** of the environmental organization, urged the corporations to **behave** more responsibly regarding their carbon footprint. |
| **27** | **category** (n. 种类 / 范畴)<br>**catalog** (n. 目录; v. 编目录) | When organizing an extensive library **catalog**, librarians must carefully classify each ancient manuscript into the appropriate historical **category**. |
| **28** | **deduce** (v. 推断 / 演绎)<br>**induce** (v. 引诱 / 导致 / 引起)<br>**reduce** (v. 减少 / 缩小)<br>**deduct** (v. 扣除 / 减去) | To **reduce** the margin of error, researchers must **deduct** anomalous data; only then can they **deduce** valid conclusions rather than **induce** a false sense of certainty among the public. |
| **29** | **hire** (v. / n. 雇用 / 租用)<br>**heir** (n. 继承人 / 嗣子) | The wealthy **heir** decided to **hire** a team of financial advisors to manage the family's philanthropic foundation. |
| **30** | **eccentric** (adj. 古怪的; n. 古怪的人)<br>**essence** (n. 本质 / 精华 / 香精) | Although the artist's behavior was considered **eccentric** by his peers, the true **essence** of his work profoundly influenced modern graphic design. |
| **31** | **bare** (adj. 赤裸的 / 仅仅的)<br>**rare** (adj. 罕见的 / 半熟的)<br>**mere** (adj. 仅仅的 / 只不过的) | In the **bare** landscapes of the Arctic, the survival of **rare** species relies on complex evolutionary adaptations rather than **mere** chance. |
| **32** | **eliminate** (v. 消除 / 淘汰 / 剔除)<br>**illuminate** (v. 照亮 / 阐明 / 启迪) | The primary goal of this educational initiative is to **illuminate** the root causes of poverty and ultimately **eliminate** social inequality. |
| **33** | **decline** (v. / n. 下降 / 衰退 / 婉拒)<br>**incline** (v. 倾向于 / 倾斜; n. 斜坡) | As reading habits continue to **decline** among adolescents, educators **incline** to incorporate more interactive digital media into the curriculum. |
| **34** | **dedicate** (v. 致力 / 献身)<br>**delicate** (adj. 微妙的 / 精致的)<br>**dictate** (v. / n. 口述 / 命令)<br>**indicate** (v. 表明 / 指示 / 象征) | Environmentalists who **dedicate** themselves to protecting **delicate** marine ecosystems emphasize that funding should not **dictate** research outcomes, as current data clearly **indicate** a need for immediate conservation efforts. |
| **35** | **through** (prep. / adv. 穿过 / 通过)<br>**thorough** (adj. 彻底的 / 全面的)<br>**throughout** (prep. / adv. 遍及 / 贯穿)<br>**thoughtful** (adj. 体贴的 / 深思的)<br>**thought** (n. 想法 / 思想) | **Throughout** the historical period, scholars conducted a **thorough** analysis **through** examining classic literature, reflecting a **thoughtful** approach that challenged traditional **thought**. |
| **36** | **though** (conj. / adv. 尽管 / 虽然)<br>**rough** (adj. 粗糙的 / 艰难的)<br>**tough** (adj. 强硬的 / 艰苦的) | **Though** the initial transition to renewable energy may be a **rough** process, governments must implement **tough** regulations to ensure long-term sustainability. |
| **37** | **define** (v. 下定义 / 明确)<br>**confine** (v. 限制 / 禁闭)<br>**refine** (v. 提炼 / 完善 / 改进) | Instead of allowing rigid standardized tests to **confine** their potential, students should be encouraged to **refine** their practical skills and redefine how society attempts to **define** academic success. |
| **38** | **incident** (n. 事件 / 事变)<br>**incidence** (n. 发生率 / 影响范围) | Following a severe **incident** of water contamination, authorities conducted a nationwide survey to monitor the **incidence** of waterborne diseases. |
| **39** | **illustrate** (vt. 说明 / 阐明 / 画图)<br>**illusion** (n. 错觉 / 幻想 / 错误观念) | While the data **illustrate** a clear warming trend, the idea that technology alone can fix it is a dangerous **illusion**. |
| **40** | **manipulate** (vt. 操纵 / 熟练操作)<br>**manufacture** (vt. 大量制造 / 捏造) | The company tried to **manipulate** public opinion to cover up the pollution caused by how they **manufacture** their products. |
| **41** | **giant** (adj. 巨大的; n. 巨人)<br>**grant** (vt. 拨款 / 准予; n. 补助金) | The tech **giant** received a substantial government **grant** to further develop renewable energy solutions. |
| **42** | **particle** (n. 微粒 / 粒子)<br>**partial** (adj. 部分的 / 偏袒的)<br>**particular** (adj. 特定的 / 挑剔的) | The scientist was **partial** to a **particular** theory regarding the behavior of the newly discovered **particle**. |
| **43** | **generalize** (vt. 概括 / 归纳)<br>**generate** (vt. 产生 / 引起 / 发电) | While scientists hesitate to **generalize** the findings, the new infrastructure will undoubtedly **generate** clean energy for the region. |
| **44** | **fabric** (n. 织物 / 结构 / 构造)<br>**fabricate** (vt. 捏造 / 编造 / 制造) | The suspect attempted to **fabricate** an alibi, but the concrete evidence tore apart the very **fabric** of his lies. |
| **45** | **factor** (n. 因素 / 要素)<br>**factory** (n. 工厂) | The closure of the local **factory** was a primary **factor** contributing to the town's economic decline. |
| **46** | **calculate** (vt. 计算 / 预测)<br>**circulate** (v. 循环 / 流传 / 散布) | Economists **calculate** that if the negative rumors continue to **circulate**, it could trigger a severe market crash. |
| **47** | **date** (n. 日期 / 时代; v. 标日期)<br>**data** (n. 资料 / 数据) | Researchers must strictly record the **date** of the experiment to ensure the integrity of the collected **data**. |
| **48** | **habitat** (n. 栖息地 / 生长地)<br>**inhabitant** (n. 居民 / 栖居动物) | The destruction of the natural **habitat** severely threatens the survival of every vulnerable **inhabitant** in the rainforest. |
| **49** | **abide** (vi. 遵守 / 逗留)<br>**aside** (adv. 在旁边 / 除...之外) | Leaving personal preferences **aside**, all citizens must strictly **abide** by the newly implemented environmental laws. |
| **50** | **fascinate** (v. 使着迷 / 迷住)<br>**fantastic** (adj. 极好的 / 奇异的) | The **fantastic** advancements in artificial intelligence continue to **fascinate** academic researchers worldwide. |
| **51** | **decisive** (adj. 决定性的 / 果断的)<br>**deceive** (v. 欺骗 / 误导) | Consumers must take **decisive** action to boycott corporations that intentionally **deceive** the public with false advertising. |
| **52** | **hamper** (vt. 妨碍 / 阻碍)<br>**hammer** (n. 锤子 / 木槌; v. 击打) | Strict budget cuts will heavily **hamper** the construction progress, forcing the manager to bring down the **hammer** on unnecessary expenses. |
| **53** | **dazzle** (v. 使目眩 / 使惊叹)<br>**puzzle** (n. 难题 / 谜; v. 迷惑)<br>**dizzy** (adj. 眩晕的 / 令人头晕目眩的) | The complexity of this economic **puzzle** might leave beginners feeling **dizzy**, but the potential profits continue to **dazzle** experienced investors. |
| **54** | **calm** (adj. 平静的 / 镇定的)<br>**palm** (n. 手掌 / 棕榈树) | The speaker remained incredibly **calm** during the intense presentation, holding the microphone firmly in the **palm** of her hand. |
| **55** | **efficient** (adj. 效率高的)<br>**sufficient** (adj. 充足的 / 足够的)<br>**effective** (adj. 有效的 / 生效的) | To be truly **effective**, a public healthcare policy must be highly **efficient** and supported by **sufficient** funding. |
| **56** | **fade** (vi. 逐渐消失 / 褪色)<br>**fake** (adj. 假的 / 伪造的; n. 赝品) | As the physical evidence begins to **fade** over time, investigators must be cautious not to rely on **fake** testimonies. |
| **57** | **acceptance** (n. 接受 / 认可)<br>**attendance** (n. 出席 / 参加) | The university's **acceptance** rate plummeted this year, although overall **attendance** at the open-day events reached a record high. |
| **58** | **definite** (adj. 确定的 / 清楚的)<br>**infinite** (adj. 无限的 / 极大的) | There is a **definite** limit to fossil fuel reserves, unlike the practically **infinite** energy provided by solar and wind power. |
| **59** | **deny** (vt. 否认 / 拒绝给予)<br>**defy** (vt. 违抗 / 蔑视 / 使成为不可能) | Despite the overwhelming evidence, some corporations continue to **deny** their responsibility for pollution and **defy** international environmental regulations. |
| **60** | **resultant** (adj. 作为结果的)<br>**redundant** (adj. 多余的)<br>**reluctant** (adj. 勉强的) | The manager was **reluctant** to dismiss the workers, but the **resultant** economic crisis made their roles **redundant**. |
| **61** | **doze** (v. 打盹儿)<br>**dose** (n. 剂量)<br>**dozen** (n. 一打 / 许多) | After taking a heavy **dose** of medicine, he began to **doze** off, ignoring the **dozen** unread emails on his desk. |
| **62** | **colonel** (n. 上校)<br>**colony** (n. 殖民地) | The ambitious **colonel** ordered his troops to establish a new military **colony** on the deserted island. |
| **63** | **notorious** (adj. 臭名昭著的)<br>**ambiguous** (adj. 模棱两可的) | The politician is **notorious** for giving **ambiguous** answers to evade public scrutiny during press conferences. |
| **64** | **desperate** (adj. 绝望的)<br>**separate** (adj. 单独的 / 分开的) | The **desperate** refugees were forced to live in **separate** camps after crossing the national border. |
| **65** | **incentive** (n. 激励 / 动机)<br>**intensive** (adj. 强化的 / 密集的) | The government provided a financial **incentive** for local farmers to abandon resource-**intensive** agricultural practices. |
| **66** | **plural** (adj. 复数的)<br>**dual** (adj. 双的) | In modern globalized societies, many citizens hold a **dual** nationality and embrace a **plural**istic culture. |
| **67** | **malignant** (adj. 恶性的 / 恶意的)<br>**magnitude** (n. 巨大 / 重要性) | It is difficult to comprehend the full **magnitude** of the crisis caused by the **malignant** tumor of systemic corruption. |
| **68** | **merchandise** (n. 商品 / 推销)<br>**mechanism** (n. 方法 / 途径) | The retail company established a strict monitoring **mechanism** to ensure the quality of their imported **merchandise**. |
| **69** | **persist** (v. 执着 / 坚持)<br>**resist** (v. 抵抗) | If consumers **persist** in buying fast fashion, it will be increasingly harder to **resist** the negative environmental impacts. |
| **70** | **minority** (n. 少数民族 / 少数)<br>**minor** (adj. 较小的 / 次要的) | Although the proposed policy change may seem **minor**, it significantly affects the daily lives of the ethnic **minority**. |
| **71** | **unanimous** (adj. 一致通过的)<br>**anonymous** (adj. 匿名的) | The ethical committee reached a **unanimous** decision to strictly protect the identity of the **anonymous** whistleblower. |
| **72** | **publicity** (n. 关注 / 宣传)<br>**public** (n. 大众的 / 公众) | The environmental campaign gained massive media **publicity** after urging the general **public** to donate to the cause. |
| **73** | **grand** (adj. 宏大的)<br>**grant** (v. 批准 / 授予) | The city council decided to **grant** the developers permission for the construction of a **grand** new national theater. |
| **74** | **perplex** (v. 使困惑)<br>**complex** (adj. 复杂的) | The highly **complex** corporate tax regulations often **perplex** small business owners, forcing them to hire consultants. |
| **75** | **underline** (v. 强调 / 突出)<br>**underlying** (adj. 深层的)<br>**underlie** (v. 构成...基础) | The report serves to **underline** the fact that severe economic inequalities **underlie** the **underlying** social unrest in the region. |
| **76** | **bend** (v. 弯曲)<br>**mend** (v. 修理 / 愈合) | It is often easier for corrupt officials to **bend** the rules than to completely **mend** a broken legal system. |
| **77** | **extension** (n. 扩大 / 延伸)<br>**extensive** (adj. 广阔的 / 广泛的) | The university announced an **extension** of its central library, which now features an **extensive** collection of historical archives. |
| **78** | **density** (n. 密度)<br>**destiny** (n. 命运) | The high population **density** in urban areas often shapes the long-term economic **destiny** of the younger generation. |
| **79** | **accord** (n. 协议)<br>**record** (n. 记载) | According to the historical **record**, the two rival nations signed a peace **accord** to permanently end the border dispute. |
| **80** | **modernization** (n. 现代化)<br>**stereotyping** (n. 模式化) | While rapid **modernization** brings economic growth, it also risks cultural **stereotyping** in mainstream media representations. |
| **81** | **specification** (n. 规格)<br>**specify** (v. 具体指明) | The chief architect must clearly **specify** the building materials to ensure they meet strict safety **specification**s. |
| **82** | **organism** (n. 生物)<br>**organize** (v. 组织 / 筹备) | Researchers need to carefully **organize** their laboratory equipment before studying the newly discovered marine **organism**. |
| **83** | **access** (n. 进入 / 访问)<br>**assess** (v. 评估) | Before granting public **access** to the heritage site, authorities must rigorously **assess** the potential environmental impact. |
| **84** | **hire** (v. 租用 / 雇佣)<br>**heir** (n. 继承人) | The wealthy businessman decided to **hire** a private detective to search for his long-lost legitimate **heir**. |
| **85** | **reclaim** (v. 取回 / 开垦)<br>**exclaim** (v. 呼喊) | The environmentalists **exclaim** that urgent and decisive measures are needed to **reclaim** the severely polluted coastal areas. |
| **86** | **wander** (v. 闲逛 / 漫步)<br>**wonder** (v. 想知道 / 惊讶) | As many tourists carelessly **wander** through the ancient ruins, historians begin to **wonder** about the long-term impact on heritage preservation. |
| **87** | **gender** (n. 性别)<br>**tender** (adj. 温柔的)<br>**render** (v. 给予 / 渲染) | The charity aims to **render** assistance to vulnerable groups, focusing on providing **tender** care to victims of **gender** discrimination. |
| **88** | **patch** (n. 小块 / 斑点 / 补丁)<br>**pitch** (n. 球场 / 音调) | The local community transformed a barren **patch** of wasteland into a brand new football **pitch** for the neighborhood children. |
| **89** | **conjunction** (n. 结合)<br>**junction** (n. 交汇点) | The new commercial center was deliberately built at the **junction** of two major highways, working in **conjunction** with the city's economic expansion plan. |
| **90** | **proposition** (n. 提议 / 主张)<br>**disposition** (n. 性情 / 倾向 / 布置) | The manager's naturally calm **disposition** helped him present the risky business **proposition** effectively to the board of directors. |
| **91** | **situate** (v. 使坐落于)<br>**statute** (n. 法令 / 法规) | According to the newly implemented environmental **statute**, property developers cannot **situate** industrial factories near residential zones. |
| **92** | **detain** (v. 拘留 / 扣留)<br>**retain** (v. 保持 / 保留) | While the police have the authority to **detain** suspects, the company is struggling to **retain** its highly skilled employees. |
| **93** | **motive** (n. 动机)<br>**incentive** (n. 激励 / 动机) | While financial reward acts as a strong **incentive**, the primary **motive** for many medical researchers is to improve global public health. |
| **94** | **inspect** (v. 检查)<br>**suspect** (v. 怀疑; n. 嫌疑人) | The authorities **suspect** that the factory is secretly violating safety regulations, prompting them to thoroughly **inspect** the entire premises. |
| **95** | **serial** (n. 连续剧; adj. 连续的)<br>**series** (n. 一系列) | The television network launched a gripping new **serial** drama as part of their broader educational documentary **series**. |
| **96** | **purse** (n. 钱包)<br>**pursue** (v. 追求)<br>**pursuit** (n. 追求) | To successfully **pursue** a career in the arts, one must often balance the relentless **pursuit** of passion with the harsh reality of an empty **purse**. |
| **97** | **cost** (n. 费用 / 成本)<br>**cast** (v. 投 / 掷) | The incredibly high living **cost** in major urban centers has **cast** a heavy shadow over the future prospects of many young graduates. |
| **98** | **lane** (n. 小路 / 车道)<br>**lean** (v. 倚靠; adj. 精瘦的) | The government decided to add a designated bicycle **lane** to encourage environmentally friendly commutes and help citizens stay **lean**. |
| **99** | **republican** (n. 共和主义者)<br>**public** (n. 公众; adj. 公众的) | The **republican** candidate enthusiastically promised to increase funding for **public** transportation during his election campaign. |
| **100** | **quit** (v. 辞去 / 放弃)<br>**quiet** (adj. 安静的)<br>**quite** (adv. 相当) | It is **quite** difficult to find a perfectly **quiet** environment to study after one makes the tough decision to **quit** a stable full-time job. |
| **101** | **refuge** (n. 避难所)<br>**refugee** (n. 难民) | The international organization urgently established a temporary **refuge** to provide shelter and medical supplies for the displaced **refugee** population. |
| **102** | **ministry** (n. 部)<br>**mystery** (n. 谜) | The sudden and unexplained resignation of the head of the finance **ministry** remains a profound **mystery** to the general public. |
| **103** | **tissue** (n. 纸巾 / 组织)<br>**issue** (n. 议题 / 问题) | The debate over the ethical use of human biological **tissue** in scientific research has become a highly controversial social **issue**. |
| **104** | **sack** (n. 麻袋; v. 解雇)<br>**sake** (n. 目的 / 缘故)<br>**stake** (n. 股份 / 赌注) | For the **sake** of the company's future, the board decided to **sack** the underperforming manager, knowing that a massive financial **stake** was involved. |
| **105** | **magnificent** (adj. 宏伟的)<br>**malignant** (adj. 恶性的) | The patient unfortunately missed the opportunity to admire the **magnificent** mountain scenery because he was diagnosed with a **malignant** tumor. |
| **106** | **beat** (v. 打败)<br>**bet** (v. 打赌 / 下注) | Ambitious investors often **bet** heavily on emerging technologies, hoping these innovations will eventually **beat** traditional market competitors. |
| **107** | **geology** (n. 地质学)<br>**geometry** (n. 几何学)<br>**geography** (n. 地理学) | The comprehensive new curriculum requires students to master the basic concepts of **geometry**, while also exploring local **geography** and **geology**. |
| **108** | **puff** (v. 吸 / 喷出)<br>**buffer** (n. 缓冲物) | The city council created a dense green **buffer** zone around the industrial park to prevent a **puff** of toxic smoke from reaching residential areas. |
| **109** | **sanction** (n. 制裁 / 许可)<br>**transaction** (n. 交易) | The international community decided to impose severe economic **sanction**s, strictly monitoring every single cross-border financial **transaction**. |
| **110** | **altitude** (n. 海拔高度)<br>**latitude** (n. 纬度 / 余地 / 自由)<br>**longitude** (n. 经度) | The aircraft climbed to a higher **altitude** to avoid the storm, slightly adjusting its **latitude** and **longitude** on the navigation map. |
| **111** | **pathetic** (adj. 可怜的)<br>**sympathetic** (adj. 同情的) | The international community was deeply **sympathetic** to the refugees, whose **pathetic** living conditions were widely broadcasted. |
| **112** | **heel** (n. 脚后跟)<br>**heal** (v. 治愈) | The sports doctor warned the athlete that the severe injury to his **heel** would take several months to completely **heal**. |
| **113** | **screw** (n. 螺丝; v. 拧紧)<br>**shrewd** (adj. 精明的) | The **shrewd** business executive knew exactly how to tighten the **screw** on his competitors during the intense market negotiations. |
| **114** | **ripe** (adj. 成熟的)<br>**reap** (v. 收获) | Agricultural experts advise farmers to carefully judge when the crops are fully **ripe** in order to **reap** a bountiful harvest. |
| **115** | **despise** (v. 鄙视)<br>**despite** (prep. 尽管)<br>**spite** (n. 怨恨) | **Despite** facing numerous unfair criticisms, she refused to let her opponents **despise** her efforts or harbor any personal **spite** towards them. |
| **116** | **profit** (n. 利润)<br>**profile** (n. 简介 / 轮廓) | The tech company managed to generate a substantial annual **profit**, which significantly boosted its public **profile** among global investors. |
| **117** | **tomb** (n. 坟墓)<br>**bomb** (n. 炸弹) | The archaeological team was shocked to discover an unexploded World War II **bomb** buried deeply near the ancient emperor's **tomb**. |
| **118** | **lapse** (n. 疏忽 / 过失)<br>**collapse** (v./n. 倒塌 / 崩溃) | A sudden **lapse** in risk management by the executive board eventually led to the complete financial **collapse** of the corporation. |
| **119** | **resolution** (n. 决议 / 决心)<br>**evolution** (n. 进化 / 演变) | The environmental committee unanimously passed a **resolution** to fund further research into the biological **evolution** of endangered species. |
| **120** | **ecology** (n. 生态学)<br>**economics** (n. 经济学) | Finding a sustainable balance between preserving local **ecology** and promoting national **economics** is a major challenge for developing countries. |
| **121** | **apart** (adv. 相距 / 分离)<br>**depart** (v. 离开 / 启程) | Shortly after the two childhood friends drifted **apart**, one decided to **depart** for a new life overseas. |
| **122** | **enquire / inquire** (v. 询问 / 打听)<br>**require** (v. 需要) | Customers frequently **enquire** about the new software updates, which **require** a stable high-speed internet connection to install successfully. |
| **123** | **resemblance** (n. 相似)<br>**assembly** (n. 议会 / 组装) | There is a striking **resemblance** between the newly manufactured parts and the original components used in the final vehicle **assembly** line. |
| **124** | **evade** (v. 躲避)<br>**fade** (v. 逐渐消失) | As public memory of the financial scandal began to **fade**, the corrupt official continued to **evade** capture by the authorities. |
| **125** | **fixture** (n. 固定设施)<br>**fix** (v. 修理 / 使固定) | The landlord contractually promised to **fix** the broken plumbing and replace the outdated lighting **fixture** in the apartment. |
| **126** | **sensation** (n. 知觉 / 轰动)<br>**sentiment** (n. 情绪 / 观点) | The sudden stock market crash caused a widespread **sensation** of panic, heavily influencing consumer **sentiment** for months. |
| **127** | **cruel** (adj. 残酷的)<br>**hurl** (v. 猛投)<br>**curl** (v. 卷曲) | The **cruel** hurricane began to **hurl** massive debris across the street, causing the metal street signs to **curl** under the immense wind pressure. |
| **128** | **edition** (n. 版本)<br>**edit** (v. 编辑) | The senior author had to meticulously **edit** the manuscript before the academic publishing house released the final printed **edition**. |
| **129** | **pint** (n. 品脱)<br>**paint** (n. 油漆; v. 画) | The dedicated artist consumed a **pint** of strong coffee while using vibrant colors of **paint** to finish her masterpiece overnight. |
| **130** | **branch** (n. 树枝 / 分支)<br>**batch** (n. 一批) | The local bank **branch** announced that a new **batch** of low-interest loans would be available to small businesses next quarter. |
| **131** | **superiority** (n. 优势)<br>**superior** (adj. 更好的) | The tech company maintained its market **superiority** by consistently developing **superior** electronic devices. |
| **132** | **flare** (v./n. 烧旺)<br>**flame** (n. 火焰) | The sudden **flare** of the intense **flame** in the chemistry laboratory triggered the emergency alarm. |
| **133** | **saw** (n. 锯 / v. 锯)<br>**sew** (v. 缝) | The traditional craftsman used a hand **saw** to shape the wood before proceeding to **sew** the leather upholstery. |
| **134** | **resolute** (adj. 坚决的)<br>**revolt** (v./n. 反叛) | The government took **resolute** administrative action to peacefully suppress the unexpected civilian **revolt**. |
| **135** | **coarse** (adj. 粗糙的)<br>**chaos** (n. 混乱) | The sudden transition from a **coarse** agricultural system to an industrialized one initially caused economic **chaos**. |
| **136** | **hawk** (v. 叫卖 / n. 鹰)<br>**howl** (v./n. 嚎叫) | While street vendors would loudly **hawk** their goods in the market, wild wolves would **howl** in the distant mountains. |
| **137** | **troublesome** (adj. 令人烦恼的)<br>**terrible** (adj. 可怕的 / 糟糕的) | The newly updated software was incredibly **troublesome**, resulting in a **terrible** user experience for online shoppers. |
| **138** | **repression** (n. 压制)<br>**expression** (n. 表达) | The violent **repression** of peaceful protests completely stifled the citizens' fundamental freedom of **expression**. |
| **139** | **transition** (n. 过渡)<br>**transmit** (v. 传递) | During the **transition** to renewable energy, the national grid must reliably **transmit** electricity from remote solar farms. |
| **140** | **plunge** (v. 暴跌)<br>**plug** (n./v. 插头 / 塞子)<br>**plough** (n./v. 犁) | Following the market **plunge**, the desperate farmer had to **plug** the leaks in his barn and sell his only **plough** to survive. |
| **141** | **stack** (n./v. 一堆)<br>**sack** (n. 麻袋 / v. 解雇) | The warehouse workers organized a massive **stack** of documents while loading a heavy **sack** of grain onto the truck. |
| **142** | **carve** (v. 雕刻)<br>**curve** (n. 曲线) | Ancient artisans would carefully **carve** intricate patterns that perfectly followed the natural **curve** of the marble. |
| **143** | **width** (n. 宽度)<br>**stitch** (n./v. 缝) | The experienced tailor carefully measured the **width** of the silk fabric before making the first flawless **stitch**. |
| **144** | **racket** (n. 喧哗 / 球拍 / 勒索)<br>**bracket** (n. 括号 / 等级) | To afford a professional-grade tennis **racket**, the young athlete needed sponsorships from a higher corporate income **bracket**. |
| **145** | **migrate** (v. 迁徙)<br>**merge** (v. 合并) | As diverse populations **migrate** to urban centers, different cultural traditions often **merge** into a unified society. |
| **146** | **dip** (v. 蘸 / 下降)<br>**drip** (v./n. 滴) | As nighttime temperatures begin to **dip** below freezing, water from the melting snow will slowly **drip** from the roof. |
| **147** | **latent** (adj. 潜在的)<br>**lantern** (n. 灯笼) | The psychologist explained that **latent** childhood memories can sometimes be triggered by a simple visual cue, like a glowing **lantern**. |
| **148** | **liable** (adj. 有责任的 / 可能做...的)<br>**viable** (adj. 可行的) | A business model that is heavily **liable** for severe environmental damage is no longer considered economically **viable**. |
| **149** | **quantity** (n. 数量)<br>**quality** (n. 质量) | In modern manufacturing, maintaining high product **quality** is just as important as producing a massive **quantity** of goods. |
| **150** | **intense** (adj. 强烈的)<br>**intensive** (adj. 密集的 / 强化的) | The **intense** financial pressure from the board forced the CEO to undertake an **intensive** corporate management course. |
| **151** | **status** (n. 地位)<br>**statue** (n. 雕像)<br>**statute** (n. 法规)<br>**situate** (v. 坐落于) | The mayor decided to **situate** the historical **statue** in the city center to elevate its cultural **status**, ignoring the local zoning **statute**. |
| **152** | **limp** (adj. 疲软的 / v. 跛行)<br>**lame** (adj. 瘸的 / 站不住脚的) | The struggling company's stock performance was rather **limp**, largely due to a series of **lame** and uncreative marketing campaigns. |
| **153** | **raid** (n./v. 突然袭击)<br>**rapid** (adj. 迅速的) | The authorities conducted a sudden overnight **raid** in response to the **rapid** increase in cybercrime across the financial district. |
| **154** | **arch** (n. 拱门)<br>**torch** (n. 火把) | The ancient stone **arch** was beautifully illuminated by the flickering light of a single **torch**. |
| **155** | **linear** (adj. 线性的)<br>**liner** (n. 邮轮) | The technological development of the luxury ocean **liner** did not follow a simple **linear** progression. |
| **156** | **alleviate** (v. 减轻)<br>**deviate** (v. 偏离) | To **alleviate** the severe traffic congestion, the city council decided to **deviate** from their original urban planning strategy. |
| **157** | **quantitative** (adj. 数量的)<br>**qualitative** (adj. 质量的 / 定性的) | The academic research methodology combines rigorous **quantitative** data analysis with in-depth **qualitative** interviews. |
| **158** | **bleak** (adj. 荒凉的 / 黯淡的)<br>**slack** (adj. 松弛的)<br>**break** (v. 破 / 裂) | Despite the **bleak** economic forecast, the company refused to cut any **slack** in production or **break** their commitment to quality. |
| **159** | **invasion** (n. 入侵)<br>**delusion** (n. 错觉 / 幻想) | The dictator's belief that the military **invasion** would be welcomed by the local citizens was a complete **delusion**. |
| **160** | **flow** (n./v. 流动)<br>**follow** (v. 跟随) | The international **flow** of investment capital tends to closely **follow** the latest emerging market trends. |
| **161** | **fascinate** (v. 使着迷)<br>**fantasy** (n. 幻想) | The idea of colonizing Mars continues to **fascinate** scientists, blurring the line between reality and science fiction **fantasy**. |
| **162** | **cordial** (adj. 热情友好的)<br>**cardinal** (adj. 基本的 / 最重要的) | Despite their **cordial** diplomatic relationship, the two nations strongly disagreed on the **cardinal** principles of the trade agreement. |
| **163** | **clasp** (v. 握紧)<br>**collapse** (v./n. 倒塌 / 崩溃) | He managed to firmly **clasp** the safety rope just moments before the old suspension bridge began to **collapse**. |
| **164** | **aboard** (adv./prep. 在船上 / 飞机上)<br>**abroad** (adv. 在国外) | Many ambitious students studying **abroad** eventually find themselves **aboard** international flights returning home to contribute to their countries. |
| **165** | **infant** (n. 婴儿)<br>**faint** (adj. 微弱的 / 模糊的; v. 晕倒) | The experienced pediatrician was able to detect a very **faint** heartbeat when examining the premature **infant**. |
| **166** | **retreat** (v./n. 撤退)<br>**treat** (v. 对待 / 治疗) | Environmentalists argue that we cannot simply **retreat** from global warming; instead, we must **treat** it as an urgent global crisis. |
| **167** | **property** (n. 财产 / 房地产)<br>**proper** (adj. 恰当的) | To protect valuable intellectual **property**, the tech company must ensure that all **proper** legal procedures are strictly followed. |
| **168** | **tumble** (v. 跌倒 / 暴跌)<br>**stumble** (v. 踉跄 / 结巴) | The sudden economic downturn caused the national currency to **tumble**, making many small businesses **stumble** towards bankruptcy. |
| **169** | **reassure** (v. 使安心)<br>**ensure** (v. 确保) | The government urgently addressed the public to **reassure** citizens that they would **ensure** a steady supply of essential medical resources. |
| **170** | **linger** (v. 逗留 / 徘徊)<br>**liner** (n. 邮轮) | Many tourists prefer to **linger** on the observation deck of the luxury **liner** to enjoy the stunning ocean sunset. |
| **171** | **blow** (v. 吹 / 猛击)<br>**glow** (v./n. 发出微光) | As the freezing winter wind began to **blow**, the warm **glow** of the campfire provided immense psychological comfort to the hikers. |
| **172** | **verge** (n. 路边 / 边缘)<br>**merge** (v. 合并) | The struggling tech startup was on the **verge** of bankruptcy before management decided to **merge** with a larger international competitor. |
| **173** | **prosecute** (v. 起诉)<br>**execute** (v. 执行 / 处决) | The international court has the legal authority to **prosecute** war criminals and **execute** justice on behalf of the victims. |
| **174** | **present** (adj. 目前的; n. 礼物; v. 呈现)<br>**decent** (adj. 得体的 / 相当好的) | The **present** generation must take immediate action to leave a **decent** living environment for future descendants. |
