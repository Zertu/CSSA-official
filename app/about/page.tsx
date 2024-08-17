import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({ title: 'About' })
const CYAInfo = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">华人青年协会（CYA）</h1>
      <p className="mb-4 text-lg leading-relaxed">
        华人青年协会（CYA）是由纽芬兰纪念大学（MUN）研究生学生会（GSU）资助的一个校内华人学生组织。本协会旨在代表和服务中国研究生群体，其职责包括：
      </p>
      <ul className="mb-4 list-inside list-disc space-y-2">
        <li>为协会成员提供社交、学术和娱乐活动，丰富他们的留学生活。</li>
        <li>促进和维护中国研究生的利益，确保他们的声音在校园内得到充分的代表。</li>
        <li>建立和加强中国留学生之间的联系，推动互助与合作。</li>
      </ul>
      <p className="mb-8 text-lg leading-relaxed">
        任何在纽芬兰纪念大学(MUN)注册的中国研究生均可免费加入本协会，会员资格在其学习期间有效。申请者可以通过邮件
        <a href={`mailto:${siteMetadata.email}`} className="text-blue-600 hover:underline">
          {siteMetadata.email}
        </a>
        报名加入，更多信息也请通过以上邮箱与我们联系。
      </p>

      <h1 className="mb-6 text-center text-3xl font-bold">The Chinese Youth Association (CYA)</h1>
      <p className="mb-4 text-lg leading-relaxed">
        The Chinese Youth Association (CYA) is a campus-based Chinese student organization at
        Memorial University, funded by the Graduate Student Union (GSU). The association aims to
        represent and serve the Chinese graduate student community at the university. Its objectives
        include:
      </p>
      <ul className="mb-4 list-inside list-disc space-y-2">
        <li>
          Providing social, academic, and recreational activities for the association members to
          enrich their study abroad experience.
        </li>
        <li>Promoting and representing the interests of Chinese graduate students.</li>
        <li>
          Building and strengthening connections among Chinese students, fostering mutual support
          and cooperation.
        </li>
      </ul>
      <p className="text-lg leading-relaxed">
        All registered Chinese graduate students at Memorial University are welcome to join the
        association for free, with membership valid throughout their study period. Applications for
        membership can be made via email at &nbsp;
        <a href={`mailto:${siteMetadata.email}`} className="text-blue-600 hover:underline">
          muncgsa@gmail.com
        </a>
        , and for more information, please contact us through the same email.
      </p>
    </div>
  )
}
export default function Page() {
  // const author = allAuthors.find((p) => p.slug === 'default') as Authors
  // const mainContent = coreContent(author)

  return (
    <>
      <CYAInfo></CYAInfo>
    </>
  )
}
