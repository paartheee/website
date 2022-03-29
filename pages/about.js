import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About Me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Machine Learning developer</div>
            <div className="text-gray-500 dark:text-gray-400">Chennai, TN</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} /> */}
              {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} /> */}
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} /> */}
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              I currently live in Chennai (India), and work at the Spritle Software.
            </p>
            <p>
              Study and transform data science prototypes and Design machine learning systems.Research and implement appropriate ML algorithms and tools. Develop machine learning applications according to requirements.Select appropriate datasets and data representation methods. Perform statistical analysis and fine-tuning using test results and Extend existing ML libraries and frameworks.
            </p>
            <p>
            My primary research interest is the development of artificial intelligence platforms and high-performance applications. In particular, I am interested in taking advantage of the evolutionary algorithm in order to discover a new space of knowledge.
            </p>
           
          </div>
        </div>
      </div>
    </>
  )
}
