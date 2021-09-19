import React, { useState, useEffect, useStateWithCallbackLazy } from "react";

import Rate from "rc-rate";
import axios from "axios";
import Swal from "sweetalert2";

import emailIcon from "../../assets/images/email.png";
import rickrollGif from "../../assets/gifs/dance-moves.gif";

import "rc-rate/assets/index.css";
import "./contact.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Contact = () => {
  const [state, setState] = useState({
    ipAddress: "",
    message: "",
    rating: 0,
    email: "",
    country: "",
  });

  const getIpAddress = async () => {
    try {
      const response = await axios.get("https://geolocation-db.com/json/");
      const { country_name: country, IPv4: ipAddress } = response.data;

      setState({
        ...state,
        country,
        ipAddress,
      });
      postIpAddress({ country, ipAddress });
    } catch (error) {
      console.error("duplicated data", error);
    }
  };

  const postIpAddress = (data) => {
    axios.post(`${BASE_URL}visits`, data).then(() => {
      Swal.fire({
        title: "<span style='color: yellow'>Welcome to my portfolio!</span",
        width: 600,
        padding: "3em",
        background: `#fff url(${rickrollGif})`,
        allowOutsideClick: false,
      });
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!state.message || !state.email) {
      Swal.fire({
        icon: "error",
        title: "Oops... please input email and message",
        text: "Something went wrong!",
      });
    }

    if (state.message && state.email) {
      try {
        const response = axios.post(`${BASE_URL}contacts`, state);
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Message sent!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.log(error);
      }

      setState({
        message: "",
        email: "",
        rating: 0,
        ipAddress: "",
        country: "",
      });
    }
  };

  useEffect(() => {
    getIpAddress();
    // postIpAddress();
  }, []);

  return (
    <>
      <section className='section-contact' id='section-contact'>
        <div className='container'>
          <h1>Contact Me</h1>
          <div className='content-contact'>
            <form onSubmit={handleSubmit}>
              <div className='section-intro'>
                <img src={emailIcon} alt='email' className='email-img' />
                <p>
                  <strong>How can I help?</strong>
                </p>
                <p style={{ marginTop: "-1em" }}>Message me for inquiries.</p>
              </div>
              <div className='form-control'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter email ...'
                  value={state.email}
                  onChange={handleChange}
                />
              </div>
              <div className='form-control'>
                <textarea
                  name='message'
                  id='message'
                  cols='30'
                  rows='10'
                  placeholder='Enter message here ...'
                  value={state.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <h3>Rate me:</h3>
              <Rate
                defaultValue={state.rating}
                style={{
                  marginBottom: "1em",
                  marginTop: "-0.5em",
                  fontSize: "2.5em",
                }}
                onChange={(value) => setState({ ...state, rating: value })}
              />
              <button type='submit'>Send</button>
            </form>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61777.87657630503!2d121.08812162562562!3d14.592392004031725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b87f701edd6b%3A0xe1c1fe496d818869!2sCainta%2C%20Rizal!5e0!3m2!1sen!2sph!4v1631199657594!5m2!1sen!2sph'
              style={{ border: 0, borderRadius: "1em" }}
              allowFullScreen=''
              loading='lazy'
              className='google-map'
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
