import img3 from '../assets/img3.png'
import drNiroth from '../assets/niroth.webp'
import Pricing from './Pricing'
export default function Lectuer() {

  return (
    <div className="container">
      <h1 >PANEL OF EXPERT LECTURERS</h1>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

          <div className="col-10 col-sm-8 col-lg-6" data-aos="fade-in">
            <img src={drNiroth} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="600" height="00" loading="lazy" />
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Dr. Niroth Samarawickrama</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
          <p>Welcome to iCET, the Institute of Computer Engineering Technology, where we are dedicated to shaping aspiring individuals into skilled software engineers, equipping them with the expertise and knowledge needed to excel in the dynamic world of software development.

            At iCET, we understand the ever-evolving demands of the software industry. That's why we've designed an intensive and comprehensive training program that transforms enthusiastic learners into proficient software engineers in just few months.

            Dr. Niroth Samarawickckrama, our esteemed software engineering trainer, brings a wealth of knowledge and experience to our institute. With a deep passion for software engineering and a commitment to teaching, Dr. Samarawickckrama is the driving force behind our success. His guidance and expertise ensure that our students receive the finest education in the field.</p>
        </div>
      </div>

    </div>
  )
}