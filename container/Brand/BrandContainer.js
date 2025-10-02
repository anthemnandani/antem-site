"use client";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Brand from "../../components/Brand/Brand";
//import { Swiper, SwiperSlide } from "../../components/swiper";
import SwiperSlider, { Swiper, SwiperSlide } from "../../components/swiper";
import Loader from "../Loader/Loader";
import { getClients } from "../../services/clientsservice";
import { getToken } from "../../services/tokenservice";

const BrandContainer = ({ classOption }) => {
  const [token, setToken] = useState(null);
  const [brandData, setBrandData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchClients = async () => {
        try {
          const data = await getClients();
          const modifiedClients = data.map((client) => ({
            ...client,
            logo1: `/ClientImages/${client.logo1}`, // adjust to Next.js public folder or Cloudinary URL
            logo2: `/ClientImages/${client.logo2}`,
          }));
          setBrandData(modifiedClients);
        } catch (err) {
          console.error(err.message);
        } finally {
          setLoading(false);
        }
      };
      setLoading(true);
      fetchClients();
    }
  }, [token]);

  const sliderOptions = {
    spaceBetween: 30,
    slidesPerView: 6,
    loop: true,
    breakpoints: {
      1200: { slidesPerView: 6 },
      992: { slidesPerView: 5 },
      768: { slidesPerView: 5 },
      576: { slidesPerView: 4 },
      320: { slidesPerView: 2 },
    },
  };

  if (loading) return <Loader />;

  return (
    <section className={`brand-section section ${classOption}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up">
            <div className="brand-wrapper">
              <div className="brand-list">
                <Swiper className="brand-carousel" options={sliderOptions}>
                  {brandData &&
                    brandData.map((single, key) => (
                      <SwiperSlide key={key}>
                        <Brand data={single} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BrandContainer.propTypes = {
  classOption: PropTypes.string,
};
BrandContainer.defaultProps = {
  classOption: "brand-section section section-padding-bottom",
};

export default BrandContainer;
