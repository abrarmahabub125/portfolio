import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";

const About = () => {
  const { promise } = useLoaderData();

  return (
    <div className="h-full">
      <Suspense fallback={<p>Loading todo...</p>}>
        <Await resolve={promise}>{(data) => <h1>{data.title}</h1>}</Await>
      </Suspense>
    </div>
  );
};

export default About;
