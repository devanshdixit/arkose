import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Modal from 'react-modal'
import { MdClose } from 'react-icons/md'

Modal.setAppElement('#root')

const customStyles = {
   content: {
      top: '15%',
      left: '15%',
      width: '70%',
      padding: '0px'
   }
}
const Pay = () => {
   const [modalIsOpen1, setModalIsOpen1] = useState(false)
   const [modalIsOpen2, setModalIsOpen2] = useState(false)
   const [modalIsOpen3, setModalIsOpen3] = useState(false)
   const [modalIsOpen4, setModalIsOpen4] = useState(false)
   const [modalIsOpen5, setModalIsOpen5] = useState(false)
   const [modalIsOpen6, setModalIsOpen6] = useState(false)
   return (
      <>
         <Header />

         <div
            className="container"
            style={{ marginTop: '100px', marginBottom: '75px' }}
         >
            <div className="row">
               <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ marginBottom: '25px', position: 'relative' }}
               >
                  <img
                     style={{ width: '100%', height: '100%' }}
                     src={require('../img/projects/project1.jpg')}
                  />
                  <button
                     onClick={() => setModalIsOpen1(true)}
                     className="view"
                  >
                     View
                  </button>
                  <Modal
                     isOpen={modalIsOpen1}
                     onRequestClose={() => setModalIsOpen1(false)}
                     style={customStyles}
                  >
                     <img
                        style={{
                           width: '100%',
                           height: '',
                           position: 'relative'
                        }}
                        src={require('../img/projects/project1.jpg')}
                     />
                     <MdClose
                        style={{
                           fontSize: '30px',
                           position: 'absolute',
                           top: '1%',
                           right: '1%',
                           cursor: 'pointer'
                        }}
                        onClick={() => setModalIsOpen1(false)}
                     />
                  </Modal>
               </div>
               <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ marginBottom: '25px', position: 'relative' }}
               >
                  {' '}
                  <img
                     style={{ width: '100%', height: '' }}
                     src={require('../img/projects/project2.jpg')}
                  />
                  <span className="view" onClick={() => setModalIsOpen2(true)}>
                     View
                  </span>
                  <Modal
                     isOpen={modalIsOpen2}
                     onRequestClose={() => setModalIsOpen2(false)}
                     style={customStyles}
                  >
                     <img
                        style={{
                           width: '100%',
                           height: '',
                           position: 'relative'
                        }}
                        src={require('../img/projects/project2.jpg')}
                     />
                     <MdClose
                        style={{
                           fontSize: '30px',
                           position: 'absolute',
                           top: '1%',
                           right: '1%',
                           cursor: 'pointer'
                        }}
                        onClick={() => setModalIsOpen2(false)}
                     />
                  </Modal>
               </div>
               <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ marginBottom: '25px', position: 'relative' }}
               >
                  {' '}
                  <img
                     style={{ width: '100%', height: '' }}
                     src={require('../img/projects/project3.jpg')}
                  />
                  <span className="view" onClick={() => setModalIsOpen3(true)}>
                     View
                  </span>
                  <Modal
                     isOpen={modalIsOpen3}
                     onRequestClose={() => setModalIsOpen3(false)}
                     style={customStyles}
                  >
                     <img
                        style={{
                           width: '100%',
                           height: '',
                           position: 'relative'
                        }}
                        src={require('../img/projects/project3.jpg')}
                     />
                     <MdClose
                        style={{
                           fontSize: '30px',
                           position: 'absolute',
                           top: '1%',
                           right: '1%',
                           cursor: 'pointer'
                        }}
                        onClick={() => setModalIsOpen3(false)}
                     />
                  </Modal>
               </div>
               <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ marginBottom: '25px', position: 'relative' }}
               >
                  {' '}
                  <img
                     style={{ width: '100%', height: '' }}
                     src={require('../img/projects/project4.jpg')}
                  />
                  <span className="view" onClick={() => setModalIsOpen4(true)}>
                     View
                  </span>
                  <Modal
                     isOpen={modalIsOpen4}
                     onRequestClose={() => setModalIsOpen4(false)}
                     style={customStyles}
                  >
                     <img
                        style={{
                           width: '100%',
                           height: '',
                           position: 'relative'
                        }}
                        src={require('../img/projects/project4.jpg')}
                     />
                     <MdClose
                        style={{
                           fontSize: '30px',
                           position: 'absolute',
                           top: '1%',
                           right: '1%',
                           cursor: 'pointer'
                        }}
                        onClick={() => setModalIsOpen4(false)}
                     />
                  </Modal>
               </div>
               <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ marginBottom: '25px', position: 'relative' }}
               >
                  {' '}
                  <img
                     style={{ width: '100%', height: '' }}
                     src={require('../img/projects/project5.jpg')}
                  />
                  <span className="view" onClick={() => setModalIsOpen5(true)}>
                     View
                  </span>
                  <Modal
                     isOpen={modalIsOpen5}
                     onRequestClose={() => setModalIsOpen5(false)}
                     style={customStyles}
                  >
                     <img
                        style={{
                           width: '100%',
                           height: '',
                           position: 'relative'
                        }}
                        src={require('../img/projects/project5.jpg')}
                     />
                     <MdClose
                        style={{
                           fontSize: '30px',
                           position: 'absolute',
                           top: '1%',
                           right: '1%',
                           cursor: 'pointer'
                        }}
                        onClick={() => setModalIsOpen5(false)}
                     />
                  </Modal>
               </div>
               <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ marginBottom: '25px', position: 'relative' }}
               >
                  {' '}
                  <img
                     style={{ width: '100%', height: '' }}
                     src={require('../img/projects/project6.jpg')}
                  />
                  <span className="view" onClick={() => setModalIsOpen6(true)}>
                     View
                  </span>
                  <Modal
                     isOpen={modalIsOpen6}
                     onRequestClose={() => setModalIsOpen6(false)}
                     style={customStyles}
                  >
                     <img
                        style={{
                           width: '100%',
                           height: '',
                           position: 'relative'
                        }}
                        src={require('../img/projects/project6.jpg')}
                     />
                     <MdClose
                        style={{
                           fontSize: '30px',
                           position: 'absolute',
                           top: '1%',
                           right: '1%',
                           cursor: 'pointer'
                        }}
                        onClick={() => setModalIsOpen6(false)}
                     />
                  </Modal>
               </div>
            </div>
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px'
               }}
            >
               <button id="submit">Pay Now</button>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Pay
