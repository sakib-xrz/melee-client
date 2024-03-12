import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex justify-center mt-32">
      <Loader2 className="h-10 w-10 animate-spin" />
    </main>
  );
}
