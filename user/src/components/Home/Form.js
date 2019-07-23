import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <div class="col-lg-4 col-sm-4 col-md-4 col-xs-4">
                    <div class="left">
                        <h1 id="create"> Create an account</h1>

                        <h2 id="free"> Its free and always will be.</h2>
                        <br/>

                        <form id="left-form">
                            <input id="fnames" type="name" name="name" placeholder="First name"/>
                            <input id="snames" type="name" name="name" placeholder="Surname"/>
                            <br/>
                            <br/>
                            <input id="long1" type="number email" name="name" placeholder="Phone or email"/>
                            <br/>
                            <br/>

                            <input id="long2" type="password" name="name" placeholder="Password"/>
                            <h3 id="birthday"> Birthday</h3>

                            <select>
                                <option value="Day">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>

                            <select>
                                <option value="Month">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="Apr">Apr</option>
                            </select>

                            <select>
                                <option value="Year">Year</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                            </select>
                            <p id="why"> Why do i need my<br/> birth certicate?</p>
                            <div class="check">
                                <input type="radio" name="gender" value="male" checked /> Male
                                <input type="radio" name="gender" value="female"/> Female

                            </div>
                            <p id="agreement"> By clicking Sign Up, you agree to our Terms, Data Policy and<br/> Cookie
                                Policy.
                                You may receive SMS notifications from us and<br/> can opt out at any time.</p>
                            <a href="home.html"><button type="button" class="btn btn-success">Sign Up</button></a>
                        </form>

                    </div>

                </div>
            </div>
            
        )
    }
}
export default Form;