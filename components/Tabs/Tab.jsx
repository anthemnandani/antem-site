import React, { useState, useEffect, useRef } from "react";
import { Tab, Nav, Container, Row, Col } from "react-bootstrap";
import industrySolutions from "../../data/IndustriesTabs/industry_solutions.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from 'react-parallax-tilt';
import {
    faIndustry,
    faBriefcase,
    faCogs,
    faUtensils,
    faLaptopCode,
    faBullhorn,
    faHome,
    faPlane,
    faTruck,
    faHardHat,
    faHeartbeat,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../../services/tokenservice";
import { getProjects } from "../../services/projectsservices";
import WorkItemTwo from "../Work/WorkItemTwo";
import Loader from "../../container/Loader/Loader";

function ReactTabs({ industryType }) {
    const [scale] = useState(1.04);
    const [activeKey, setActiveKey] = useState(null);
    const [token, setToken] = useState(null);
    const navigation = useNavigate();
    const [projects, setProject] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState(null)
    const [loading, setLoading] = useState(true);
    const [relatedProductsID, setRelatedProductsID] = useState(null)

    function setRelatedProductsIDs() {
        const availableIDs = [
            1, 2, 3, 5, 15, 16, 4, 18, 35, 36, 7, 8, 9, 43, 90, 14, 47, 48, 51, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 37, 39, 44, 53, 54,
            49, 55, 57, 91, 96, 46, 56, 61, 79, 81, 103, 80, 83, 85, 86, 87, 97, 82,
            88, 33, 42, 6, 34, 38, 45, 17, 41, 89, 92, 95, 93, 94
        ];
        const selectedIDs = [];
        const totalNumbers = 3;

        while (selectedIDs.length < totalNumbers) {
            const randomIndex = Math.floor(Math.random() * availableIDs.length); // Random index
            const randomID = availableIDs[randomIndex];

            if (!selectedIDs.includes(randomID)) {
                selectedIDs.push(randomID); // Add unique ID to the result
            }
        }
        return selectedIDs;
    }

    useEffect(() => {
        AOS.init();

        const filteredIndustryType = industrySolutions.filter((data) => data.title.replace(/\s+/g, '-') === industryType);

        if (filteredIndustryType.length > 0) {
            setActiveKey(filteredIndustryType[0].id);
            // setRelatedProductsID(filteredIndustryType[0]?.relatedProductsID)
        } else if (industrySolutions.length > 0) {
            setActiveKey(industrySolutions[0].id);
            // setRelatedProductsID(industrySolutions[0]?.relatedProductsID)
        }
        // Outputs an array of 6 random numbers between 1 and 103
        setRelatedProductsID(setRelatedProductsIDs());

    }, [industryType, industrySolutions]);

    const handleTabChange = (solutionTitle) => {
        navigation(`/Home/Industries?Industrytype=${solutionTitle}`);
    };

    const getIcon = (id) => {
        switch (id) {
            case 1: return faIndustry; // Workforce Compliance Solutions
            case 2: return faBriefcase; // Publishing Rights Management
            case 3: return faCogs; // Financial Audit Compliance Solutions
            case 4: return faUtensils; // Food Ordering Solutions
            case 5: return faLaptopCode; // Information Technology Solutions
            case 6: return faBullhorn; // Business Promotion Solutions
            case 7: return faHome; // HOA Automation Solutions
            case 8: return faPlane; // Travel Industry Solutions
            case 9: return faTruck; // Logistics and Supply Chain Management
            case 10: return faHardHat; // Construction Industry Software
            case 11: return faHeartbeat; // Healthcare and Medical Solutions
            case 12: return faGlobe; // Tourism and Travel Solutions
            default: return faIndustry; // Default icon
        }
    };

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
            const fetchProjects = async () => {
                try {
                    const projects = await getProjects();
                    setProject(projects);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchProjects();
        }
    }, [token]);

    useEffect(() => {
        const fetchFilteredProjects = async () => {
            setLoading(true);
            if (Array.isArray(relatedProductsID) && relatedProductsID.length > 0) {
                const filteredData = projects.filter(project => relatedProductsID.includes(project.projectID));
                setFilteredProjects(filteredData);
            }
            setLoading(false);
        };
        fetchFilteredProjects();
    }, [relatedProductsID, projects]);


    return (
        <div className="section section-padding-top brand-section section section-padding-bottom background-1">
            <Container className="new-custom-tabs mb-6">
                <div className="custom-tabs">
                    {industrySolutions.slice(0, industrySolutions.length).map((solution, index) => (
                        <div key={index} className="custom-tab-container">
                            <input
                                type="radio"
                                name="custom-tabs"
                                id={`custom-tab${index}`}
                                checked={solution.id === activeKey}
                                onChange={() => handleTabChange(solution.title.replace(/\s+/g, '-'))}
                            />
                            <label htmlFor={`custom-tab${index}`} className="custom-tab-label">
                                <FontAwesomeIcon icon={getIcon(solution.id)} className="tab-icon mb-2" />
                                {solution.title}
                            </label>
                            <div className="custom-tab-content">
                                <div className="row">
                                    <div className="col-xl-6 tab-content-image">
                                        <Tilt scale={scale} transitionSpeed={4000}>
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/${solution.image}`} // Replace with actual path
                                                alt={solution.title}
                                                className="img-fluid rounded"
                                                data-aos="fade-right"
                                            />
                                        </Tilt>
                                    </div>
                                    <div className="col-xl-6 tab-content-info">
                                        <h2>{solution.title}</h2>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="tagcloud">
                                                    {solution.highlights.map((highlight, index) => (
                                                        <p key={index}>
                                                            <Link to={`#`}>{highlight}</Link>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="justify-content">{solution.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 ind-project-pattion">
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-n6">
                        {
                            loading ? (
                                <Loader />
                            ) : (
                                filteredProjects &&
                                filteredProjects.map((single, index) => (
                                    <div key={index} className="col mb-6" data-aos="fade-up">
                                        <WorkItemTwo classOption="box-border" data={single} />
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </Container >
        </div >
    );
}

export default ReactTabs;
