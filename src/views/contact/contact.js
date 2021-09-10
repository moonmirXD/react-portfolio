import React, { useState, Component, useEffect } from "react";

import Rate from "rc-rate";
import axios from "axios";
import Swal from "sweetalert2";

import emailIcon from "../../assets/images/email.png";

import "rc-rate/assets/index.css";
import "./contact.css";

const url = "https://portfolio-raiiiisu.herokuapp.com/api/contacts";
const Contact = () => {
  const [state, setState] = useState({
    ipAddress: "",
    message: "",
    rating: 0,
    email: "",
    country: "",
  });

  const getIpAddress = async () => {
    const response = await axios.get("https://geolocation-db.com/json/");
    const { country_name: country, IPv4: ipAddress } = response.data;
    setState({
      ...state,
      country,
      ipAddress,
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!state.message || !state.email) {
      Swal.fire({
        icon: "error",
        title: "Oops... please input email and message",
        text: "Something went wrong!",
      });
    }

    if (state.message && state.email) {
      axios.post(url, state).then((res) => {
        Swal.fire({
          icon: "success",
          title: "Message sent!",
          showConfirmButton: false,
          timer: 1500,
        });
      });

      setState({
        message: "",
        email: "",
        rating: "",
      });
    }
  };

  useEffect(() => {
    getIpAddress();
  }, []);

  return (
    <>
      <section className='section-contact'>
        <div className='container'>
          <h1>Contact Me</h1>
          <div className='content-contact'>
            <form onSubmit={handleSubmit}>
              <div className='section-intro'>
                <img
                  src={emailIcon}
                  alt='email'
                  srcset=''
                  className='email-img'
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis, tempore!
                </p>
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
              <h3 style={{ color: "#cccc09" }}>Rate me 🥺</h3>
              <Rate
                defaultValue={state.value}
                style={{ marginBottom: "1em", fontSize: "2.5em" }}
                onChange={(value) => setState({ ...state, rating: value })}
              />
              <button type='submit'>Send</button>
            </form>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61777.87657630503!2d121.08812162562562!3d14.592392004031725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b87f701edd6b%3A0xe1c1fe496d818869!2sCainta%2C%20Rizal!5e0!3m2!1sen!2sph!4v1631199657594!5m2!1sen!2sph'
              style={{ border: 0, borderRadius: "1em" }}
              allowfullscreen=''
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
