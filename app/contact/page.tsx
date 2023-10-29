import { PageHeader } from '@/layout/Breadcrumb'
import Contact from '@/components/Contact'
import Announcement from '@/components/Announcement'

const metaTitle = 'Contact'
export const metadata = {
  title: metaTitle + ' | ISESER2023',
  description: metaTitle + ' | ISESER2023',
  openGraph: {
    title: metaTitle + ' | ISESER2023',
    description: metaTitle + ' | ISESER2023'
  }
}
export default function Page() {
  return <>
    <PageHeader title={metaTitle} />
    <Contact />
    <Announcement />
  </>
}
