import React, { useState } from "react"

function Create() {
   const [book,setBook] = useState({
      title: "",
      image: "",
      description: "",
      price: 0
   })


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Create New</h3>
                </div>
            </div>
        </div>

       
    )
}

export default Create