const testimonialData = [
    {
      text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
      avatarName: 'Ansari Patron',
      avatarDesignation: 'CEO at Delta',
    },
    {
      text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
      avatarName: 'Jhon Doe',
      avatarDesignation: 'Manager at Delta',
    },
    {
      text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
      avatarName: 'Ramatam Coo',
      avatarDesignation: 'MD at Delta',
    },
  ];
const faqData = [
    {
      title: '01. I need your services and how can i contact you throw email?',
      content:
        'Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
    },
    {
      title: '02. What are the different types of service we provide?',
      content:
        'Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
    },
    {
      title: '03. What are the different stages of the working process?',
      content:
        'Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
    },
    {
      title: '04. What is the difference between direct and digital marketing?',
      content:
        'Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
    },
    {
      title: '05. How can i payment proceed after complete project?',
      content:
        'Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
    },
  ];
  
export default function Home() {
    pageTitle('home');
    return (
      <>
        <Hero
          title={[
            'London Based Creative Agency',
            '25+ Years of Experience',
            '30+ Worldwide Partnership',
            'Take World-class Service',
          ]}
          subtitle="Craft Distinct Brand Image with Expert Guidance & Fresh Approach."
          videoSrc="https://www.youtube.com/embed/VcaAVWtP48A"
          bgUrl="/images/creative-agency/hero_video_bg_1.jpeg"
        />
        <Spacing lg="125" md="70" />
        <div className="container">
          <FunFact data={funfactData} />
        </div>
        <Spacing lg="125" md="70" />
        <About
          thumbnail="/images/creative-agency/about_1.jpeg"
          uperTitle="Who We Are"
          title="Full-stack creatives and designing agency"
          subTitle="Our team, specializing in strategic digital marketing, partners with the world's leading brands. Breaking from the norm, we push boundaries and merge imaginative thinking, consumer behavior,
          and data-driven design with advanced technology to deliver unparalleled brand experiences."
          featureList={[
            'Designing content with AI power',
            'Trending marketing tools involve',
            'Powerful market strategy use',
          ]}
          btnText="Learn More"
          btnUrl="/about"
        />
        <Spacing lg="185" md="75" />
        <WhyChose
          sectionTitle="We have depth of market knowledge"
          sectionSubTitle="Why Choose Us"
          whyChoseFeatureData={whyChoseFeatureData}
          thumbnailSrc="/images/creative-agency/why_choose_us_img_3.jpeg"
        />
        <Spacing lg="150" md="80" />
        <section className="cs_p76_full_width">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some recent news" subTitle="Our Blog" />
          <Spacing lg="85" md="45" />
        </div>
        <PostCarousel data={postData} />
      </section>
        <section className="cs_primary_bg">
          <Spacing lg="143" md="75" />
          <div className="container">
            <SectionHeading
              title="Our core services"
              subTitle="Services"
              variantColor="cs_white_color"
            />
            <Spacing lg="45" md="30" />
          </div>
          <div className="container">
            <Service
              sectionTitle="Our core services"
              sectionSubTitle="Services"
              data={serviceListData}
            />
            <Spacing lg="135" md="65" />
          </div>
        </section>
        
        <section className="cs_primary_bg cs_shape_animation_2">
          <Spacing lg="143" md="75" />
          <div className="cs_shape_1 position-absolute">
            <svg
              width={65}
              height={64}
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M62.4554 25.9314C55.6838 19.6081 40.1618 12.4752 32.1637 20.1537C41.7609 21.9206 53.2379 29.2392 48.3751 39.1677C45.1712 45.7019 38.7353 45.7177 33.3337 41.995C27.338 37.8739 25.7108 31.2667 27.4596 24.5962C26.5312 24.5866 25.6039 24.6605 24.6889 24.8172C9.80991 27.7447 14.0713 47.6353 20.9187 55.948C22.4528 57.8045 19.7488 60.3159 18.1393 58.4837C7.86403 46.8126 6.49349 23.0691 25.5532 19.9295C26.8892 19.7254 28.2446 19.6801 29.5912 19.7945C36.9845 9.42053 56.5698 17.4866 64.055 24.4366C65.1096 25.4175 63.4831 26.8926 62.4554 25.9314ZM33.9938 39.0327C38.3927 42.4636 44.2429 40.8527 44.3919 34.8698C44.6036 28.2263 35.7464 25.0921 29.1457 24.655C27.1454 29.9313 29.4427 35.4836 33.9938 39.0327Z"
                  fill="#4F4747"
                />
              </g>
            </svg>
          </div>
          <div className="container">
            <SectionHeading
              title="Our prize achievement"
              subTitle="Awards"
              variantColor="cs_white_color"
            />
            <Spacing lg="85" md="45" />
            <Award data={awardData} />
          </div>
          <Spacing lg="150" md="80" />
        </section>
        <TestimonialSlider
          layeredImages={[
            '/images/creative-agency/layer_img_1.jpeg',
            '/images/creative-agency/layer_img_2.jpeg',
            '/images/creative-agency/layer_img_3.jpeg',
            '/images/creative-agency/layer_img_4.jpeg',
            '/images/creative-agency/layer_img_5.jpeg',
          ]}
          data={testimonialData}
        />
        
        <section className="cs_p76_full_width">
          <Spacing lg="143" md="75" />
          <div className="container">
            <SectionHeading title="Some recent news" subTitle="Our Blog" />
            <Spacing lg="85" md="45" />
          </div>
          <PostCarousel data={postData} />
        </section>
        <section>
          <Spacing lg="143" md="75" />
          <div className="container">
            <SectionHeading title="Frequently asked question" subTitle="FAQs" />
            <Spacing lg="55" md="30" />
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <Accordion variant="cs_type_1" data={faqData} />
              </div>
            </div>
          </div>
          <Spacing lg="120" md="50" />
        </section>
      </>
    );
  }