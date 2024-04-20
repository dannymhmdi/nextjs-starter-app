import DialogButton from "@/components/dialog-button/dialogButton";
import PostCard from "@/components/postCard/postCard";

export const metadata = {
  title: "blog page",
  description: "Next.js starter app",
};
const Blog = async ({ params, searchParams }) => {
  // const [data , setData] = useState(null)
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error("new error has ocurred");
    }
    return res.json();
  };
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
  //     res.json()
  //     console.log('res.ok',res.ok)
  //   }).then(res => {
  //     console.log('res',res)
  //     setData(res)
  //   }).catch(error => console.log('error =',error))

  // },[])
  const post = await getData();

  return (
    <>
      <DialogButton />
      <div className="flex flex-row flex-wrap ">
        {post?.map((data) => {
          return (
            <PostCard
              key={data.id}
              body={data.body}
              title={data.title}
              params={data?.id}
              userId={data.userId}
            />
          );
        })}
      </div>
    </>
  );
};

export default Blog;
