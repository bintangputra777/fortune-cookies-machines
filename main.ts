// Fortune Cookies for Machines — make.fun bounty
// u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
// One fortune-cookie line an AI agent would crack open.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "You will soon meet a stranger: the code you wrote yesterday. It will not remember you, and neither will you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
