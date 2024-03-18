"use client";

import Container from "@/components/shared/Container";
import CountdownTimer from "@/components/shared/CountdownTimer";

const targetDate = new Date("2024-03-22T00:00:00");

export default function NewDropPage() {
  return (
    <>
      <title>New Drops | MELEE</title>
      <Container>
        <div>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </Container>
    </>
  );
}
