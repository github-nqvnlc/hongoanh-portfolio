const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="effect-1">
        <img src="assets/img/effect-1.svg" className="svg" alt="image" />
      </div>
      <div className="effect-2">
        <img src="assets/img/effect-2.svg" className="svg" alt="image" />
      </div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 pe-xl-5 py-5">
            <div className="home-intro one-page-nav">
              <h6>
                <span>Hello.</span>
              </h6>
              <h1>Hong Oanh
                <br />
                Content & SEO
              </h1>
              <p>Tôi là sinh viên Digital Marketing với hơn 2 năm kinh nghiệm thực tế trong Content SEO, quản lý fanpage và marketing in-house. <br /> Có khả năng triển khai công việc độc lập, quản lý thời gian hiệu quả và làm việc tốt trong môi trường trực tiếp lẫn trực tuyến.</p>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="#contactus">
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-image">
              <img src="assets/img/home-banner.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
