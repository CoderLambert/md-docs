import { defineConfig } from 'vitepress'
import path from "path";

const sideBarFiles = [
  "index.md",
  "part1.md",
  "ch1.md",
  "ch2.md",
  "part2.md",
  "ch3.md",
  "ch4.md",
  "ch5.md",
  "ch6.md",
  "part3.md",
  "ch7.md",
  "ch8.md",
  "ch9.md",
  "ch10.md",
  "ch11.md",
  "part4.md",
  "ch12.md",
  "ch13.md",
  "ch14.md",
  "part5.md",
  "ch15.md",
  "ch16.md",
  "ch17.md",
  "ch18.md",
  "ch19.md",
  "ch20.md",
  "ch21.md",
  "ch22.md",
  "ch23.md",
  "ch24.md",
  "ch25.md",
  "ch26.md",
  "ch27.md",
  "ch28.md",
  "ch29.md",
  "part6.md",
  "ch30.md",
  "ch31.md",
  "ch32.md",
  "ch33.md",
  "ch34.md",
  "afterword.md"
];

const mdFiles = sideBarFiles.filter((file) => path.extname(file) === ".md").map((file) => {
  return { text: file.replace(".md", ""), link: `/${file}` };
});

console.log(mdFiles);
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "架构整洁之道",
  description: "vitepress 线上阅读构建",
  srcDir: 'docs',
  base: "/md-docs/",
  outDir: 'dist',
  themeConfig: {
    
    aside: false,
    search: {
      provider: 'local'
    },
    sidebar: mdFiles,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CoderLambert/md-docs' }
    ],
    docFooter: {
      prev: '上一章',
      next: '下一章'
    },
    externalLinkIcon: true,
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
