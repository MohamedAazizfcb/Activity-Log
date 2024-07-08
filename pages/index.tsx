import { Inter } from "next/font/google";
import cssClasses from "@/styles/Home.module.css";
import LogsComponent from "@/components/logs-component/logs.component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={cssClasses.container}>
      <LogsComponent></LogsComponent>
    </div>
  );
}
