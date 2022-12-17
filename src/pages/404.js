import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 style={{ padding: "20vh 0", textAlign: "center" }}>お探しのページは見つかりませんでした</h1>
    </Layout>
  )
}

export default NotFoundPage

export const Head = ({ location }) => <Seo
  pagetitle="ページが見つかりません"
  pagepath={location.pathname}
/>
