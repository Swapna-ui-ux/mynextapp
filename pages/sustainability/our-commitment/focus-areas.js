import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const Focusareas = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Focus Areas</h2>
								</div> 
								 <div className="col-sm-12">
                                   <div className="accordion accordion-bg">
										<div className="accordion-header accordion-active">
											<div className="accordion-icon">
												<i className="accordion-closed icon-plus"></i>
												<i className="accordion-open icon-minus"></i>
											</div>
											<div className="accordion-title">
												FOCUS AREAS AND SDGs
											</div>
										</div>
										<div className="accordion-content" style={{"display": "none;"}}>
											<p>Our areas of focus are diverse and dynamic, and the project we undertake are always based on the needs and necessities of our stakeholders. However, we do have few key areas that we focus on such as Education, Health, Rural Development, Nutrition, etc. This section briefly highlights our work and how it aligns with both the rules and regulations of the Companies Act, 2013, as well as several of the 17 Sustainable Development Goals (SDGs) set by the United Nations.</p>
										<div className="table-responsive">
											<table className="table table-bordered table-striped">
												<tbody>
													<tr className="success" style={{"background-color": "#dff0d8;"}}> 
														<td>Theme as per Schedule VII</td>
														<td style={{"width": "305px;"}}>Mapping with Sustainable Development Goals (SDGs)</td>
														<td>Projects Done</td>
														<td>Stakeholders</td>
														<td>Percent CSR spent (2014 – 21)</td>
													</tr>
													<tr>
														<td><b>Education</b></td>
														<td>
															<div className="row">
																<div className="col-md-6 col-xs-4"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/quality-education.jpg"/></div>
																<div className="col-md-6 col-xs-4"><img src="/img/focus-areas/partnership.jpg"/></div>
															</div>
														</td>
														<td>Renovation and transformation of Govt. schools, construction of new Govt. schools in collaboration with local government bodies and NGOs</td>
														<td>Students, teachers and schools</td>
														<td>20%</td>
													</tr>
													<tr>
														<td><b>Health</b></td>
														<td>
															<div className="row">
																<div className="col-md-6 col-xs-4"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/googhealth.jpg"/></div>
																<div className="col-md-6 col-xs-4"><img src="/img/focus-areas/partnership.jpg"/></div>
															</div>
														</td>
														<td>Construction of hospital, eye care centre, blood bank, etc., provision of medical equipment to various health care centres, conduction of free healthcare camps</td>
														<td>Patients, families/attendants, senior citizens and children</td>
														<td>23%</td>
													</tr>
													<tr>
														<td><b>Nutrition</b></td>
														<td>
															<div className="row">
																<div className="col-md-6 col-xs-4"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/zerohunger.jpg"/></div>
																<div className="col-md-6 col-xs-4"><img src="/img/focus-areas/partnership.jpg"/></div>
															</div>
														</td>
														<td>Construction of centralised kitchen in collaboration with HKM Charitable Foundation, distribution of food and commodities during calamities</td>
														<td>Poor and underprivileged population</td>
														<td>12%</td>
													</tr>
													<tr>
														<td><b>WASH (Water and Sanitation)</b></td>
														<td>
															<div className="row">
																<div className="col-md-6 col-xs-4"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/cleanwater.jpg"/></div>
																<div className="col-md-6 col-xs-4"><img src="/img/focus-areas/googhealth.jpg"/></div>
															</div>
														</td>
														<td>Establishment of sustainable rural drinking water systems such as RO Water plants and setting up water distribution systems and construction of clean and modern toilets in schools, hospitals, villages, etc., in collaboration with NGOs and local governing bodies</td>
														<td>Men, women, children and senior citizens in rural areas</td>
														<td>3%</td>
													</tr>
													<tr>
														<td><b>Rural Development and Environmental Sustainability</b></td>
														<td>
															<div className="row">
																<div className="col-md-6 col-xs-3"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/nopoverty.jpg"/></div>
																<div className="col-md-6 col-xs-3"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/responsible.jpg"/></div>
																<div className="col-md-6 col-xs-3"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/lifeonland.jpg"/></div>
																<div className="col-md-6 col-xs-3"><img src="/img/focus-areas/climateaction.jpg"/></div>
															</div>
														</td>
														<td>Establishment of Farmer-Producer Organisation to promote and support marginalised and poor farmers, promotion of sustainable agricultural practices, development of infrastructure in villages.
															<br/>Protecting the environment by planting saplings, preserving the nature in rural areas through our varied contributions to the Greenbelt Development and Harithaharam initiatives.</td>
														<td>Rural population, small and marginalised farmers</td>
														<td>17%</td>
													</tr>
													<tr>
														<td><b>Skilling</b></td>
														<td>
															<div className="row">
																<div className="col-md-6 col-xs-4"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/quality-education.jpg"/></div>
																<div className="col-md-6 col-xs-4"><img src="/img/focus-areas/decentwork.jpg"/></div>
															</div>
														</td>
														<td>Establishment of skill development centre in Varisam, Srikakulam for science graduates to improve their skills and knowledge and gain employment support to other skill development projects and activities</td>
														<td>Recent graduates from economically challenged backgrounds, Poor and marginalised farmers, etc.,</td>
														<td>4%</td>
													</tr>
													<tr>
														<td><b>Women’s Empowerment</b></td>
														<td>
															<div className="row">
																<div className="col-md-6 col-xs-4"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/genderequality.jpg"/></div>
																<div className="col-md-6 col-xs-4"><img src="/img/focus-areas/partnership.jpg"/></div>
															</div>
														</td>
														<td>As part of our model villages programme, we have encouraged and supported unemployed women to develop various skills and promoted independence and entrepreneurship among them so as to earn their own income, establishment of a Disha Women’s Police Station in Vizianagaram to strengthen women’s safety</td>
														<td>Women from rural areas</td>
														<td>0.41%</td>
													</tr>
													<tr>
														<td><b>Other activities – Disaster Relief, Rural Sports, Old Age Homes, etc.,</b></td>
														<td>
															<div className="row">
																<div className="col-md-6 col-xs-3"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/nopoverty.jpg"/></div>
																<div className="col-md-6 col-xs-3"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/googhealth.jpg"/></div>
																<div className="col-md-6 col-xs-3"><img style={{"margin-bottom": "10px;"}} src="/img/focus-areas/reduced-inequalities.jpg"/></div>
																<div className="col-md-6 col-xs-3"><img src="/img/focus-areas/partnership.jpg"/></div>
															</div>
														</td>
														<td>Donation to state and central disaster relief funds (COVID-19, floods, cyclones, etc.), setting up of old age homes and orphanages to provide shelter to underprivileged communities, supporting exceptional athletes from rural areas to help them reach their true potential</td>
														<td>Rural population, senior citizens, children, athletes, etc.</td>
														<td>20%</td>
													</tr>
												</tbody>
											</table>
											</div>
										</div> 
									</div>
						        </div>
 	 	 	  
							
						</div>  
					</div> 
				</div>
			</div>
		</section>
        </>
    );
}

Focusareas.propTypes = propTypes;
Focusareas.defaultProps = defaultProps;
// #endregion

export default Focusareas;