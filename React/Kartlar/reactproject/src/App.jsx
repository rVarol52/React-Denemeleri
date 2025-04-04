import 'bulma/css/bulma.css'
import './App.css'
import  Course  from './Course'
import angular from './images/angular.jpg'
import bootstrap5 from './images/bootstrap5.png'
import ccsharp from './images/ccsharp.png'
import kompleweb from './images/kompleweb.jpg'


function App() {

  return (
    <>
      <div>

        <section className="hero is-link">
          <div className="hero-body">
            <p className="title">Kurslarım</p> 
          </div>
        </section>
        
        <div className='container'>
          <section className='section'>
            <div className='columns'>
            <div className='column'>
              <Course
                image={angular} 
                title="Angular"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nobis doloribus quo et tempore voluptatum magnam commodi illum necessitatibus officia consequuntur explicabo repellat earum culpa esse, 
                voluptate libero iusto sunt laborum!"
              />
            </div>
            <div className='column'>
              <Course 
              image={bootstrap5}
              title="Bootstrap 5"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Nobis doloribus quo et tempore voluptatum magnam commodi illum necessitatibus officia consequuntur explicabo repellat earum culpa esse, 
              voluptate libero iusto sunt laborum!"
              />
            </div>

            <div className='column'>
              <Course 
                image={ccsharp}
                title="Komple Web"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nobis doloribus quo et tempore voluptatum magnam commodi illum necessitatibus officia consequuntur explicabo repellat earum culpa esse, 
                voluptate libero iusto sunt laborum!"
              />
            </div>

            <div className='column'>
              <Course 
                image={kompleweb}
                title="Frontend"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nobis doloribus quo et tempore voluptatum magnam commodi illum necessitatibus officia consequuntur explicabo repellat earum culpa esse, 
                voluptate libero iusto sunt laborum!"
                />
            </div>


          </div>
          </section>
         
        </div>
      
        
        
       
        
      </div>
    </>
      )
}

export default App
