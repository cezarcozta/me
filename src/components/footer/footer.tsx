import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-4 py-8 px-3">
        <p className="text-foreground text-center">César Augusto Costa - © Copyright 2025</p>

        <Button variant="link" className="text-foreground" asChild>
          <Link href="/" >Feedback</Link>
        </Button>
      </div>
    </footer>
  );
}
