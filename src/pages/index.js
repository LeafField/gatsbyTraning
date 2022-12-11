import React from 'react'

const index = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="site">
            <a href="base-index.html">
              <img src="/images/logo.svg" alt="ESSENTIALS" />
            </a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="base-index.html">TOP</a>
              </li>
              <li>
                <a href="base-about.html">ABOUT</a>
              </li>
              <li>
                <a href="base-blog.html">BLOG</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="content bloglist">
        <div className="container">
          <h1 className="bar">RECENT POSTS</h1>
          <div className="posts">
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img
                    src="/images-baseblog/eyecatch.jpg"
                    alt="アイキャッチ画像の説明"
                  />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img
                    src="/images-baseblog/eyecatch.jpg"
                    alt="アイキャッチ画像の説明"
                  />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img
                    src="/images-baseblog/eyecatch.jpg"
                    alt="アイキャッチ画像の説明"
                  />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img
                    src="/images-baseblog/eyecatch.jpg"
                    alt="アイキャッチ画像の説明"
                  />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img
                    src="/images-baseblog/eyecatch.jpg"
                    alt="アイキャッチ画像の説明"
                  />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img
                    src="/images-baseblog/eyecatch.jpg"
                    alt="アイキャッチ画像の説明"
                  />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="site">
            <a href="base-index.html">
              <img src="/images/logo-w.svg" alt="ESSENTIALS" />
              <p>おいしい食材と食事を探求するサイト</p>
            </a>
          </div>
          <ul className="sns">
            <li>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter" />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/">
                <i className="fab fa-facebook-square" />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a href="http://instagram.com/">
                <i className="fab fa-instagram" />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>


  )
}

export default index
