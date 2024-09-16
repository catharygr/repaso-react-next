import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <button
        data-testid="button"
        type="submit"
        disabled
      >
        submit
      </button>
    </div>
  );
}
