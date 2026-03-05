# GB_RtiBid_Brand-website


根据设计图，开发vue代码，包含dom和样式，
导航栏 实现点击滚动 logo的路径是@/assets/dashboard/logo.png、
英雄区 hover效果 背景图的路径是@/assets/dashboard/bg.png、
统计区 hover效果、
功能区 4个icon的路径是@/assets/dashboard/features0.png、
案例区 6个图片的路径是@/assets/dashboard/case1.png、
优势区 3个icon的路径是@/assets/dashboard/why0.png、
页脚 3个footer icon的路径是@/assets/dashboard/footerlogo2.png、
输出代码


根据设计图，开发vue代码，包含dom和样式，并且要实现响应式布局


根据设计图，开发vue代码，不要使用第三方组件库，包含dom和样式，使用less工具，并且要实现响应式布局，已768px为基准;768px以下的屏幕宽度，左右内边距为16px。768px以上的屏幕宽度，左右内边距为24px。content内容最大宽度为1280px


根据文件内容，将文案替换为数组，Article 1这类代表一个文章，每个文章包含Meta Title、Meta Description、Article Content， 还有类似What is an AI-Driven DSP?小标题，带- 改为数组


根据文件内容，将文案替换为数组，【大标题】这类代表一个文章，每个文章包含metaTitle(大标题)、metaDescription(大标题以下一段话)；  title(小标题) 、content(内容)， 生成一个数组，类似于这样

{
      "id": "Cases6",
      "metaTitle": "Westwing Grows Retargeting Revenue with RtiBid by 81% over Black Friday",
      "metaDescription": "Personalized retargeting campaigns boosted home and design brand’s market advantage during a challenging retail period.",
      "numList": [
        {
            name: "Revenue MoM",
            value: "+81%"
        },
        {
            name: "Revenue YoY",
            value: "+70%"
        }
      ],
      "articleContent": {
          "sections": [
              {
                  "title": "About the client",
                  "content": "Westwing is a home decor, design, and lifestyle platform that brings more beauty to its customers. Through three main channels—Clube, Now, and Lojas—the brand curates inspirational products from renowned names in the market, such as Le Creuset, Kitchenaid, and Luiza Perea, as well as its own brand, the Westwing Collection. In 2011, the company entered the Brazilian market as a subsidiary of the German group Westwing. The company has been working with RtiBid since 2020 to implement Deep Learning-based retargeting campaigns."
              }
          ]
      }
  }
根据设计图以及数据接口，开发vue代码，不要使用第三方组件库，包含dom和样式，使用less工具，并且要实现响应式布局，已768px为基准;768px以下的屏幕宽度，左右内边距为16px。768px以上的屏幕宽度，左右内边距为24px。content内容最大宽度为1280px