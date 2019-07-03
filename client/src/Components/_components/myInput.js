import React from 'react';
// import Picker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import DropZone from 'react-dropzone';
import Rating from 'react-rating';

//text seperate component
export const RadioInput = props => {
    return(
        <label htmlFor={props.for} className="container">
            <input 
                type="radio" 
                id={props.for} 
                name={props.name}
                //style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}
                //style={{display:'none'}}
                value={props.value}
                onChange={props.onChange}
                className="checkmark"
                style={{marginTop:'0px'}}
            />
          <span className="checkmark"></span>
          <h4 className="checkbox_form_Profile">{props.label}</h4>
        </label>
    )
}

export const DetailInput = props => {
    return(
        <div className="form-group_commit">
            <label htmlFor="contain">
                <span className="hell5">
                    {props.label}
                </span>
            </label>
            <input 
                className="form-control_commit" 
                type="text"
                id={props.id} 
                value={props.value} 
                onChange={props.onChange}
            />
        </div>    
    )
}

export const CircleSizes = props => {
    return(
        <div className="row">
            <div className={props.classOne}>
                <div className={props.classTwo}></div>
                <div className={props.classThree}><h3>{props.elementOne}</h3></div>
                <div className={props.classFour}></div>
                <div className={props.classFive}><h3>{props.elementTwo}</h3></div>
                <div className={props.classSix}></div>
                <div className={props.classSeven}><h3>{props.elementThree}</h3></div>
                <div className={props.classEight}></div>
            </div>
        </div>
    )
}

export const Rate = props => {
    return(
        <div className="row"> 
            <Rating className={props.classMd ? props.classMd : "col-md-7" + " col-xs-8"}
                emptySymbol="glyphicon glyphicon-star-empty"
                fullSymbol="glyphicon glyphicon-star"
                initialRating={props.initialRating} 
                readonly={props.readonly}
                className="userstar"
                onChange={props.onChange}
            />
            <div className={props.classXS ? props.classXS : "col-md-5" + " col-xs-4"}
                className={props.OH ? "userstar_rating OH" : "userstar_rating"}>
                <h5>{props.rate}</h5>
            </div>
        </div>
    )
}

export const Rate2 = props => {
   return(
       <div className="row">
           <Rating className={props.classMd ? props.classMd : "col-md-7" + " col-xs-8"}
               emptySymbol="glyphicon glyphicon-star-empty"
               fullSymbol="glyphicon glyphicon-star"
               initialRating={props.initialRating}
               readonly={props.readonly}
               className="productStar"
               onChange={props.onChange}
           />
           <div className={props.classXS ? props.classXS : "col-md-5" + " col-xs-4"}
                className={props.OH ? "productRating OH" : "productRating"}>
               <h5>{props.rate}</h5>
           </div>
       </div>
   )
}

export const ButtonComponent = props => {
    return(
        <div className="col-md-2" style={{textAlign: 'center'}}>
            <button className="btn btn-danger btn-lg col-md-12 morebtn" onClick={props.onClick}>
                <h2 style={{margin: '5px',fontFamily: 'Qwigley'}}>
                    {props.label}
                </h2>
            </button>
        </div>
    )
}

export const Filter = props => {
    return(
        <label className="container">
            <input 
                type="checkbox" 
                id={props.id} 
                style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}
                onChange={props.onChange}
            />
            <span className="checkmark"></span>
            <h5 style={{fontFamily:'crimsontext'}}>{props.heading}</h5>
        </label>
    )
}

export const TextInput = props => {
    return(
        <div>
            <div className={props.col}  style={{paddingRight: '0px', marginTop:'4%'}}>
                <span className="input">
                    <h4 className="input_form_Profile">{props.label}</h4>
                </span>
            </div>
            <div className={props.col2} style={props.padding}>
                <div className="inputBox ">
                    <div className="inputText"></div>                    
                    <input 
                        required={props.required}
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

export const SelectInput = props => {
    return(
        <div>
            <label htmlFor={props.name} className={props.col}>
                <h1 className="input_form_Profile">
                    {props.label}
                </h1>
            </label>
            <div className={props.col2}>
                <select required 
                    className="col-md-12 col-sm-12"
                    placeholder={props.placeholder} 
                    name={props.name} 
                    id={props.id} 
                    value={props.value} 
                    onChange={props.Change} style={{width: '100%',
                        border: 'none',
                        backgroundColor: '#e1e1e1',
                        padding: '9px',
                        marginTop: '-1%'}}>
                    
                    {props.options && props.options.map((ob)=><option key={ob.id} value={ob}>{ob}</option>)}
                </select>
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

export const Textarea = props => {
    return(
        <div className="col-md-12" style={props.style}>
            <label htmlFor={props.name} className="col-md-4 col-sm-6 input_form_Profile">{props.title}</label>
            <div className="col-lg-11 col-md-12 col-sm-12">
                <textarea
                    required={props.required}
                    id={props.id}
                    rows={props.rows}
                    maxLength={props.maxLength} 
                    className={props.className} 
                    placeholder={props.placeholder} 
                    name={props.name} id={props.name} 
                    value={props.value} 
                    onChange={props.onChange}
                    >
                </textarea>
            </div>
        </div>
    )
}

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
  