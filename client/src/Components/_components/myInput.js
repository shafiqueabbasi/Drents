import React, { Component } from 'react';
// import Picker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import DropZone from 'react-dropzone';
import classNames from 'classnames';

//text seperate component
export const RadioInput = props => {
    return(
        <label htmlFor={props.for} className="container">
            <input 
                type="radio" 
                id={props.for} 
                name={props.name}
                /*style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}*/
                value={props.value}
                onChange={props.onChange}
            />
          <span className="checkmark"></span>
          <h4>{props.label}</h4>
        </label>
    )
}

export const TextInput = props => {
    return(
        <div>
            <div className="col-md-2 col-sm-2">
                <span className="input">
                    <h3>{props.label}</h3>
                </span>
            </div>
            <div className="col-sm-4 col-sm-4">
                <div className="inputBox ">
                    <div className="inputText"></div>                    
                    <input 
                        id={props.id} 
                        value={props.value} 
                        className={props.className}
                        onChange={props.Change}
                    />
                </div>
            </div>
        </div>
    )
}

// export const DatePicker = props => {
//     return(
//         <div className="col-md-12">
//             <label htmlFor={props.name}>{props.title}</label>
//             <Picker
//                 selected={props.value}
//                 className="form-control" 
//                 placeholderText={props.placeholder} 
//                 onChange={props.Change}
//                 showTimeSelect={props.showTimeSelect}
//                 showTimeSelectOnly={props.showTimeSelectOnly}
//                 timeIntervals={15}
//                 dateFormat={props.dateFormat}
//                 timeCaption="Time"
//             />
//         </div>
//     )
// }

// export const Textarea = props => {
//     return(
//         <div className="col-md-12">
//             <label htmlFor={props.name}>{props.title}</label>
//             <textarea 
//                 required 
//                 rows={props.rows}
//                 maxLength={props.maxLength} 
//                 className="form-control" 
//                 placeholder={props.placeholder} 
//                 name={props.name} id={props.name} 
//                 value={props.value} 
//                 onChange={props.onChange}>
//             </textarea>
//         </div>
//     )
// }

// export const Dropzone = props => {
//     return(
//         <div className="col-md-12">
//             <label>{props.title}</label>
//             <DropZone 
//                 style={{display: 'block'}} 
//                 onDrop={props.onDrop}>
//                 {({getRootProps, getInputProps, isDragActive}) => {
//                     return (
//                         <div
//                             {...getRootProps()}
//                             className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
//                             >
//                             <input 
//                                 type='file' 
//                                 placeholder="uploadFile"  
//                                 className="form-control show" 
//                                 style={{width: "45%", display: 'inline'}} 
//                                 {...getInputProps()} 
//                             /> 
//                         </div>
//                     )
//                 }}
//             </DropZone>
//         </div>
//     )
// }
  
export const SelectInput = props => {
    return(
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <select required 
                className="form-control"
                placeholder={props.placeholder} 
                name={props.name} 
                id={props.name} 
                value={props.value} 
                onChange={props.Change}>
                {props.options && props.options.map((ob)=><option key={ob.id} value={ob}>{ob}</option>)}
            </select>
        </div>   
    )
}
