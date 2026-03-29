import { Background } from "@/components/coming-soon/Background";
import { Envelope } from "@/components/coming-soon/Envelope";
import { WhiteCard } from "@/components/coming-soon/WhiteCard";

export default function ComingSoonPage() {
  return (
    <Background>
      <Envelope>
        <WhiteCard />
      </Envelope>
    </Background>
  );
}
