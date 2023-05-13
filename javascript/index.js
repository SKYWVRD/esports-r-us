const newsSection = document.getElementById("latest-news");
console.log(newsSection)

function generateLatestNews() {
  for (let i = 0; i < 6; i++) {
    const newsItemNode = document.createElement("div");
    newsItemNode.className = "news-item";
    const imageNode = document.createElement("div");
    imageNode.className = "news-image";
    const newsTextNode = document.createElement("div");
    newsTextNode.className = "news-text";
    const headlineNode = document.createElement("div");
    headlineNode.className = "news-headline";
    const summaryNode = document.createElement("div");
    summaryNode.className = "news-summary";
    newsItemNode.appendChild(imageNode);
    newsTextNode.appendChild(headlineNode);
    newsTextNode.appendChild(summaryNode)
    newsItemNode.appendChild(newsTextNode);
    newsSection.appendChild(newsItemNode);
    console.log("Added")
  }
}
