export const base = async (path: string = "") => {
  try {
    const req = await fetch(`https://api.chucknorris.io/jokes${path}`);
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};
