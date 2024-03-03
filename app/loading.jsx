import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Loader2 className="w-20 h-20 animate-spin" />
    </main>
  );
}
