const newsUrl =
  "https://esports-detect.p.rapidapi.com/news-events?offset=0&limit=50&event_id=eq.133421";

const newsOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "232eb32b16msh66687038e870571p1d8e7fjsnf498f3b96a91",
    "X-RapidAPI-Host": "esports-detect.p.rapidapi.com",
  },
};

const newsSection = document.getElementById("latest-news");
let newsArray = [];

const scoresSection = document.getElementById("score-board");
const teamFileNames = [
  "big.png",
  "ence.png",
  "fnatic.png",
  "godsent.png",
  "liquid.png",
  "vitality.png",
];

async function getNews() {
  try {
    const response = await fetch(newsUrl, newsOptions);
    let result = await response.json();
    for (let i = 0; i < 8; i++) {
      let newsObject = {
        title: `Crazy New #${i + 1}`,
        summary: result[i]["title"],
      };

      newsArray.push(newsObject);
    }
    return newsArray;
  } catch (error) {
    console.error(error);
  }
}

async function generateLatestNews() {
  let latestNews = await getNews();
  console.log(latestNews);
  for (let i = 0; i < latestNews.length; i++) {
    const newsItemNode = document.createElement("div");
    newsItemNode.className = "news-item";
    const imageNode = document.createElement("div");
    imageNode.className = "news-image";
    const newsTextNode = document.createElement("div");
    newsTextNode.className = "news-text";
    const headlineNode = document.createElement("div");
    const headlineTextNode = document.createTextNode(latestNews[i]["title"]);
    headlineNode.appendChild(headlineTextNode);
    headlineNode.className = "news-headline";
    const summaryNode = document.createElement("div");
    const summaryTextNode = document.createTextNode(latestNews[i]["summary"]);
    summaryNode.appendChild(summaryTextNode);
    summaryNode.className = "news-summary";
    newsItemNode.appendChild(imageNode);
    newsTextNode.appendChild(headlineNode);
    newsTextNode.appendChild(summaryNode);
    newsItemNode.appendChild(newsTextNode);
    newsSection.appendChild(newsItemNode);
  }
}

function generateScore(){
  return Math.floor(Math.random() *10);
}

function generateFileNameIndex(){
  return Math.floor(Math.random() * teamFileNames.length);
}

async function generateLatestScores() {
  for (let i = 0; i < 8; i++) {
    leftTeamFile = generateFileNameIndex();
    rightTeamFileSafe = false;
    rightTeamFile = null;
    while(!rightTeamFileSafe){
      rightTeamFile = generateFileNameIndex();
      if (rightTeamFile !== leftTeamFile){
        rightTeamFileSafe = true;
      }
    }
    leftTeamScore = generateScore();
    rightTeamScore = generateScore();
    const scorecardNode = document.createElement("div");
    scorecardNode.className = 'scorecard'
    scorecardNode.innerHTML = `
          <div class="left-team-column">
              <div class="team-logo">
                  <img src="./images/team-logos/${teamFileNames[leftTeamFile]}">
              </div>
              <div class="team-score">
                  ${leftTeamScore}
              </div>
          </div>
          <div class="scorecard-divider">
              VS.
          </div>
          <div class="right-team-column">
              <div class="team-logo">
                  <img src="./images/team-logos/${teamFileNames[rightTeamFile]}">
              </div>
              <div class="team-score">
                  ${rightTeamScore}
              </div>
          </div>`;

    scoresSection.appendChild(scorecardNode);
  }
}


function generatePage(){
  generateLatestNews();
  generateLatestScores();
}