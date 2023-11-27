import AiTrainer from "./AiTrainer";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import "./Home.css";

export default function Home() {
  const sessionContext = useSessionContext();

  if (sessionContext.loading === true) {
    return null;
  }

  return (
    <div className="fill" id="home-container">
      <AiTrainer userId={sessionContext.userId} />
    </div>
  );
}
