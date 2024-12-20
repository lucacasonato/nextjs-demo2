import { revalidatePath } from "next/cache";

export default async function Page() {
  async function invalidateCache() {
    "use server";
    revalidatePath("/isr");
  }

  const time = Date.now();
  return (
    <div>
      <p>Current time: {time}</p>
      <button onClick={invalidateCache}>Invalidate cache</button>
    </div>
  );
}
