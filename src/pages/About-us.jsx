
import about from "../assets/about.jpg";
import '../style/About.css'; 

const AboutUs = () => {
  return (
    <>
  
      <main className="about"> 
        <h2>Our mission</h2>
        <h1>We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</h1>
      </main>

      <div className="about2">
        <div className="about-detais">
          <h2>The status quo is broken</h2>
          <p>The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
          <div className='about-btn'>Read vishal's story </div>
        </div>
        <div className="about3">
          <img src={about} alt="" className="about-img" />

        </div>
      </div>
      <div className="about4">
      <din className="about4-details">
      <h1>How we’re changing things</h1>
        <h6>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</h6>

<h6>That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</h6>
      </din>
      </div>

    
    </>
  );
};

export default AboutUs;
