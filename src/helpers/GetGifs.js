export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=2Z6epzRK8r9bvgfjQ9KHz0TU7ozy7oTX&limit=20&q=${category}`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
