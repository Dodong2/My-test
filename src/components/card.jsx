import 'bootstrap/dist/css/bootstrap.min.css'
import Heaven from '../assets/heav.jpg'
import Dog from '../assets/dog.jpg'
import Kalbo from '../assets/kalbo.jpg'
const card = () => {
  return (
    <>
    {/* Container */}
    <div className='container'>
        <div className='row'>
        {/* test 1 first Card */}
            <div className='col-12 col-md-6 col-lg-4'>
            <div className='card mb-3'>
                <img src={Heaven} alt='' className='card-img-top'/>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            heaven will save you
                        </h5>
                        <p className='card-text'>
                            daan patungong langit, ito yung nakikita ng mga taong laging puyat.
                        </p>
                    </div>
                 </div>
            </div>
            {/* test 2 second Card */}
            <div className='col-12 col-md-6 col-lg-4'>
            <div className='card mb-3'>
                <img src={Dog} alt='' className='card-img-top'/>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            Beautiful View
                        </h5>
                        <p className='card-text'>
                            Asong natae ng malupit, sa beach na maangas na hindi ko alam pangalan ng lugar.
                        </p>
                    </div>
                 </div>
            </div>
            {/* test 3 third Card */}
            <div className='col-12 col-md-6 col-lg-4'>
            <div className='card mb-3'>
                <img src={Kalbo} alt='' className='card-img-top'/>
                    <div className='card-body'>
                        <h5 className='card-title'>
                        Kalbo masamang Negro
                        </h5>
                        <p className='card-text'>
                            Beautiful View, maganda kaso may negro pero ok narin basta masaya yung negro ok nayan.
                        </p>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default card
