import Button from "../components/Buttons/Button";
import Card from "../components/Card/Card";
import Layout from "../components/Layout";
import Timeline from "../components/Timeline/Timeline";

export default function Home() {
  return (
    <main>
      <Layout>
        <div className="m-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt rem
          nobis iusto nulla repudiandae ipsum! Nesciunt rerum ratione
          voluptatem, velit at aliquid nisi distinctio sapiente fugiat? Hic
          fugiat assumenda exercitationem!
        </div>
        <Timeline />
        <div className="flex flex-wrap">
          <Card />
          <Card />
        </div>
        <div className="flex">
          <Button>Visit Site</Button>
        </div>
      </Layout>
    </main>
  );
}
