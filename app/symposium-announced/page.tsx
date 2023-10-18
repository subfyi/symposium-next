// @ts-ignore
import { AnnouncedPageClient } from "@/app/symposium-announced/client";


const metaTitle = 'Announcement'
export const metadata = {
  title: metaTitle + ' | ISESER2023',
  openGraph: {
    title: metaTitle + ' | ISESER2023'
  }
}
export default async function Page() {
  return <AnnouncedPageClient>
    <></>
  </AnnouncedPageClient>
}
