import { revalidateTag, unstable_cache } from "next/cache";

const getCurrentTime = unstable_cache(
  async () => {
    return new Date().toISOString();
  },
  ["time"],
  { revalidate: false, tags: ["time"] },
);

export default async function Page() {
  async function invalidateCache() {
    "use server";
    revalidateTag("time");
  }

  const time = await getCurrentTime();
  return (
    <div>
      <p>Current time: {time}</p>
      <button onClick={invalidateCache}>Invalidate cache</button>
    </div>
  );
}
