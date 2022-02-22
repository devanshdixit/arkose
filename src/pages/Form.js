import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

const Form = () => {
   const [sqft, setSqft] = useState('')
   const [stories, setStories] = useState('')
   const [facing, setFacing] = useState('')
   const [type, setType] = useState('')

   const sqftOptions = [
      { value: '50', label: '50' },
      { value: '65', label: '65' },
      { value: '80', label: '80' },
      { value: '100', label: '100' },
      { value: '110', label: '110' },
      { value: '120', label: '120' },
      { value: '150', label: '150' },
      { value: '200', label: '200' },
      { value: '200+', label: '200+' }
   ]

   const storiesOption = [
      { value: 'Ground', label: 'Ground' },
      { value: 'First', label: 'First' },
      { value: 'Second', label: 'Second' },
      { value: 'Third', label: 'Third' }
   ]

   const facingOption = [
      { value: 'North', label: 'North' },
      { value: 'East', label: 'East' },
      { value: 'West', label: 'West' },
      { value: 'South', label: 'South' }
   ]

   const typeOption = [
      { value: '2D', label: '2D' },
      { value: '3D', label: '3D' },
      { value: 'Layout', label: 'Layout' },
      { value: 'With Furniture', label: 'With Furniture' },
      { value: 'Without Furniture', label: 'Without Furniture' }
   ]

   const handleSqft = (options) => {
      setSqft(options)
   }

   const handleStories = (options) => {
      setStories(options)
   }
   const handleFacing = (options) => {
      setFacing(options)
   }
   const handleType = (options) => {
      setType(options)
   }

   const handleSubmit = (e) => {
      // setSqft(options)
      e.preventDefault()
      console.log(sqft, stories, facing, type)
   }

   return (
      <>
         <Header />
         <div className="form-card">
            <form onSubmit={handleSubmit}>
               <div
                  className="sqft"
                  style={{ display: 'flex', justifyContent: 'center' }}
               >
                  <div
                     style={{
                        margin: '100px 50px'
                        // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                     }}
                  >
                     <div className="form-input">
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Select Squarefeet
                        </span>
                        <CreatableSelect
                           isClearable
                           options={sqftOptions}
                           placeholder={'Sqft'}
                           value={sqft}
                           onChange={handleSqft}
                        />
                     </div>

                     <div className="form-input">
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Select Stories
                        </span>
                        <Select
                           isClearable
                           options={storiesOption}
                           placeholder={'Stories'}
                           value={stories}
                           onChange={handleStories}
                        />
                     </div>
                     <div className="form-input">
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Select Facing
                        </span>
                        <Select
                           isClearable
                           options={facingOption}
                           placeholder={'Facing'}
                           value={facing}
                           onChange={handleFacing}
                        />
                     </div>
                     <div className="form-input">
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Select Type
                        </span>
                        <Select
                           isClearable
                           options={typeOption}
                           placeholder={'Type'}
                           value={type}
                           onChange={handleType}
                        />
                     </div>
                     <div style={{ textAlign: 'center' }}>
                        <Link to="/pay">
                           <button type="submit" id="submit-form">
                              Submit
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </form>
         </div>
         <Footer />
      </>
   )
}
export default Form
