import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin" />
    </main>
  );
}
