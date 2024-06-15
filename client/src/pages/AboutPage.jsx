import React from 'react'
import Footer from '../components/Footer'







const AboutPage = () => {
  return (
    <div>
      <div className='bg-[image:url(/imgs/banner.png)] bg-cover bg-[#111111a4] bg-blend-darken bg-center py-12'>
        <h1 className='text-center text-gray-200 text-6xl font-semibold mb-3'>#AboutUS</h1>
        <p className='text-center text-gray-200 text-lg font-semibold'>Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.</p>
      </div>
      <br /><br />
      <div className='px-32'>
        <h2 className='font-bold text-3xl text-gray-900 mb-6'>Background</h2>
        <div className='text-sm font-semibold text-gray-700'>
          <p>Modern higher education in Ethiopia began with the founding of the University College of Addis Ababa on March 20, 1950. When formal lectures started in the College on December 11, 1950, the Faculty of Science, one of the only two Faculties then, had only two departments or sections, known as Section A and Section B. In Section A, students were given basic training in Engineering, which would enable them to go abroad to specialize in one of the many branches of Engineering, whereas those in Section B were prepared for Medical School as well as for further studies in Biology and allied fields.</p>
          <br /><br />
          <p>In 1956-57 the Faculty took a step forward by changing the three-year Section B program into a four-year B.Sc. degree program in Biology. By 1959-60, there were three B.Sc. degree offering programs in the following combination of subjects: Course A -Mathematics and Physics; Course B -Biology and Chemistry; and Course C -Chemistry and Geology. Similarly, in 1959-60, the Section A program was amalgamated with the newly established Engineering College.</p>
        </div>
        <br /><br />
        <div>
          <h2 className='font-bold text-3xl text-gray-900 mb-6'>Mission and Vision</h2>
          <div className='text-sm font-semibold text-gray-700'>
            <b>Mission</b>
            <br />
            <p>Materials Science Program’s mission is to produce high quality graduates of Materials Science, provide need-based community service and produce problem-solving research outputs in Materials Science through innovative teaching-learning and edge-cutting research activitiesby aligning to the existing Materials Science research lines within AAU’s strategic plans to contribute social and economic development of Ethiopia.</p>
            <br /><br />
            <b>Vision</b>
            <br />
            <p>The vision of Materials Science Program at CNCS is to establish a long-term standing alone centre or department of Materials Science in AAU and to be ranked first in quality of teaching-learning and R&D in Materials Science among departments of Materials Science and Engineering from Universities in Ethiopia in 10 years.</p>
          </div>
        </div>
        <br /><br />
        <div>
          <h2 className='font-bold text-3xl text-gray-900 mb-6'>Principal's Massage</h2>
          <div className='text-sm font-semibold text-gray-700'>
            <p>Welcome to Destiny Future Academy, a Distinguished School in Addis Ababa, Ethiopia!  We proudly serve approximately 600 students in transitional kindergarten through Eighth grade.  Situated on midway from Gofa to German Square, Addis Ababa. Destiny Future Academy is a tight-knit school community that offers engaging, relevant, and rigorous core activities with supplemental programming and experiences consistent with our school’s vision: academic excellence through technology and the arts.  Our highly trained and dedicated staff work collaboratively with our parent community and our school foundation to challenge students to set high expectations for achievement and provide opportunities for them to grow and learn in a safe environment.</p>
          </div>
        </div>
      </div>
      <br /><br />
      <hr />
      <Footer/>
    </div>
  )
}

export default AboutPage
