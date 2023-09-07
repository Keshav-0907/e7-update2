import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { Box, Container, Typography } from '@mui/material'
import { Grid } from '@mui/material'





const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_pb9hapv",
                "template_fbi8scr",
                form.current,
                "F4-cL2_b52u2Ir2oI"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Your message has been sent successfully. We will contact you soon!')


                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', backgroundColor: '#D5D5D5', paddingY: '30px' }} >
                <Typography sx={{ fontSize: '30px' }} >
                    Contact Us
                </Typography>
                <Typography sx={{ fontSize: '10px' }}>
                    Thank you for choosing to connect with us. We value your time and will reach to you as soon as possible.
                </Typography>
            </Box>

            {/* <Container>

                <Link to='/'>
                    <Grid sx={{
                        display: 'inline-block',
                        alignItems: 'center',
                        margin: '20px',
                        backgroundColor: '#FF971E',
                        padding: '10px',
                        borderRadius: '10px',
                        color: 'black',
                        '&:hover': {
                            backgroundColor: '#FFB55F',
                            color: '#fff',
                        },
                    }}>
                        ← Go back
                    </Grid>
                </Link>
            </Container> */}

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Container sx={{
                    width: '50%',
                    '@media (max-width: 1200px)': {
                        display: 'none'
                    }

                }}>
                    <img src="https://static.vecteezy.com/system/resources/previews/021/666/231/original/3d-rendering-of-a-customer-service-illustration-call-center-online-customer-support-contact-us-customer-service-for-personal-assistant-service-3d-rendering-png.png" width="600px" alt="err" />
                </Container>

                <Container sx={{

                }}>
                    <Grid sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <div class="container">
                            <form id="contact" ref={form} onSubmit={sendEmail}>
                                <h4>Contact us for custom quote</h4>
                                <fieldset>
                                    <input placeholder="Your name" name="user_name" type="text" tabindex="1" required autofocus />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Email Address"  name="user_email"  type="email" tabindex="2" required />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Phone Number (optional)" name="user_phone" type="tel" tabindex="3" required />
                                </fieldset>
                                <fieldset>
                                    <select className='select' name="user_value" id="cars" required>
                                        <option value="Legal Document Support">Legal Document Support</option>
                                        <option value="Set-Up your E-Commerce Bussiness">Set-Up your E-Commerce Bussiness</option>
                                        <option value="Imaging and Cataloging Services">Imaging and Cataloging Services</option>
                                        <option value="Grow your E-Commerce">Grow your E-Commerce</option>
                                    </select>
                                </fieldset>
                                <fieldset>
                                    <textarea placeholder="Type your message here...." name="message" tabindex="5" required></textarea>
                                </fieldset>
                                <fieldset>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                </fieldset>

                            </form>
                        </div>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Contact;;

