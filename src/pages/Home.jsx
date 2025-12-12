import Hero from '../components/Hero';
import CardsList from '../components/CardsList';
import JobListings from '../components/JobListings';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>     
      <Hero title='Become a React Dev' subtitle='Find a React Job now with your skills !' />
      {/* Developers and Employers */}
      <CardsList />
      {/* Browse Jobs */}
      <JobListings />
      <Footer />
    </>
  )
}

export default Home