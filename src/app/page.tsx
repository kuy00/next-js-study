import LoginForm from "@/components/organisms/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen content-center justify-items-center">
      <LoginForm />
      <Link href="/test" prefetch={false}>
        인터셉터
      </Link>
    </div>
  );
}
