const brandList = [
    {
      logoSrc: '/images/marketing-agency/brand_1.svg',
      logoAlt: 'Brand',
    },
    {
      logoSrc: '/images/marketing-agency/brand_2.svg',
      logoAlt: 'Brand',
    },
    {
      logoSrc: '/images/marketing-agency/brand_3.svg',
      logoAlt: 'Brand',
    },
    {
      logoSrc: '/images/marketing-agency/brand_4.svg',
      logoAlt: 'Brand',
    },
  ];
  const brandListDark = [
    {
      logoSrc: '/images/marketing-agency/brand_1_dark.svg',
      logoAlt: 'Brand',
    },
    {
      logoSrc: '/images/marketing-agency/brand_2_dark.svg',
      logoAlt: 'Brand',
    },
    {
      logoSrc: '/images/marketing-agency/brand_3_dark.svg',
      logoAlt: 'Brand',
    },
    {
      logoSrc: '/images/marketing-agency/brand_4_dark.svg',
      logoAlt: 'Brand',
    },
  ];
  const funfactData = [
    { title: 'Happy Customers', number: '22k' },
    { title: 'Work’s Completed', number: '15k' },
    { title: 'Skilled Team Members', number: '121' },
    { title: 'Most Valuable Awards', number: '15' },
  ];




export default function AboutPage({ darkMode }) {
    pageTitle('About');
    return (
      <>
        <Spacing lg="70" md="70" />
        <Spacing lg="140" md="80" />
        <SectionHeadingStyle3
          title="Adding value to your business, <br>making it worthy"
          subTitle="About Us"
          variant="text-center"
          shape="shape_1"
        />
        <Spacing lg="75" md="60" />
        
        <Spacing lg="125" md="70" />
        <div className="container">
          <FunFact data={funfactData} />
        </div>
        <Spacing lg="125" md="70" />
        <AboutStyle5
          variant="cs_type_1"
          thumbnailSrc="/images/digital-agency/about_2.jpeg"
          miniTitle="What We Do"
          title="Best value service provider agency"
          subTitle="We make specializing in strategic digital marketing, partners with aiming the world's leading brands. Breaking from the norm, we push boundaries and do merge imaginative thinking posible dolores."
          progressBarList={[
            { title: 'Digital Marketing', percentage: '75' },
            { title: 'Brand Strategy', percentage: '85' },
            { title: 'Competitor Analysis', percentage: '95' },
          ]}
          salesTitle="Sales Increase"
          groth="25"
        />
        <Spacing lg="150" md="80" />
        <section className="cs_primary_bg">
          <Spacing lg="140" md="70" />
          <div className="container">
            <SectionHeadingStyle5 title="How we work" />
            <Spacing lg="85" md="45" />
            <div className="cs_working_process_wrap cs_center">
              <div className="cs_working_process">
                <div className="cs_working_process_col">
                  <IconBoxStyle6
                    bgSrc="/images/others/process_1.png"
                    iconSrc="/images/icons/search.svg"
                    title="Research"
                    subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem own disilope accusantium doloremque laudantium, totam remen."
                  />
                </div>
                <div className="cs_working_process_col">
                  <IconBoxStyle6
                    bgSrc="/images/others/process_2.png"
                    iconSrc="/images/icons/idea.svg"
                    title="Idea Generate"
                    subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem own disilope accusantium doloremque laudantium, totam remen."
                  />
                </div>
                <div className="cs_working_process_col">
                  <IconBoxStyle6
                    bgSrc="/images/others/process_3.png"
                    iconSrc="/images/icons/gear.svg"
                    title="Implement"
                    subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem own disilope accusantium doloremque laudantium, totam remen."
                  />
                </div>
              </div>
            </div>
          </div>
          <Spacing lg="150" md="80" />
        </section>
        <section className="cs_p76_full_width">
          <Spacing lg="143" md="75" />
          <div className="container">
            <SectionHeading
              title="Meet our experts team behind <br />the zivan agency"
              subTitle="Our Team"
            />
            <Spacing lg="85" md="45" />
          </div>
          <TeamSlider data={teamData} />
        </section>
        <Spacing lg="135" md="70" />
        <Marquee text="We Create Design - Build App - Website - Branding - SEO" />
        <Spacing lg="84" md="50" />
        <div className="container">
          <Brands data={darkMode ? brandListDark : brandList} />
        </div>
        <Spacing lg="135" md="80" />
      </>
    );
  }