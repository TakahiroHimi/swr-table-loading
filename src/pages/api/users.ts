import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  id: string;
  name: string;
};

const sleep = (second: number) =>
  new Promise((resolve) => setTimeout(resolve, second * 1000));

let responseUserCount = 10;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  await sleep(3);

  if (req.method === "GET") {
    res.status(200).json(users.slice(0, responseUserCount));
  } else if (req.method === "POST") {
    responseUserCount++;
    res.status(200).json([]);
  }
}

const users: User[] = [
  { id: "001", name: "田中 雄大" },
  { id: "002", name: "山田 真太郎" },
  { id: "003", name: "鈴木 美咲" },
  { id: "004", name: "佐藤 太一" },
  { id: "005", name: "小林 かおり" },
  { id: "006", name: "伊藤 正太" },
  { id: "007", name: "加藤 亜弥" },
  { id: "008", name: "中村 裕太" },
  { id: "009", name: "森田 あやか" },
  { id: "010", name: "吉田 健太郎" },
  { id: "011", name: "高橋 愛子" },
  { id: "012", name: "岡田 太郎" },
  { id: "013", name: "松本 恵美" },
  { id: "014", name: "三浦 孝之" },
  { id: "015", name: "宮崎 里穂" },
  { id: "016", name: "中山 竜太" },
  { id: "017", name: "渡辺 朝美" },
  { id: "018", name: "吉岡 麻衣子" },
  { id: "019", name: "清水 健太" },
  { id: "020", name: "北村 真理子" },
  { id: "021", name: "西田 健太" },
  { id: "022", name: "村上 亜紀" },
  { id: "023", name: "斉藤 勇気" },
  { id: "024", name: "中川 まどか" },
  { id: "025", name: "鳥山 翔太" },
];
