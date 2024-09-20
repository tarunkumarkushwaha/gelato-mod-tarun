// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './App.css'
import Navbar from './components/Navbar'
import SectionWithImage from './components/SectionWithImage'
import Foot from './components/Foot'
import HeroSection from './components/HeroSection'
import GelatoConnectSection from './components/GelatoConnectSection'

function App() {

  // section 1  texts
  const benefits = [
    {
      title: "World's largest print-on-demand network",
      description: "140+ print partners in 32 countries. Gelato is a truly global service.",
    },
    {
      title: 'Sell globally, produce locally',
      description: 'Your products are produced close to your customers, wherever they are.',
    },
    {
      title: '100% free editing tools',
      description: 'Create your custom products using our suite of free tools.',
    },
    {
      title: '60+ logistics partners',
      description:
        'Our global network of logistics partners ensures your products are delivered fast.',
    },
    {
      title: 'High-quality products',
      description:
        'We partner with the world’s leading brands to ensure the best quality products.',
    },
  ];

  let section1 = {
    leftimagesrc: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rightElement: <div className="max-w-2xl mx-auto mt-8 space-y-6">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex space-x-4">
          <div>
            <span className="inline-block text-lg text-gray-800">➤</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  }

  // section 2 

  let section2 = {
    leftimagesrc: "https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/",
    rightElement: <div
    className="m-5">
    <h1 className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-extrabold m-10">Accelerate business growth with innovative design tools and apps</h1>
    <h1 className="text-black text-center text-xl md:text-2xl lg:text-3xl font-thin m-10">See how our cutting-edge solutions can help you reach new customers and maximize your profits.</h1>
    
    <div className="w-full m-5 flex justify-center items-center gap-4">
    <button className='bg-slate-800 text-yellow-50 rounded-xl text-sm p-2'>Get started</button>
    </div>       
</div>
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      {/* sending an object with image url and html element via prop to put in left and right side of sections  */}
      <SectionWithImage element={section1} />
      <SectionWithImage element={section2}/>
      <GelatoConnectSection/>
      <Foot />
      {/* <button className='bg-slate-800 sticky right-20 bottom-5 z-30 hover:text-blue-300 m-2 text-white rounded-xl text-sm p-2'><SupportAgentIcon/>Contact us</button> */}
    </>
  )
}

export default App
