/* ===== 博客文章元数据 ===== */
const BLOG_POSTS = [
  {
    title: "我的第一篇博客",
    date: "2026-05-20",
    excerpt: "研究生阶段的学习记录由此开始，关于为什么要写博客以及会写些什么。",
    tags: ["思考"],
    url: "blog/post.html?post=第一篇博客.md"
  },
  {
    title: "李宏毅机器学习课程总结（一、二）",
    date: "2026-05-30",
    excerpt: "结合 LeeDL Tutorial 学习，梳理机器学习基础概念与实践方法论。",
    tags: ["教程", "思考"],
    url: "blog/post.html?post=机器学习一.md"
  },
  {
    title: "李宏毅机器学习课程总结（三、四）",
    date: "2026-05-30",
    excerpt: "深度学习基础与卷积神经网络，从局部极小值、鞍点、批量归一化到 CNN 核心思想。",
    tags: ["教程", "思考"],
    url: "blog/post.html?post=机器学习二.md"
  },
  {
    title: "李宏毅机器学习课程总结（五、六）",
    date: "2026-06-07",
    excerpt: "循环神经网络 RNN 与序列数据处理，包含独热编码与词嵌入的入门理解。",
    tags: ["教程", "思考"],
    url: "blog/post.html?post=机器学习三.md"
  },
  {
    title: "李宏毅机器学习课程总结（七、八）",
    date: "2026-06-13",
    excerpt: "Transformer 架构与自注意力机制，序列到序列模型的核心思路。",
    tags: ["教程", "思考"],
    url: "blog/post.html?post=机器学习四.md"
  },
  {
    title: ".NET程序逆向与dnSpy初试",
    date: "2026-06-13",
    excerpt: "从逆向 ELF/PE 到 .NET 文件，使用 dnSpy 分析 .NET 程序的实战记录。",
    tags: ["教程", "思考"],
    url: "blog/post.html?post=一个简单的.net程序逆向.md"
  },
  // 以后每写一篇文章，在下面追加一条即可：
  // {
  //   title: "文章标题",
  //   date: "YYYY-MM-DD",
  //   excerpt: "一句话摘要，会显示在首页卡片上。",
  //   tags: ["标签1", "标签2"],
  //   url: "blog/post.html?post=文章文件名.md"
  // },
];
