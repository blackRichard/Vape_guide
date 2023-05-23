import React from 'react';

function News() {
    return (
        <div>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars" aria-hidden="true"></i>
                </label>
                <a id="label_href" href="home.html">Vape Haven</a>
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="begginer.html">Begginer</a></li>
                    <li><a href="Intermediate.html"> Intermediate</a></li>
                    <li><a href="expert.html">Expert</a></li>
                    <li><a href="news.html" className="active"> News</a></li>
                    <li><a href="calculator.html"> Calculator</a></li>
                </ul>
            </nav>
            <div className="container">
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        {/* <div className="col-4 pt-1">
              <a className="link-secondary" href="#">Subscribe</a>
            </div> */}
                    </div>
                </header>

                <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">Exploring E-liquids: Flavors, Ingredients, and Safety</h1>
                        <p className="lead my-3">E-liquids are a crucial component of the vaping experience, offering a wide range of flavors and nicotine options. We'll explore the world of e-liquids, discussing popular flavors, the use of alternative ingredients, and the importance of safety standards. This post will shed light on the production process, regulatory considerations, and the potential impact on users.</p>
                        <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">World</strong>
                                <h3 className="mb-0">Health and Safety: Debunking Myths and Research Updates</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">Vaping has been a subject of intense debate regarding its potential health effects. In this blog post, we'll examine recent scientific research and separate fact from fiction. We'll address concerns related to vaping and lung health, the impact of vaping on smoking cessation efforts, and the role of proper usage and regulations in ensuring user safety.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
