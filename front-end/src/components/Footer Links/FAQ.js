import React, { Component } from 'react'

class FAQ extends Component {
  render() {
    return (

        <div className="container">
          <br/><br/>
          <h1><center>Frequently Asked Questions</center></h1><br/>
          <hr/>
          
          <div id = "faq-list" class ="kj">
            
            <div>
            
            <h4 class ="lj">Account</h4>              
              <ol>
                <li>       
                  <a href = "#Forgot-Password"><u>I forgot my password, what do I do?</u></a>
                  </li>

                <li>
                  <a href = "#Compromised-Account"><u>My account has been compromised! How do i regain access?</u></a>
                  </li>

                <li>
                  <a href = "#Forgot-Email"><u>I forgot my email, what do I do?</u></a>
                  </li>
              
                
              </ol>  
            
            </div>
            
            <div>
            
            <h4 class = "lj">General</h4>
              <ol>
                <li>
                  <a href = "#What-is-Virgil"><u>What is Virgil's Travels?</u></a>
                  </li>

                <li>
                  <a href = "#Support-Us"><u>How can I help support Virgil's Travels?</u></a>
                  </li>

                <li>
                  <a href = "#Mobile"><u>Does Virgil's Travels work on mobile?</u></a>
                  </li>

                <li>
                  <a href = "#Live-Support"><u>Do you offer Live Chat Support?</u></a>
                  </li>

                <li>
                  <a href = "#Review"><u>How do I write a review on a location I have visited?</u></a>
                  </li>

                <li>
                  <a href = "#Dest-Info"><u>My destination does not have information, what do I do now?</u></a>
                  </li>

                <li>
                  < a href = "#Name"><u>Why are you named "Virgil's Travels"?</u></a>
                  </li>

              </ol>
            
            </div>
            <hr></hr>

            <div>
            <h3 class ="lj">Account</h3>
            <hr></hr>
            

              <dl id = "Forgot-Password" data-test-id = "faqEntry">
                <dd>
                  <abbr title = "Question">Q: </abbr>
                  <h6><b>I forgot my password, what do I do?</b></h6>
                  </dd>
                
                <dd>
                  <abbr title = "Answer">A:</abbr>
                  <div>
                  <p>
                    This is a common mistake and there is no need to worry. The easiest way to regain access to your password is:
                    <br></br>
                    <br></br>
                  </p>
                  <ol>
                    <li>
                      Go to the website's home page and select the login/create account on the top right corner.
                    </li>
                    <li>
                      Click on forgot password. The link should be under the login credentials.
                    </li>
                    <li>
                      Enter your email.
                    </li>
                    <li>
                      Check your email, then click the link and you will be redirected to a change password page.
                    </li>
                  </ol>
                  
                  
                  <p>
                    You should now be able to access your account! We're glad you're back with us!
                  </p>
                  </div>
                </dd> 
                
                <dd>
                  <a href = "#faq-list"> Return to Top</a>
                </dd> 
                <hr></hr>
              </dl>

              <dl id = "Compromised-Account" data-test-id = "faqEntry">
                  <dd>
                    <abbr title = "Question">Q:</abbr>
                    <h6><b>My account has been compromised! How do I regain access?</b></h6>
                  </dd>

                  <dd>
                    <abbr title = "Answer">A:</abbr>
                    <div>
                    <p>
                    If you are 100% sure your account has been compromised, allow us to help you get your account back. 
                    Use the following steps as a guide in recovering your account: 
                    </p>
                    <ol>
                      <li>
                        Scroll to the bottom of the page and select Contact Us.
                      </li>
                      <li>
                        Use the email provided and explain to us what exactly happened. This means, how the account was taken (if you don't know, please state that as well),
                        how long ago your password and/or email was changed, and any other details regarding your account loss.
                      </li>
                      <li>
                        Wait for an email from one of our representatives.
                      </li>
                    </ol>
                    <p>
                      Once you have regained access, make sure you use a completely new password! We can't stress how much we value your privacy.
                    </p>
                    </div>
                  </dd>

                  <dd>
                    <a href = "#faq-list"> Return to Top</a>
                  </dd>
                  <hr></hr>
                </dl>
              
              <dl id = "Forgot-email" data-test-id = "faqEntry">
                  <dd>
                    <abbr title = "Question">Q:</abbr>
                    <h6><b>I forgot my email, what do i do?</b></h6>
                  </dd>

                  <dd>
                    <abbr title = "Answer">A:</abbr>
                    <div>
                    <p>
                    It happens to the best of us! Email recovery is just a few steps away:
                    </p>
                    <ol>
                      <li>
                        Navigate to the top right of the website.
                      </li>
                      <li>
                        Click on the login button.
                      </li>
                      <li>
                        In the login screen, rather than entering credentials, select "Forgot Email".
                      </li>
                      <li>
                        Enter your phone number and answer the security questions.
                      </li>
                      
                    </ol>
                    <p>
                      Once you have regained access, make sure you keep track of the email you used! We don't want you to miss out on information for your trip!
                    </p>
                    </div>
                  </dd>

                  <dd>
                    <a href = "#faq-list"> Return to Top</a>
                  </dd>
                  <hr></hr>
              </dl>

            </div>

            <div>
            
            <h3 class ="lj">General</h3>
            <hr></hr>
            
            
              <dl id = "What-is-Virgil" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>What is Virgil's Travels?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                      Virgil's Travels is a guide to your next destination! We offer tips, popular locations, and even reviews from fellow tripsters!
                      If you with to know more go ahead and check out our "About us" at the bottom of the page so we can give you an in depth look at who we are as a company. 
                      </p>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Support-Us" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>How can I help support Virgil's Travels?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                      Our site is free to use! There are no subscriptions, or payments to be made. All we ask is that our users contribute to the growth of the site through their reviews! 
                      </p>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Mobile" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>Does Virgil's Travels work on mobile?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                      The answer is yes! Virgil's Travels is mobile compatible. This means you can access our site wherever you decide to take your trip to!
                      </p>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Live-Support" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>Do you offer Live Chat Support?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                      We're sorry to say that this is a feature we are still working on! Stay tuned in however, we'll add a menu for that once we get it up and running!
                      </p>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Review" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>How do I write a review on a location I have visited?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                      This is a simple process that we can break down to a few steps:
                      </p>
                      <ol>
                        <li>
                          Make sure you are logged on to your Virgil's Travels account. Only users with an account may leave a review.
                        </li>
                        <li>
                          Click on the dropdown located on the navigation bar.
                        </li>

                        <li>
                          Select the location you have visited.
                        </li>

                        <li>
                          Add your review! Let us know your honest feedback about your experience.
                        </li>

                      </ol>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Dest-Info" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>My destination does not have information, what do I do now?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                      We aplogoize for not having information to help you on your trip. Let us know via email! Our email is located at the bottom of the page on the "About Us".
                      </p>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Name" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>Why are you named "Virgil's Travels"?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                      Ask the creator of the name! Bryan Rojas (creator of the name) takes pride in his combination of travelling through the country and Dante's Inferno.
                      </p>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    
              </dl>

            </div>

            

          
          </div>
          
          
          
          <br/><br/><br/>
        </div>

    )
  }
}

export default FAQ