import { Component } from "react";



import './index.css'

class ProfilePage extends Component{
    state = {
        imageEl:"https://res.cloudinary.com/dqyqjbuku/image/upload/v1704886158/camera-icon-52_v050jb.png",
    }

    displayImage = event =>{
        const file = event.target.files[0];

        if(file){
            const imageUrl = URL.createObjectURL(file);
            console.log(imageUrl)

            this.setState({imageEl:imageUrl})
        }

        
    }



   render(){
    const {imageEl}= this.state

    return(
        <div className="profile-bg-container">
            <div class="profile-container">
                <img className="profile-image" id="profileImage" src={imageEl} alt="profile"/><br />
                <input type="file" id="fileInput" accept="image/*" onChange={(e) => this.displayImage(e)} className="file-field"/>
            </div>
            <form>
            <select class="form-select" id="country" placeholder="Your email" aria-label="Default select example">
                    <option selected>mr</option>
                    <option value="1">mrs</option>
                    <option value="2">miss</option>
                    <option value="3">other</option>
                </select>
            <input type="text" className="input-filed" placeholder="First Name" />
            <input type="text" className="input-filed" placeholder="Last Name" />
            <input type="Date" className="date-input-filed" placeholder="Date of Birth" />
            <input type="email" className="email-input-filed"  placeholder=" Email" />
            <div class="number-container">
                <input type="text" placeholder="+91" className="number" />
                <input type="text" placeholder="Phone number" className="input-filed"/>
                <input type="text" placeholder="Alternate number" className="input-filed"/>
            </div>
            <input type="text" placeholder="state" className="state-input-filed"/>
            <input type="text" placeholder="pincode" className="state-input-filed" />
        </form>

          <div className="profile-btn-container">
            <button type="button" className="back-btn-profile">Back</button>
            <button type="button" className="back-btn-profile">Next</button>
          </div>
        </div>
    )
   }
}

export default ProfilePage