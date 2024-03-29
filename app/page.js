import Image from 'next/image'

export default function Home() {
  return (
    <main >
            <div className='relative bg-black h-screen px-16 text-white' > 
          <nav className='absolute top-0 left-0 flex justify-between px-16 h-fit w-full pt-8 ' >
            <div className='flex gap-4' >
              <h2 className='text-2xl mr-12 mt-1 '>AgiLean</h2>
              <div className='group'>
                <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Why Us &darr;</button>
                <div className='absolute space-y-3 -m-2 bg-[#B0C4CD] p-4 w-60 text-black text-xs rounded-xl hidden group-hover:block'>
                  <p>How we help?</p>
                  <p>Why prefer us?</p>
                  <p>What we ensure?</p>
                </div>
              </div>
              <div className='group'>
                <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Services and Solutions &darr;</button>
                <div className='absolute space-y-3 -m-2 bg-[#B0C4CD] p-4 w-60 text-black text-xs rounded-xl hidden group-hover:block'>
                  <p>Internet of Behaviors</p>
                  <p>Total Experience</p>
                  <p>Privacy Enhancing Computation</p>
                  <p>Anywhere Operations</p>
                  <p>Cybersecurity Mesh</p>
                  <p>Inteligent Composable Business</p>
                  <p>Ai Engineering</p>
                  <p>Hyper Automation</p>
                </div>
              </div>
              <div className='group'>
                <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Programs and Offerings &darr;</button>
                <div className='absolute space-y-3 -m-2 bg-[#B0C4CD] p-4 w-60 text-black text-xs rounded-xl hidden group-hover:block'>
                  <p>99-day MVP</p>
                  <p>Strategic Portfolio Diversification</p>
                </div>
              </div>
            </div>
            <button className='px-6 py-3 rounded-xl bg-white text-black' >Sign in</button>
          </nav>

          {/* <nav className='absolute top-0 left-0 flex justify-between px-16 h-fit w-full pt-8 ' >
            <div className=' flex gap-4' >
              <h2 className='text-2xl mr-12 mt-1 '>AgiLean</h2>
              <div className='group'>
                <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Why Us &darr;</button>
                <div className='absolute transition-all bg-[#B0C4CD] py-6 w-44 rounded-xl duration-500 delay-300 hidden group-hover:flex '>           
              </div> 
              <div className='group'>
                <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Services and Solutions &darr;</button>
                <div className='absolute left-0 p-10 bg-button2 w-full shadow-xxs transition-all duration-500 delay-300 border-b-1 border-primary hidden group-hover:flex '/>           
              </div> 
              <div className='group'>
                <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Programs and Offerings &darr;</button>
                <div className='absolute left-0 p-10 bg-button2 w-full shadow-xxs transition-all duration-500 delay-300 border-b-1 border-primary hidden group-hover:flex '/>           
              </div> 
            </div>
            <button className='px-6 py-3 rounded-xl bg-white text-black' >Sign in</button>
          </nav>  */}

          <div className='flex h-full' >
            <div className='my-auto h-fit' >
              <div className='w-2/3' >
                <p>We are your product engine, from Strategic Insights to Tactical Execution</p>
                <h2 className='text-6xl ' >Being up-to-date is common; the competitive advantage is being up-to-tomorrow.</h2>
                <button className='px-6 py-4 w-[563px]' >Get Started</button>
              </div>
              <Image src={''} alt='' className='w-1/3' />
            </div>
          </div>
      
          <h2 className='absolute bottom-6 left-0 w-full text-center' >We work with</h2>

        </div>
          
        <div className=' p-16 bg-[#B0C4CD] '  >
        </div>

        <div className='relative px-16 bg-black text-[#bebebe] pt-4 ' >
          <p className='text-center text-xs ' >View more</p>
          <h3 className='text-center text-3xl mt-14' >We’re a startup studio providing:</h3>
          <div className='flex justify-center mt-14' >
            <div className='flex w-fit gap-10 ' >
              <div className='flex flex-col gap-4 text-sm' >
                <div className=' space-y-2' >
                  <div className='w-20 h-20 rounded-xl bg-slate-50 ' ></div>
                  <h4>Minimum Viable Product (MVP)</h4>
                </div>
                <div className=' space-y-2' >
                  <div className='w-20 h-20 rounded-xl bg-slate-50 ' ></div>
                  <h4>Proof of Concept (POC)</h4>
                </div>
                <div className=' space-y-2' >
                  <div className='w-20 h-20 rounded-xl bg-slate-50 ' ></div>
                  <h4>Case Studies</h4>
                </div>
              </div>
              <div className='flex flex-col gap-4 text-sm' >
                <div className=' space-y-2' >
                  <div className='w-20 h-20 rounded-xl bg-slate-50 ' ></div>
                  <h4>Prototype</h4>
                </div>
                <div className=' space-y-2' >
                  <div className='w-20 h-20 rounded-xl bg-slate-50 ' ></div>
                  <h4>Pilot Project</h4>
                </div>
                <div className=' space-y-2' >
                  <div className='w-20 h-20 rounded-xl bg-slate-50 ' ></div>
                  <h4>Feasibility Studies</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-10 mt-20 '>
            <Image src={''} alt='' width={100} height={100} className='w-2/5'/>
            <div className='w-3/5 text-3xl' >
              <p >Against all odds: thoughts and observations from a permanent state of starting up. 
                We build your startup product from zero to one. We bring the tech and product expertise early-stage founders need.
                 We are your technical product team. We help get your startup from an idea into the market and beyond.
                  We typically work with pre-seed and seed-funded businesses alongside founders.</p>
            </div>
          </div> 
          <div className='flex justify-center mt-20 gap-4 text-center flex-wrap' >
            <div className='w-fit h-fit'>
              <div className='relative flex px-4 pb-2 w-80 h-60 rounded-xl border-[1px] border-white ' >
                <div className='h-fit w-fit my-auto'>
                  <p>As partners, we work together throughout the process, leveraging the best of both organizations when ideating and validating ideas.</p>
                </div>
                <div className='absolute bottom-0 left-0 bg-white w-full rounded-b-lg p-2 '></div>
              </div>
              <h3 className='text-center' >Co-Create together</h3>
            </div>
            <div className='w-fit h-fit'>
              <div className='relative flex px-4 pb-2 w-80 h-60 rounded-xl border-[1px] border-white ' >
                <div className='h-fit w-fit my-auto'>
                  <p>As partners, we work together throughout the process, leveraging the best of both organizations when ideating and validating ideas.</p>
                </div>
                <div className='absolute bottom-0 left-0 bg-white w-full rounded-b-lg p-2 '></div>
              </div>
              <h3 className='text-center' >Co-Create together</h3>
            </div>
            <div className='w-fit h-fit'>
              <div className='relative flex px-4 pb-2 w-80 h-60 rounded-xl border-[1px] border-white ' >
                <div className='h-fit w-fit my-auto'>
                  <p>As partners, we work together throughout the process, leveraging the best of both organizations when ideating and validating ideas.</p>
                </div>
                <div className='absolute bottom-0 left-0 bg-white w-full rounded-b-lg p-2 '></div>
              </div>
              <h3 className='text-center' >Co-Create together</h3>
            </div>
            <div className='w-fit h-fit'>
              <div className='relative flex px-4 pb-2 w-80 h-60 rounded-xl border-[1px] border-white ' >
                <div className='h-fit w-fit my-auto'>
                  <p>As partners, we work together throughout the process, leveraging the best of both organizations when ideating and validating ideas.</p>
                </div>
                <div className='absolute bottom-0 left-0 bg-white w-full rounded-b-lg p-2 '></div>
              </div>
              <h3 className='text-center' >Co-Create together</h3>
            </div>
            <div className='w-fit h-fit'>
              <div className='relative flex px-4 pb-2 w-80 h-60 rounded-xl border-[1px] border-white ' >
                <div className='h-fit w-fit my-auto'>
                  <p>As partners, we work together throughout the process, leveraging the best of both organizations when ideating and validating ideas.</p>
                </div>
                <div className='absolute bottom-0 left-0 bg-white w-full rounded-b-lg p-2 '></div>
              </div>
              <h3 className='text-center' >Co-Create together</h3>
            </div>
            <div className='w-fit h-fit'>
              <div className='relative flex px-4 pb-2 w-80 h-60 rounded-xl border-[1px] border-white ' >
                <div className='h-fit w-fit my-auto'>
                  <p>As partners, we work together throughout the process, leveraging the best of both organizations when ideating and validating ideas.</p>
                </div>
                <div className='absolute bottom-0 left-0 bg-white w-full rounded-b-lg p-2 '></div>
              </div>
              <h3 className='text-center' >Co-Create together</h3>
            </div>
          </div>
          <div className='flex gap-10 mt-20 '>
            <div className='w-3/5 text-3xl' >
              <p >Against all odds: thoughts and observations from a permanent state of starting up. 
                We build your startup product from zero to one. We bring the tech and product expertise early-stage founders need.
                 We are your technical product team. We help get your startup from an idea into the market and beyond.
                  We typically work with pre-seed and seed-funded businesses alongside founders.</p>
            </div>
            <Image src={''} alt='' width={100} height={100} className='w-2/5'/>
          </div>
          <div className='flex mt-20 pb-20 ' >
            <div className='flex-1' >
              <h2 className='text-3xl text-center pt-2' >Other Features</h2>
            </div>
            <div className='flex-1 text-xl space-y-6'>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Bolsters innovation and agility</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Secures business continuity</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Creates a digital culture</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Strengthens efficient communication</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Integrates business processes and tools</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Improves customer experience</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Motivates leaders and employees to collaborate</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Boosts data-driven insights</div>
            </div>
          </div>
        </div>

        <div className='text-center h-fit flex justify-around text-sm px-12 pb-14 pt-16 bg-[#535A6A]'>
          <div className='flex gap-5 flex-col'>
            <div className='h-16 flex justify-center -mt-10' ><p className='my-auto text-gray-300 ' >In-house</p></div>
            <div><p className='py-5 px-6 bg-white' >The visionary</p></div>
            <div><p className='py-5 px-6 bg-white' >The pragmatist</p></div>
            <div><p className='py-5 px-6 bg-white' >The makers</p></div>
            <div><p className='py-5 px-6 bg-white' >The tools</p></div>
            <div><p className='py-5 px-6 bg-white' >The connections</p></div>
            <div><p className='py-5 px-6 bg-white' >The boxes</p></div>
          </div>
          <div className='w-[1px]  bg-gray-300' ></div>
          <div className='flex gap-5 flex-col'>
            <div className='h-16 flex justify-center -mt-10' ><p className='my-auto text-gray-300 ' >In-house</p></div>
            <div><p className='py-5 px-6 bg-white' >The visionary</p></div>
            <div><p className='py-5 px-6 bg-white' >The pragmatist</p></div>
            <div><p className='py-5 px-6 bg-white' >The makers</p></div>
            <div><p className='py-5 px-6 bg-white' >The tools</p></div>
            <div className='h-[145px] bg-black flex justify-center' ><p className='py-5 px-6 my-auto h-fit bg-[#000000] text-white' >Infrastructure<br/>as<br/>a<br/>service</p></div>
          </div>
          <div className='w-[1px]  bg-gray-300' ></div>
          <div className='flex gap-5 flex-col'>
            <div className='h-16 flex justify-center -mt-10' ><p className='my-auto text-gray-300 ' >In-house</p></div>
            <div><p className='py-5 px-6 bg-white' >The visionary</p></div>
            <div><p className='py-5 px-6 bg-white' >The pragmatist</p></div>
            <div><p className='py-5 px-6 bg-white' >The makers</p></div>
            <div className='h-[230px] bg-black flex justify-center' ><p className='py-5 px-6 my-auto h-fit bg-[#000000] text-white' >Platform<br/>as<br/>a<br/>service</p></div>
          </div>
          <div className='w-[1px]  bg-gray-300' ></div>
          <div className='flex gap-5 flex-col'>
            <div className='h-16 flex justify-center -mt-10' ><p className='my-auto text-gray-300 ' >In-house</p></div>
            <div><p className='py-5 px-6 bg-white' >The visionary</p></div>
            <div><p className='py-5 px-6 bg-white' >The pragmatist</p></div>
            <div className='h-[315px] bg-black flex justify-center' ><p className='py-5 px-6 my-auto h-fit bg-[#000000] text-white' >Software<br/>as<br/>a<br/>service</p></div>
          </div>
          <div className='w-[1px]  bg-gray-300' ></div>
          <div className='flex gap-5 flex-col'>
            <div className='h-16 flex justify-center -mt-10 ' ><p className='my-auto text-gray-300 ' >In-house</p></div>
            <div><p className='py-5 px-6 bg-white' >The visionary</p></div>
            <div className='h-[400px] bg-[#B0C4CD] flex justify-center ' ><p className='py-5 px-6 my-auto h-fit ' >Technology<br/>as<br/>a<br/>service</p></div>
          </div>
        </div>

        <div className=' bg-black text-white px-16 pt-20'>
          <div className='flex justify-center'>
            <div className='space-y-10 text-center w-[460px] '>
              <div className='' >
                <h2 className='text-2xl mb-2'>The Vision</h2>
                <p className=' text-sm' >Has the vision, identifies opportunities, understands the market and has a good idea of the software product they want to build</p>
              </div>
              <div className='' >
                <h2 className='text-2xl mb-2'>The Pragmatist</h2>
                <p className=' text-sm' >Understands the vision and converts the big picture into working software requiremnents (i.e Epics, User stories, Features)</p>
              </div>
              <div className='' >
                <h2 className='text-2xl mb-2'>The Makers</h2>
                <p className=' text-sm' >Develops a plan, timelines and converts the software requirements into working software</p>
              </div>
              <div className='' >
                <h2 className='text-2xl mb-2'>The Tools</h2>
                <p className=' text-sm' >The tools for buliding working software including developer tools, development platform, programming languages, data bases</p>
              </div>
              <div className='' >
                <h2 className='text-2xl mb-2'>The Tools</h2>
                <p className=' text-sm' >The tools for buliding working software including developer tools, development platform, programming languages, data bases</p>
              </div>
              <div className='' >
                <h2 className='text-2xl mb-2'>The Connections</h2>
                <p className=' text-sm' >The tools for buliding working software including developer tools, development platform, programming languages, data bases</p>
              </div>
              <div className='' >
                <h2 className='text-2xl mb-2'>The Boxes</h2>
                <p className=' text-sm' >The hardware where all the magic happens including developer workstation and the servers where the software runsss</p>
              </div>
            </div>
          </div>
          <div className='mt-20 pb-16 ' >
            <h1 className='text-3xl w-[860px]' >We are investing time & money at a very early stage into ideas and founders to validate promising opportunities. Focus areas are (non-exclusive):</h1>
            <div className='mt-8 text-xl space-y-6'>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Bolsters innovation and agility</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Secures business continuity</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Creates a digital culture</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Strengthens efficient communication</div>
              <div className='flex h-fit gap-4' >
                <div className='w-4 h-4 my-auto bg-blue-700' />
                Integrates business processes and tools</div>
              </div>
          </div>
        </div>

        <div className=' p-16 bg-[#B0C4CD] text-center'  >
          <div>
            <p className='text-sm font-semibold'>WHY CHOSE US</p>
            <h2 className='text-2xl font-semibold mt-2'>SaaS and ERP</h2>
            <p className='text-sm' >Design, develop, and support complex, high performing<br/> SaaS applications </p>
          </div>
          <div className='mt-10' >
            <p className='text-sm font-semibold'>STARTING AT</p>
            <h2 className='text-2xl font-semibold mt-2'>1% Equity</h2>
            <p className='text-sm' >Per month with a 6 month commitment</p>
          </div>
          <div className='flex justify-center mt-6 gap-6' >
            <div className='flex gap-3'>
              <div className='h-12 w-12 rounded-full bg-black'/>
              <p className='my-auto font-semibold '>First Working Process</p>
            </div>
            <div className='flex gap-3'>
              <div className='h-12 w-12 rounded-full bg-black'/>
              <p className='my-auto font-semibold '>Dedicated Team</p>
            </div>
            <div className='flex gap-3'>
              <div className='h-12 w-12 rounded-full bg-black'/>
              <p className='my-auto font-semibold '>24/7 Hours Support</p>
            </div>
          </div>
          <div className='flex justify-center mt-10' >
            <button className='bg-black py-4 w-96 rounded-xl text-white' >Book a call</button>
          </div>
        </div>
    </main>
  )
}
