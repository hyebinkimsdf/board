import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// props의 타입을 정확하게 정의
interface DetailProps {
  params: {
    id: string; // URL에서 id 값을 받는 형태
  };
}

export default async function Detail(props: DetailProps) {
  const client = await connectDB;
  const db = client.db("forum");

  // id 파라미터를 ObjectId로 변환
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  if (!result) {
    // 데이터가 없을 경우 처리
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>상세페이지</h1>
      <h2>{result.title}</h2>
      <p>{result.content}</p>
    </div>
  );
}
