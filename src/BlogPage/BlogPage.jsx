function BlogPage() {
  return (
    <div className="">
      <hr />
      <div className="px-14 py-20 bg-[#C3E2C2] border border-t-white">
        <div className="">
          <p className="text-[#cb522d] date mb-8">April 21, 2019</p>
          <h1 className="text-[#cb522d] font-bold text-4xl pb-20 w-[50vw]">
            Lorem ipsum dolor sit amet.
            {/* {articles.length > 0 && articles[id] ? articles[id].title : ""} */}
          </h1>
          <div>
            <p className="text-[#cb522d] font-light">Written by</p>
            <p className="author text-[#cb522d] font-bold">Ana-Maria Rusu</p>
          </div>
        </div>
      </div>
      <div className="right bg-cover w-screen h-[55vh] bg-[url('https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg')]"></div>
      <div className="article-container grid grid-cols-2 p-20 gap-x-6">
        <div className="quote ">
          <p className="text-5xl leading-[4rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo a laudantium.
          </p>
        </div>
        <article className="text-justify ">
          {/* {articles.length > 0 && articles[id] ? articles[id].main_article : ""} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam, itaque quia iste blanditiis fugiat obcaecati ullam sapiente quisquam eaque, soluta sit. Aperiam veritatis autem, asperiores eos nulla corrupti dignissimos inventore quibusdam natus eum amet fugit maiores unde pariatur necessitatibus excepturi dolor assumenda consequatur perspiciatis impedit! Modi maiores a unde.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolores
          beatae officiis eius aspernatur praesentium voluptatem dolorem ea
          assumenda quidem, esse est ullam. Consequuntur quod fuga sunt rem, ab
          reprehenderit sequi doloribus ipsam quam quis, corrupti iste dolorem
          ipsa, earum placeat? Assumenda, qui iure odit optio aperiam earum,
          nesciunt consequuntur nulla cum, suscipit ex! Perferendis corrupti
          beatae commodi assumenda accusamus eos ipsa, nemo, omnis ex tempora
          magnam mollitia ut illo nobis. Maiores, recusandae, saepe quis
          reprehenderit alias, eum repudiandae at sit harum illum beatae
          voluptas voluptatibus accusantium dolor perferendis culpa pariatur id
          labore in voluptates magnam qui ratione. Repellendus, placeat?
        </article>
      </div>
    </div>
  );
}

export default BlogPage;
