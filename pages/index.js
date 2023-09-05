import BlogBox from "@/components/BlogBox/BlogBox";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="p-10 bg-white">
        <div className="grid w-full grid-cols-3">
          <BlogBox />
        </div>
      </div>
    </Layout>
  );
}
