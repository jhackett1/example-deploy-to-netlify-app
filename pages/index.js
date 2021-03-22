import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// export const getStaticProps = async () => {
//   const posts = await prisma.post.findMany()
//   return {
//     props: { posts },
//   }
// }

const Home = ({ posts }) => (
  <>
    <h1>Posts</h1>
    <code>{JSON.stringify(posts)}</code>
  </>
)

export default Home
