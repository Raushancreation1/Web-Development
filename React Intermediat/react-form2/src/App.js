import "./App.css";
import { useState } from "react";

const App = () => {

    const [formData, setFormData] = useState ({
        firstName:"", lastName:"", email:"", country:"India", streetAddress:"", city:"", state:"",
        postalCode:"", comments:false, candidates:false, offers:false, PushNotifications:""
    }) 

    function changeHandler(event) {
        const {name, value, checked, type} = event.target;
        setFormData( (prev) => ({...prev, [name]: type === "checkbox" ? checked: value}));
    }

    function submitHandler(event) {
      event.preventDefault();

      console.log("Finally printing the value of Form Data:");
      console.log(formData)
    }
  return (
    <div className="flex flex-col items-center mt-2">
        <form onSubmit={submitHandler}>

            <label htmlFor="firstName">First name</label>
            <br/>
            <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Raushan"
            value={formData.firstName}
            onchange={changeHandler}
            className="outline"
            />
            <br/>

              <label htmlFor="lastName">Last name</label>
                <br/>
                <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Kumar"
                value={formData.lastName}
                onchange={changeHandler}
                className="outline"
                />
                <br/>

                 <label htmlFor="email">Email</label>
                <br/>
                <input
                type="text"
                name="email"
                id="email"
                placeholder="rcbca@gmail.com"
                value={formData.email}
                onchange={changeHandler}
                className="outline"
                />
                <br/>
                <label htmlFor="country">Country</label> 
                <br/> 

                <label>

                    <select
                    id="country"
                    name="country"
                    value={formData.country} 
                    onchange={changeHandler}
                    className="outline"
                    >

                        <option>India</option>
                        <option>Unite State</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>

                        <br/>

                      <label htmlFor="streetAddress">Street Address</label>
                      <br/>
                      <input
                      type="text"
                      name="streetAddress"
                      id="streetAddress"
                      placeholder="B-25c"
                      value={formData.streetAddress}
                      onchange={changeHandler}
                      className="outline"
                      />

                       <br/>

                      <label htmlFor="city">city</label>
                      <br/>
                      <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Muzaffarpur"
                      value={formData.city}
                      onchange={changeHandler}
                      className="outline"
                      />

                      <br/>

                      <label htmlFor="state">state</label>
                      <br/>
                      <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Bihar"
                      value={formData.state}
                      onchange={changeHandler}
                      className="outline"
                      />

                        <br/>

                        <label htmlFor="postalCode">postalCode</label>
                        <br/>
                        <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="842002"
                        value={formData.postalCode}
                        onchange={changeHandler}
                        className="outline"
                        />

                        <br/>
                        <br/>
                        <br/>


                        <fieldset>

                          <legend>By Email</legend>


                          <div className="flex">

                          <input 
                            id="comments"
                            name="comments"
                            type="checkbox"
                            value={formData.comments}
                            onchange={changeHandler}
                          />
                          <div>
                            <label htmlFor="comments">Comments</label>
                            <p>Get notified when someones posts a comment on a posting.</p>
                          </div>
                          </div>

                          <div className="flex">
                          <input 
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            value={formData.candidates}
                            onchange={changeHandler}
                          />
                          <div>
                            <label htmlFor="candidates">Candidates</label>
                            <p>Get notified when a candidates applies for job.</p>
                          </div>
                          </div>

                          <div className="flex">
                          <input 
                            id="offers"
                            name="offers"
                            type="checkbox"
                            value={formData.offers}
                            onchange={changeHandler}
                          />
                          <div>
                            <label htmlFor="offers">Offers</label>
                            <p>Get notified when a candidates accepts or rejects an offer.</p>
                          </div>
                          </div>


                        </fieldset>
                        <br/>
                        <br/>

                        <fieldset>
                          <legend>Push Notifications</legend>
                          <p>These are delivered via SMS to your mobile phone.</p>

                          <input
                          type="radio"
                          id="pushEverything"
                          name="pushNotification"
                          value="Everything"
                          onchange={changeHandler}
                          />
                          <label htmlFor="pushEverything">Everything</label>

                          <br/>

                          <input
                          type="radio"
                          id="pushEmail"
                          name="pushNotification"
                          value="same as Email"
                          onchange={changeHandler}
                          />
                          <label htmlFor="pushEmail">Same as Email</label>

                          <br/>

                          <input
                          type="radio"
                          id="pushNothing"
                          name="pushNotification"
                          value="No Push Notifications"
                          onchange={changeHandler}
                          />
                          <label htmlFor="pushNothing">No Push Notifications</label>

                        </fieldset>

                        <button
                        className="bg-blue-500 text-white font-bold rounded py-2 px-2"
                        >Save</button>

                        
                      

                </label>
        </form>
    </div>
  )
}

export default App