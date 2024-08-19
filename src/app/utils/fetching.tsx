export async function fetchGenre() {
  const response = await fetch(
    "https://binaryjazz.us/wp-json/genrenator/v1/genre/"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch genre");
  }
  return response.json();
}
