import Blog from 'templates/Blog'
import { useAppContext } from 'utils/appContext'

export default function DontYou() {
  const { state } = useAppContext()
  const { domain } = state

  return (
    <Blog
      title="Don't You Forget About&nbsp;Me."
      subtitle={`
  Just one more thing before you register ${domain}`}
    >
      <h3>I&apos;m glad you found {domain}, it looks pretty cool!</h3>
      <p>
        This is an important step on your journey to build an awesome project.
      </p>
      <h3>But while you&apos;re still here...</h3>
      <p>
        It will probably be a while until you come back for your next project
        name, and since we had such a great time together, I&apos;d still like
        to stay in touch. So, feel free to send me a message on{' '}
        <a
          href="https://twitter.com/andrevitorio"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        , or{' '}
        <a
          href="https://www.linkedin.com/in/andrevitorio/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        . I&apos;d love to see what you make with {domain}!
      </p>
      <p>Now that that&apos;s out of the way.</p>
      <p>
        <strong>
          <a
            href={`http://www.anrdoezrs.net/links/100555377/type/dlg/https://www.namecheap.com/domains/registration/results.aspx?domain=${domain}`}
            target="_blank"
            rel="noreferrer"
          >
            Click here to register {domain}
          </a>{' '}
          on Namecheap. I promise it&apos;s the best deal you&apos;ll find!
        </strong>
      </p>
      <p>
        Also, here&apos;s a list of services that will help you in your business
        journey (ps: some of these are affiliate links):
        <br />
      </p>
      <h3>Website creation</h3>
      <ul>
        <li>
          <a
            href="https://webflow.grsm.io/namixer"
            target="_blank"
            rel="noreferrer"
          >
            Webflow
          </a>{' '}
          - Create a custom website. No-code website builder.
        </li>
      </ul>
      <h3>Design</h3>
      <ul>
        <li>
          <a href="https://figma.com" target="_blank" rel="noreferrer">
            Figma
          </a>{' '}
          - Graphic and interface design.
        </li>
        <li>
          <a href="https://canva.com" target="_blank" rel="noreferrer">
            Canva
          </a>{' '}
          - Easily create marketing material and social media posts.
        </li>
      </ul>
      <h3>Copywriting</h3>
      <ul>
        <li>
          <a
            href="https://jarvis.ai?fpr=andre98"
            target="_blank"
            rel="noreferrer"
          >
            Jarvis
          </a>{' '}
          - Artificial intelligence makes it fast & easy to create content for
          your blog, social media, website, and more!{' '}
          <strong>
            Get 10,000 bonus credits by{' '}
            <a
              href="https://jarvis.ai?fpr=andre98"
              target="_blank"
              rel="noreferrer"
            >
              clicking here
            </a>
            !
          </strong>
        </li>
      </ul>
      <h3>Search Engine Optimization</h3>
      <ul>
        <li>
          <a href="https://surferseo" target="_blank" rel="noreferrer">
            SurferSEO
          </a>{' '}
          - Use Surfer to generate content plans for any domain in a couple of
          clicks.
        </li>
      </ul>
      <h3>Cloud Hosting</h3>
      <ul>
        <li>
          <p>
            <a
              href="https://m.do.co/c/d4611149d2ca"
              target="_blank"
              rel="noreferrer"
            >
              DigitalOcean
            </a>{' '}
            - Cloud hosting for APIs, Backend, etc...
          </p>
        </li>
      </ul>

      <p>
        {' '}
        If you&apos;d like to further support the developer and the tool, please
        consider{' '}
        <a
          href="https://buymeacoffee.com/andrevitorio"
          target="_blank"
          rel="noreferrer"
        >
          buying me a coffee
        </a>
        . I appreciate you taking the time to use{' '}
        <a href="https://namixer.com">Namixer</a> and wish you all the success
        in the world!
      </p>
    </Blog>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
