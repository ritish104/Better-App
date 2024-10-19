import '../style/Home.css'; 
import main from "../assets/main.jpeg";
import person from "../assets/person.webp";

const Index = () => {
  return (
    <>
      <main> 
        <img src={main} alt="Main Image" className='main-img' />
        <div className='main2'>
          <img src={person} alt="Person Image" className='main2-img'/>
          <div className="main-details">
            <h1>Find out why we’re better.</h1>
            <div className='indbtn'>See all our stories</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
