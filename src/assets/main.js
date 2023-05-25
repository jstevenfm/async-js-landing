const url = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '361fe30c41msh18b78194f93b120p15cc8fjsncc9249e3e931',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(url) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(url);
    
  } catch {

  }
})();