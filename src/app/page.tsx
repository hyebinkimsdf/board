import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/util/database";

export default async function Home() {
  const data = [{ title: "제목1", img: "/images/test.jpg", link: "/write" }];

  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find({}).toArray();
  console.log(result);

  return (
    <>
      <p>There is a Main Home page</p>

      <main>
        {/* 글 리스트 start */}

        <div className="grid grid-cols-4 gap-4">
          {result.map((item, index) => (
            <Link href="/" key={index}>
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={item.img}
                  alt="Next.js Logo"
                  width={180}
                  height={180}
                  className="bg-gray-200 rounded-lg"
                />
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* 글 리스트 end */}

        <Link href="/write">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-10">
            글쓰기
          </button>
        </Link>
      </main>
    </>
  );
}
