import React, { useState, useImperativeHandle } from 'react'
import { Button } from 'react-bootstrap'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none'}

  const toggleVisibility = () => {
    setVisible(!visible)
  } 

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button variant='success'
                style={{margin:'5px'}}
                className='Button'  
                onClick={toggleVisibility}>{props.buttonLabelShow}
        </Button>
      </div>
      <div style={showWhenVisible}>
        <Button variant='danger'
                 style={{margin:'5px'}}
                className='Button' 
                onClick={toggleVisibility}>{props.buttonLabelHide ? props.buttonLabelHide : 'Cancelar'}
        </Button>
         {props.children}
      </div>
      </div>
    ) 
})

export default Togglable