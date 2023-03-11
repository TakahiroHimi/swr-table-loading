import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  id: string;
  name: string;
};

const sleep = (second: number) =>
  new Promise((resolve) => setTimeout(resolve, second * 1000));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  await sleep(3);

  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    res.status(200).json([...users, { id: "011", name: "高橋 愛子" }]);
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
];
