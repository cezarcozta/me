import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-around py-8 px-3">
        <p className="text-foreground">César Augusto Costa - © Copyright 2025</p>

        <Button variant="link" className="text-foreground" asChild>
          <Link href="/" >Feedback</Link>
        </Button>
      </div>
    </footer>
  );
}
