import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const enquiry = () => {
    return (
        <>
         <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Enquiry</h2> 

								<form className="mb-0" id="" name="" action="" method="post" noValidate="noValidate">

									<div className="row">

										<div className="col-md-6 form-group"> 
											<select id="" name="" className="sm-form-control">
												<option>Select The Division</option>
												<option value="API Division">API Division</option>
												<option value="US/EU Formulations">US/EU Formulations</option>
												<option value="Emerging Market Formulations">Emerging Market Formulations</option>
												<option value="ARV Formulations">ARV Formulations</option>
												<option value="Investor Relations">Investor Relations</option>
												<option value="Aurozymes">Aurozymes</option>
											</select>
										</div>
										<div className="col-md-2 form-group">
											<select className="sm-form-control">
												<option>Title</option>
												<option value="MR.">MR.</option>
												<option value="MRS.">MRS.</option>
												<option value="MS.">MS.</option>
												<option value="DR.">DR.</option>
											</select>
 
										</div>  
										<div className="col-md-4 form-group"> 
											<input type="text" id="" name="" value="Full Name" className="sm-form-control required"/>
										</div>

										<div className="col-md-6 form-group"> 
											<input type="text" id="" name="" value="Company Name*" className="sm-form-control required"/>
										</div>
										<div className="col-md-6 form-group"> 
											<input type="text" id="" name="" value="Designation" className="sm-form-control required"/>
										</div>
										<div className="col-md-6 form-group"> 
											<input type="text" id="" name="" value="Street / Address 1" className="sm-form-control required"/>
										</div>
										<div className="col-md-6 form-group"> 
											<input type="text" id="" name="" value="Street / Address 2" className="sm-form-control required"/>
										</div>
										<div className="col-md-6 form-group"> 
											<input type="text" id="" name="" value="City*" className="sm-form-control required"/>
										</div>
										<div className="col-md-6 form-group"> 
											<input type="text" id="" name="" value="State*" className="sm-form-control required"/>
										</div>
										<div className="col-md-6 form-group"> 
											<input type="text" id="" name="" value="Postal Code" className="sm-form-control required"/>
										</div>
										<div className="col-md-6 form-group"> 
											<select className="sm-form-control">
												<option>Select Country</option>
												<option value="Albania">Albania</option>
												<option value="Algeria">Algeria</option>
												<option value="American Samoa">American Samoa</option>
												<option value="Andorra">Andorra</option>
												<option value="Angola">Angola</option>
												<option value="Anguilla">Anguilla</option>
												<option value="Antigua">Antigua</option>
												<option value="Argentina">Argentina</option>
												<option value="Armenia">Armenia</option>
												<option value="Aruba">Aruba</option>
												<option value="Australia">Australia</option>
												<option value="Austria">Austria</option>
												<option value="Azerbaijan">Azerbaijan</option>
												<option value="Bahamas">Bahamas</option>
												<option value="Bahrain">Bahrain</option>
												<option value="Bangladesh">Bangladesh</option>
												<option value="Barbados">Barbados</option>
												<option value="Barbuda">Barbuda</option>
												<option value="Belgium">Belgium</option>
												<option value="Belize">Belize</option>
												<option value="Benin">Benin</option>
												<option value="Bermuda">Bermuda</option>
												<option value="Bhutan">Bhutan</option>
												<option value="Bolivia">Bolivia</option>
												<option value="Bonaire">Bonaire</option>
												<option value="Botswana">Botswana</option>
												<option value="Brazil">Brazil</option>
												<option value="British Virgin isl.">British Virgin isl.</option>
												<option value="Brunei">Brunei</option>
												<option value="Bulgaria">Bulgaria</option>
												<option value="Burundi">Burundi</option>
												<option value="Cambodia">Cambodia</option>
												<option value="Cameroon">Cameroon</option>
												<option value="Canada">Canada</option>
												<option value="Cape Verde">Cape Verde</option>
												<option value="Cayman Islands">Cayman Islands</option>
												<option value="Central African Rep.">Central African Rep.</option>
												<option value="Chad">Chad</option>
												<option value="Channel Islands">Channel Islands</option>
												<option value="Chile">Chile</option>
												<option value="China">China</option>
												<option value="Colombia">Colombia</option>
												<option value="Congo">Congo</option>
												<option value="Cook Islands">Cook Islands</option>
												<option value="Costa Rica">Costa Rica</option>
												<option value="Croatia">Croatia</option>
												<option value="Curacao">Curacao</option>
												<option value="Cyprus">Cyprus</option>
												<option value="Czech Republic">Czech Republic</option>
												<option value="Denmark">Denmark</option>
												<option value="Djibouti">Djibouti</option>
												<option value="Dominica">Dominica</option>
												<option value="Dominican Republic">Dominican Republic</option>
												<option value="Ecuador">Ecuador</option>
												<option value="Egypt">Egypt</option>
												<option value="El Salvador">El Salvador</option>
												<option value="Equatorial Guinea">Equatorial Guinea</option>
												<option value="Eritrea">Eritrea</option>
												<option value="Estonia">Estonia</option>
												<option value="Ethiopia">Ethiopia</option>
												<option value="Faeroe Islands">Faeroe Islands</option>
												<option value="Fiji">Fiji</option>
												<option value="Finland">Finland</option>
												<option value="France">France</option>
												<option value="French Guiana">French Guiana</option>
												<option value="French Polynesia">French Polynesia</option>
												<option value="Gabon">Gabon</option>
												<option value="Gambia">Gambia</option>
												<option value="Georgia">Georgia</option>
												<option value="Germany">Germany</option>
												<option value="Ghana">Ghana</option>
												<option value="Gibraltar">Gibraltar</option>
												<option value="Great Britain">Great Britain</option>
												<option value="Greece">Greece</option>
												<option value="Greenland">Greenland</option>
												<option value="Grenada">Grenada</option>
												<option value="Guadeloupe">Guadeloupe</option>
												<option value="Guam">Guam</option>
												<option value="Guatemala">Guatemala</option>
												<option value="Guinea">Guinea</option>
												<option value="Guinea Bissau">Guinea Bissau</option>
												<option value="Guyana">Guyana</option>
												<option value="Haiti">Haiti</option>
												<option value="Honduras">Honduras</option>
												<option value="Hong Kong">Hong Kong</option>
												<option value="Hungary">Hungary</option>
												<option value="Iceland">Iceland</option>
												<option value="India">India</option>
												<option value="Indonesia">Indonesia</option>
												<option value="Iraq">Iraq</option>
												<option value="Iran">Iran</option>
												<option value="Ireland">Ireland</option>
												<option value="Ireland, Northern">Ireland, Northern</option>
												<option value="Israel">Israel</option>
												<option value="Italy">Italy</option>
												<option value="Ivory Coast">Ivory Coast</option>
												<option value="Jamaica">Jamaica</option>
												<option value="Japan">Japan</option>
												<option value="Jordan">Jordan</option>
												<option value="Kazakhstan">Kazakhstan</option>
												<option value="Kenya">Kenya</option>
												<option value="Kuwait">Kuwait</option>
												<option value="Kyrgyzstan">Kyrgyzstan</option>
												<option value="Latvia">Latvia</option>
												<option value="Lebanon">Lebanon</option>
												<option value="Liberia">Liberia</option>
												<option value="Liechtenstein">Liechtenstein</option>
												<option value="Lithuania">Lithuania</option>
												<option value="Luxembourg">Luxembourg</option>
												<option value="Macau">Macau</option>
												<option value="Macedonia">Macedonia</option>
												<option value="Madagascar">Madagascar</option>
												<option value="Malawi">Malawi</option>
												<option value="Malaysia">Malaysia</option>
												<option value="Maldives">Maldives</option>
												<option value="Mali">Mali</option>
												<option value="Malta">Malta</option>
												<option value="Marshall Islands">Marshall Islands</option>
												<option value="Martinique">Martinique</option>
												<option value="Mauritania">Mauritania</option>
												<option value="Mauritius">Mauritius</option>
												<option value="Mexico">Mexico</option>
												<option value="Micronesia">Micronesia</option>
												<option value="Moldova">Moldova</option>
												<option value="Monaco">Monaco</option>
												<option value="Mongolia">Mongolia</option>
												<option value="Montserrat">Montserrat</option>
												<option value="Morocco">Morocco</option>
												<option value="Mozambique">Mozambique</option>
												<option value="Myanmar/Burma">Myanmar/Burma</option>
												<option value="Namibia">Namibia</option>
												<option value="Nepal">Nepal</option>
												<option value="Netherlands">Netherlands</option>
												<option value="Netherlands Antilles">Netherlands Antilles</option>
												<option value="New Caledonia">New Caledonia</option>
												<option value="New Zealand">New Zealand</option>
												<option value="Nicaragua">Nicaragua</option>
												<option value="Niger">Niger</option>
												<option value="Nigeria">Nigeria</option>
												<option value="Norway">Norway</option>
												<option value="Oman">Oman</option>
												<option value="Palau">Palau</option>
												<option value="Panama">Panama</option>
												<option value="Papua New Guinea">Papua New Guinea</option>
												<option value="Paraguay">Paraguay</option>
												<option value="Peru">Peru</option>
												<option value="Philippines">Philippines</option>
												<option value="Poland">Poland</option>
												<option value="Portugal">Portugal</option>
												<option value="Puerto Rico">Puerto Rico</option>
												<option value="Qatar">Qatar</option>
												<option value="Reunion">Reunion</option>
												<option value="Rwanda">Rwanda</option>
												<option value="Saba">Saba</option>
												<option value="Saipan">Saipan</option>
												<option value="Saudi Arabia">Saudi Arabia</option>
												<option value="Scotland">Scotland</option>
												<option value="Senegal">Senegal</option>
												<option value="Seychelles">Seychelles</option>
												<option value="Sierra Leone">Sierra Leone</option>
												<option value="Singapore">Singapore</option>
												<option value="Slovak Republic">Slovak Republic</option>
												<option value="Slovenia">Slovenia</option>
												<option value="South Africa">South Africa</option>
												<option value="South Korea">South Korea</option>
												<option value="Spain">Spain</option>
												<option value="Sri Lanka">Sri Lanka</option>
												<option value="Sudan">Sudan</option>
												<option value="Suriname">Suriname</option>
												<option value="Swaziland">Swaziland</option>
												<option value="Sweden">Sweden</option>
												<option value="Switzerland">Switzerland</option>
												<option value="Syria">Syria</option>
												<option value="Taiwan">Taiwan</option>
												<option value="Tanzania">Tanzania</option>
												<option value="Thailand">Thailand</option>
												<option value="Togo">Togo</option>
												<option value="Trinidad-Tobago">Trinidad-Tobago</option>
												<option value="Tunisia">Tunisia</option>
												<option value="Turkey">Turkey</option>
												<option value="Turkmenistan">Turkmenistan</option>
												<option value="United Arab Emirates">United Arab Emirates</option>
												<option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
												<option value="U.S.A.">U.S.A.</option>
												<option value="Uganda">Uganda</option>
												<option value="United Kingdom">United Kingdom</option>
												<option value="Uruguay">Uruguay</option>
												<option value="Uzbekistan">Uzbekistan</option>
												<option value="Vanuatu">Vanuatu</option>
												<option value="Vatican City">Vatican City</option>
												<option value="Venezuela">Venezuela</option>
												<option value="Vietnam">Vietnam</option>
												<option value="Wales">Wales</option>
												<option value="Yemen">Yemen</option>
												<option value="Zaire">Zaire</option>
												<option value="Zambia">Zambia</option>
												<option value="Zimbabwe">Zimbabwe</option>
											</select>
										</div>
										<div className="col-md-6 form-group"> 
											<input type="text" id="" name="" value="Phone Number*" className="sm-form-control required"/>
										</div>
										<div className="col-md-6 form-group"> 
											<input type="text" id="" name="" value="E-Mail ID*" className="sm-form-control required"/>
										</div>   

										<div className="col-6 form-group">  
											<textarea className="required sm-form-control valid" id="" name="" value="Enquiry / Comments*" rows="3" cols="30"></textarea>
										</div>

										<div className="col-6 form-group">
											<input type="checkbox" name="checkbox-254"/> 
												 <span style={{"margin-left":"15px;"}}>I accept the <a target="_blank" href="#">Terms &amp; Conditions</a> of the website.</span>
										</div>

										<div className="col-6"> 
										</div>

										<div className="col-6 form-group">
											<button className="button button-3d m-0" type="submit" id="" name="" value="Send">Send</button>
										</div>
									</div>

									  

								</form>
							</div> 
						</div>  
					</div> 
				</div>
              
			</div>
		</section>
        </>
    );
}

enquiry.propTypes = propTypes;
enquiry.defaultProps = defaultProps;
// #endregion

export default enquiry;