import img3 from '../assets/img3.png'
import student from '../assets/Student.webp'
import Lectuer from './Lectuer'
import Pricing from './Pricing'
export default function Home() {

    return (
        <div className="container">

             <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

      <div className="col-10 col-sm-8 col-lg-6"  data-aos="fade-in">
        <img src={img3} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>

      <div className="col-lg-6" data-aos="fade-left">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
        <img src={student} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"  data-aos="fade-in"/>
    </div>
  </div>

        </div>
        

        
    )
}