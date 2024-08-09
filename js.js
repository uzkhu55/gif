const input = document.getElementById("input");

const gif = document.getElementById("gif");
const container = document.getElementById("container");
const loading = document.getElementById("loading");

loading.style.display = "none";

input.addEventListener("keyup", async () => {
  loading.style.display = "flex";

  const { data } = await getGiphyData(input.value);

  loading.style.display = "none";
  container.innerHTML = "";

  data.forEach((element) => {
    const imgTag = `<img src=${element.images.original.url} />`;

    container.innerHTML += imgTag;
    // console.log(container);
  });
});

const getGiphyData = async (searchInput) => {
  const url = `https://api.giphy.com/v1/videos/search?q=${searchInput}&limit=10&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g`;
  const result = await fetch(url);
  return result.json();
};
