import { Header, Anchor, Card } from 'components/Typography';
import {Head} from 'next/head'
export default function About() {
  return (
       <>
            <Head>
                 <title>about page  </title>
       </Head>
    <Card className="flex flex-col space-y-4">
      <Header className="mb-4 bg-black-200"> simple  voity application</Header>

      <p>
        Welcome to{' '}
        <Anchor
          className="text-purple-800  hover:text-purple-600"
          href="/"
        >
          Votey
        </Anchor>
        , a place to collect and Votey.
      </p>

      <p>
        The code is being developed in the open so follow along with the
        progress there!
      </p>
            </Card>
            </>
  );
}
