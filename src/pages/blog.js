import React from "react"
import { Link } from "gatsby"
import Layout from 'propscode/Layout/index.layout';
import SEO from 'propscode/Seo';
import Bloglist from 'propscode/Components/Blogs/bloglist';


const Blog = () => (
  <Layout activeLayout='blog'>
    <SEO title="Blogs" />
    <div className="container-fluid" id="blogs_list" style={{ background:'#F7F7F9'}}>
      <div className="row">
        <div className="col-md-9 p-2">
          { [0,1,2,3,4,5,6,7].map((item, i) => ( 
          <Bloglist
            title="introduction beginers deep learning with tensorflow"
            image="https://www.dicoding.com/blog/wp-content/uploads/2014/12/infographic-Feb2020-Large-1024x565.png"
            subtitle="Sit consectetur exercitation aliquip mollit cillum culpa sint voluptate officia. Consectetur ullamco commodo ad laboris sint laboris ea enim mollit aliquip. Commodo excepteur sit veniam occaecat nulla mollit laboris ex ut. Lorem deserunt occaecat occaecat non qui minim ad nostrud excepteur sit laborum veniam dolor.
            Esse eiusmod magna eu incididunt et officia nostrud id in elit pariatur. Duis minim consequat esse eu est dolore tempor. Consequat qui id tempor proident et esse commodo incididunt laboris ad id Lorem esse ex. Fugiat Lorem elit sit et quis aute."
            url="introduction beginers deep learning with tensorflow"
          />))
          
        }
        </div>
        <div className="col-md-3 pemberitahuan">
          <div className="bg-greey">
            <span className="fa fa-category"/>
            <h4 className="text-rubik font-16 m-2">Kategori blogs</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#?filter=pemrograman">Pemrograman</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#?filter=analisys">Analisys</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#?filter=design">Design Ui/Ux</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#?filter=others">lain lain</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Blog
