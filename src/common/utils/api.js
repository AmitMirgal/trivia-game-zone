export async function fetchQuizQuestion() {
  const res = await fetch(process.env.REACT_APP_URL);
  const result = await res.json();
  return result;
}
