import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = ({ location }) => {
  return (
    <Layout>
      <Seo
        pagetitle="ページが見つかりません"
        pagepath={location.pathname}
      />
      <h1 style={{ padding: "20vh 0", textAlign: "center" }}>お探しのページは見つかりませんでした</h1>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
